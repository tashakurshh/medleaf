import React from "react";
import "./About.css";
import { Card, Row, Col } from "antd";

const About = () => {
  return (
    <div
      className="about-section"
      style={{ padding: "50px 20px", textAlign: "center", height: "auto" }}
    >
      <h1
        style={{
          color: "greenyellow",
          fontSize: "2.5rem",
        }}
      >
        Behind the Leaves
      </h1>
      <div
        className="about-body"
        style={{
          color: "antiquewhite",
        }}
      >
        <h1>The story of building an intelligent plant recognition system.</h1>
        <p>
          In a world where nature has been our oldest healer, the leaves around
          us carry centuries of wisdom, remedies, and cures. Our Medicinal Leaf
          Detection System aims to bring this ancient knowledge into the digital
          age, making plant identification faster, smarter, and more accessible
          than ever before. At the heart of our system lies the power of Deep
          Learning specifically, a Convolutional Neural Network (CNN) enabling
          the model to learn intricate patterns, textures, and shapes from
          thousands of images.
          <br /> Unlike traditional algorithms, deep learning allows the system
          to improve its accuracy over time, adapt to new data, and handle
          variations in lighting, angle, and background. To achieve this, we
          created a meticulously curated dataset of over 14 GB of high-quality
          leaf images collected from across the web. Each image was refined,
          cleaned, and carefully balanced to capture the unique characteristics
          of each of the 40 plant species. We then applied rigorous
          preprocessing techniques and dynamic data augmentation — including
          rotation, flipping, scaling, and contrast adjustments to make the
          model resilient in real-world conditions. <br />
          After 30 epochs of training, our model achieved an outstanding
          accuracy of 97.65% on the training set and 99.86% on the validation
          set (loss: 0.0708 - accuracy: 0.9765 - val_loss: 0.0099 -
          val_accuracy: 0.9986). In practical testing, the system predicted
          every leaf correctly, and in rare cases where the top prediction was
          incorrect, the correct species was always present within the top 5
          predictions ensuring reliable results for end users.
        </p>
      </div>
      <h1
        style={{
          color: "antiquewhite",
          fontSize:"2.4rem",
          color:"yellowgreen",
        }}
      >
        Contributors
      </h1>

      <div
        style={{
          margin: "30px",
        }}
      >
        <Row
          gutter={[16, 16]}
          style={{
            marginBottom: "16px",
          }}
        >
          <Col xs={24} sm={12} md={6}>
            <Card
              className="glass-card"
              // title="Web Development"
              hoverable="true"
              cover={<img alt="Tashakur" src="/images/tashakur.jpeg" />}
            >
              <p>Tashakur Shah</p>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card
              className="glass-card"
              // title="UI/UX Design"
              hoverable="true"
              cover={<img alt="Aabid" src="/images/aabid1.jpeg" />}
            >
              <p>Aabid Shah</p>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card
              className="glass-card"
              // title="SEO Optimization"
              bordered={false}
              hoverable="true"
            >
              <p></p>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Card
              className="glass-card"
              // title="Web Development"
              bordered={false}
              hoverable="true"
            >
              <p></p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
