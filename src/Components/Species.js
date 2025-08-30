import React, { useState } from "react";
import { Card, Row, Col, Button } from "antd";
import "./Species.css";

const Species = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="species-container" id="species">
      <h1
        style={{
          textAlign: "center",
          color: "greenyellow",
          fontSize: "2.5rem",
        
        }}
      >
        Our Classes
      </h1>

      <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
        <Col xs={24} sm={12} md={6}>
          <Card
            className="glass-card"
            title="Aloevera"
            hoverable
            cover={<img alt="Aloevera" src="/images/Aloevera.jpg" />}
          ></Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            className="glass-card"
            title="Amla"
            hoverable
            cover={<img alt="Amla" src="/images/Amla.jpg" />}
          ></Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            className="glass-card"
            title="Amruthaballi"
            hoverable
            cover={<img alt="Amruthaballi" src="/images/Amruthaballi.jpg" />}
          ></Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            className="glass-card"
            title="Arali"
            hoverable
            cover={<img alt="Arali" src="/images/Arali.jpg" />}
          ></Card>
        </Col>
      </Row>


      {showAll && (
        <>
          <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="ashoka"
                hoverable
                cover={<img alt="ashoka" src="/images/ashoka.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Bamboo"
                hoverable
                cover={<img alt="Bamboo" src="/images/Bamboo.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Beans"
                hoverable
                cover={<img alt="Beans" src="/images/Beans.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Betel"
                hoverable
                cover={<img alt="Betel" src="/images/Betel.jpg" />}
              ></Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Bhrami"
                hoverable
                cover={<img alt="Bhrami" src="/images/Bhrami.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Castor"
                hoverable
                cover={<img alt="Castor" src="/images/Castor.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Citron lime (herelikai)"
                hoverable
                cover={
                  <img
                    alt="Citron lime"
                    src="/images/Citron lime (herelikai).jpg"
                  />
                }
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Coriender"
                hoverable
                cover={<img alt="Coriender" src="/images/Coriender.jpg" />}
              ></Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Curry"
                hoverable
                cover={<img alt="Curry" src="/images/Curry.png" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Drumstick"
                hoverable
                cover={<img alt="Drumstick" src="/images/Drumstick.png" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Fenugreek"
                hoverable
                cover={<img alt="Fenugreek" src="/images/Fenugreek.png" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Gasagase"
                hoverable
                cover={<img alt="Gasagase" src="/images/Gasagase.jpg" />}
              ></Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Guava"
                hoverable
                cover={<img alt="Guava" src="/images/Guava.png" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Hibiscus"
                hoverable
                cover={<img alt="Hibiscus" src="/images/Hibiscus.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Insulin"
                hoverable
                cover={<img alt="Insulin" src="/images/Insulin.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Jackfruit"
                hoverable
                cover={<img alt="Jackfruit" src="/images/Jackfruit.jpg" />}
              ></Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Jasmine"
                hoverable
                cover={<img alt="Jasmine" src="/images/Jasmine.png" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Lantana"
                hoverable
                cover={<img alt="Lantana" src="/images/Lantana.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Lemon"
                hoverable
                cover={<img alt="Lemon" src="/images/Lemon.png" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Malabar_Nut"
                hoverable
                cover={<img alt="Malabar Nut" src="/images/Malabar_Nut.jpg" />}
              ></Card>
            </Col>
          </Row>{" "}
          <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Malabar_Spinach"
                hoverable
                cover={
                  <img
                    alt="Malabar_Spinach"
                    src="/images/Malabar_Spinach.jpg"
                  />
                }
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Mango"
                hoverable
                cover={<img alt="Mango" src="/images/Mango.png" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Mint"
                hoverable
                cover={<img alt="Mint" src="/images/Mint.png" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Neem"
                hoverable
                cover={<img alt="Neem" src="/images/Neem.jpg" />}
              ></Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Onion"
                hoverable
                cover={<img alt="Onion" src="/images/Onion.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Palak (Spinach)"
                hoverable
                cover={
                  <img alt="Palak(Spinach)" src="/images/Palak(Spinach).jpg" />
                }
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Papaya"
                hoverable
                cover={<img alt="Papaya" src="/images/Papaya.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Parijatha"
                hoverable
                cover={<img alt="Parijatha" src="/images/Parijatha.png" />}
              ></Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Pomoegranate"
                hoverable
                cover={
                  <img alt="Pomoegranate" src="/images/Pomoegranate.jpg" />
                }
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Pumpkin"
                hoverable
                cover={<img alt="Pumpkin" src="/images/Pumpkin.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Rasna"
                hoverable
                cover={<img alt="Rasna" src="/images/Rasna.png" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Rose"
                hoverable
                cover={<img alt="Rose" src="/images/Rose.jpg" />}
              ></Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginBottom: "16px" }}>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Spinach1"
                hoverable
                cover={<img alt="Spinach1" src="/images/Spinach1.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Tamarind"
                hoverable
                cover={<img alt="Tamarind" src="/images/Tamarind.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Tulsi"
                hoverable
                cover={<img alt="Tulsi" src="/images/Tulsi.jpg" />}
              ></Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                className="glass-card"
                title="Turmeric"
                hoverable
                cover={<img alt="Turmeric" src="/images/Turmeric.jpg" />}
              ></Card>
            </Col>
          </Row>
          <div style={{ textAlign: "center", marginTop: 16 }}>
          <Button
            type="primary"
            onClick={() => setShowAll(false)}
            className="show-less-btn"
          >
            Show less
          </Button>
        </div>
        </>
      )}

      {!showAll && (
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Button
            type="primary"
            onClick={() => setShowAll(true)}
            className="show-more-btn"
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Species;
