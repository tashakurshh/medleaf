# 🌿 MedLeaf – AI-Powered Medicinal Plant Identification  

MedLeaf is a deep learning–based system for **classifying and identifying medicinal plants from leaf images**.  
It leverages **Xception/MobileNet** models for high accuracy and provides detailed plant information such as **scientific name, family, and medicinal uses**.  

Deployed using a **FastAPI backend** and **React frontend**, MedLeaf enables **real-time plant recognition**.  

---

## ✨ Features  
- 🖼️ **Medicinal plant classification** from leaf images  
- ⚡ **High accuracy** with transfer learning (Xception, MobileNet)  
- 🌐 **End-to-end deployment** (FastAPI backend + React frontend)  
- 📊 Shows **scientific name, family, and medicinal benefits**  
- 🎓 Useful for **education, Ayurveda research, and agriculture**  

---

## 📂 Project Structure  
MedLeaf/
│── backend/ # FastAPI backend for inference
│── frontend/ # React web interface
│── models/ # Trained deep learning models (Xception/MobileNet(not included in repo due to size)
│── dataset/ # Medicinal plant dataset (not included in repo due to size)
│── notebooks/ # Training & evaluation Jupyter notebooks
│── requirements.txt
│── README.md

## ⚙️ Installation  

### 1️⃣ Clone the repository  

git clone https://github.com/yourusername/MedLeaf.git
cd MedLeaf

2️⃣ Create a virtual environment

python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

3️⃣ Install dependencies

pip install -r requirements.txt

🚀 Usage
🔹 Run Backend (FastAPI)
uvicorn main:app --reload

🔹 Run Frontend (React)
npm install
npm start
Then open: http://localhost:3000/

🧠 Model Training
Preprocess dataset with image_dataset_from_directory.
Train using Xception/MobileNet with transfer learning.
Evaluate with metrics (accuracy, precision, recall, F1).
Save the best model in /models.
Training code & notebooks are inside notebooks/.

📊 Results

Accuracy: ~97% (Xception), ~95% (MobileNet)
Loss: ~0.07 (Xception)
Evaluation metrics: Precision, Recall, F1-score included

🌿 Medicinal Plant Information

Along with predictions, MedLeaf provides:
1.Scientific Name
2.Plant Family
3.Medicinal Uses & Benefits

🛠️ Tech Stack

1.Deep Learning: TensorFlow / Keras
2.Models: Xception
3.Backend: FastAPI
4.Frontend: React

Deployment: Localhost (can be extended to cloud/Heroku/AWS)

📌 Future Enhancements
📱 Mobile app integration
☁️ Cloud deployment (AWS/Heroku)
🔍 Search & filter functionality
🌍 Multi-language support
🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

📜 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Medicinal Leaf Dataset
TensorFlow & Keras Documentation
Ayurveda & medicinal plant research articles
