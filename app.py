from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.nn import sigmoid
from tensorflow import expand_dims
from io import BytesIO
import numpy as np
import json
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

# --- FastAPI Setup ---
app = FastAPI()

# CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Load model ---
model = load_model("Trained_model.keras", compile=False)

# --- Load plant info JSON ---
with open("prop.json", "r", encoding="utf-8") as f:
    plant_data = json.load(f)

# --- Class names (must match model training order) ---
class_names = [
    'Aloevera', 'Amla', 'Amruthaballi', 'Arali', 'Bamboo', 'Beans', 'Betel', 'Bhrami',
    'Castor', 'Citron lime (herelikai)', 'Coriender', 'Curry', 'Drumstick', 'Fenugreek',
    'Gasagase', 'Guava', 'Hibiscus', 'Insulin', 'Jackfruit', 'Jasmine',
    'Lantana', 'Lemon', 'Malabar_Nut', 'Malabar_Spinach', 'Mango', 'Mint', 'Neem',
    'Onion', 'Palak(Spinach)', 'Papaya', 'Parijatha', 'Pomoegranate', 'Pumpkin', 'Rasna',
    'Rose', 'Spinach1', 'Tamarind', 'Tulsi', 'Turmeric', 'ashoka'
]

# --- Prediction endpoint ---
@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        # Step 1: Read image
        contents = await file.read()
        image = load_img(BytesIO(contents), target_size=(299, 299))

        # Ensure RGB mode
        if image.mode != 'RGB':
            image = image.convert('RGB')

        # Step 2: Preprocess EXACTLY like in Jupyter
        image_array = img_to_array(image)   # ❌ No /255.0 unless model trained that way
        image_array = expand_dims(image_array, 0)  

        # Step 3: Model prediction
        predictions = sigmoid(model.predict(image_array)[0]).numpy()

        # Step 4: Get Top 5 predictions
        top_indices = predictions.argsort()[-5:][::-1]
        results = []

        for index in top_indices:
            name = class_names[index]
            confidence = float(predictions[index]) * 100

            # Find plant info from JSON
            plant_info = next((p for p in plant_data if p["name"] == name), None)

            results.append({
                "name": name,
                "confidence": round(confidence, 2),
                "scientific_name": plant_info.get("scientific_name", "N/A") if plant_info else "N/A",
                "family": plant_info.get("family", "N/A") if plant_info else "N/A",
                "other_names": plant_info.get("other_names", []) if plant_info else [],
                "properties": plant_info.get("properties", []) if plant_info else [],
                "uses": plant_info.get("uses", []) if plant_info else []
            })

        return {
            "top_prediction": results[0],
            "top_5": results
        }

    except Exception as e:
        return {"error": str(e)}
