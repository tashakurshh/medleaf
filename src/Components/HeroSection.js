import React, { useState } from "react";
import { Button, Upload } from "antd";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import "./HeroSection.css";

const HeroSection = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState(null);

  const handleImageChange = (file) => {
    setImage(file);
    setFileName(file.name);
    return false;
  };

  const safeJoin = (arr) => (Array.isArray(arr) ? arr.join(", ") : "N/A");

  const handlePredict = async () => {
    if (!image) return alert("Please upload an image first.");

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post(
        "http://localhost:8000/predict/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Error occurred during prediction.");
    }
  };

  return (
    <div className="hero-container">
      <div className="left-section">
        <div className="logo">🌿 Medleaf</div>
        <h5>"AI THAT KNOWS YOUR PLANTS AND THEIR POWERS.</h5>
        <h1>
          AI-POWERED <br />
          <span>
            LEAF GUIDE AT <br /> YOUR FINGERTIPS.
          </span>
        </h1>
        <p1>
          Upload a photo and let our AI instantly tell you the Plant’s name,
          Uses, and Medicinal benefits.
        </p1>

        <div className="upload-container">
          <Upload
            accept="image/*"
            showUploadList={false}
            beforeUpload={handleImageChange}
            className="upload-wrapper"
          >
            <Button icon={<PlusOutlined />} className="upload-btn">
              Upload Image
            </Button>
          </Upload>
          {fileName && (
            <span
              style={{
                // marginLeft: "10px",
                fontSize: "1rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                // maxWidth: "200px",
                display: "flex",
                justifyContent: "center",
              }}
              title={fileName}
            >
              Selected Image: {fileName}
            </span>
          )}
          <div className="predict-wrapper">
            <Button
              type="primary"
              onClick={handlePredict}
              className="predict-btn"
            >
              Predict
            </Button>
          </div>
        </div>

        {result && (
          <div style={{ marginTop: 20 }}>
            <h2>Top 5 Predictions</h2>

            <Collapse accordion className="predictions-accordion">
              {result.top_5.map((item, index) => (
                <Collapse.Panel
                  header={`${index + 1}. ${item.name} (${item.confidence}%)`}
                  key={index}
                  className="prediction-panel"
                >
                  <p>
                    <strong>Scientific Name:</strong>{" "}
                    {item.scientific_name || "N/A"}
                  </p>
                  <p>
                    <strong>Family:</strong> {item.family || "N/A"}
                  </p>
                  <p>
                    <strong>Properties:</strong> {safeJoin(item.properties)}
                  </p>
                  <p>
                    <strong>Uses:</strong> {safeJoin(item.uses)}
                  </p>
                </Collapse.Panel>
              ))}
            </Collapse>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
