import React from "react";
import Footer from "../components/Footer";
import Col from "react-bootstrap/Col";
import { Header } from "../components/Header";
import KatekNavbar from "../components/KatekNavbar";
import { Container, Row } from "react-bootstrap";
import Features from "../components/Features";
import CTA from "../components/CTA";

const features = [
  {
    title: "Elektrik/Taahhüt İşleri",
    foto: "../assets/img/icon1.png",
    id: 1,
  },
  {
    title: "Altyapı Sistemleri",
    foto: "../assets/img/icon2.png",
    id: 2,
  },
  {
    title: "Verimerkezi Kurulumu",
    foto: "../assets/img/icon3.png",
    id: 3,
  },
  {
    title: "Teknik Servis/Bakım",
    foto: "../assets/img/icon4.png",
    id: 4,
  },
  {
    title: "Yapısal Kablolama",
    foto: "../assets/img/wire.png",
    id: 5,
  },
  {
    title: "Tesis İşletim Hizmetleri",
    foto: "../assets/img/process.png",
    id: 6,
  },
];

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <KatekNavbar />
          </Col>
        </Row>

        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          {features.map((feature, index) => {
            return (
              <Features
                key={index}
                imgSrc={feature.foto}
                title={feature.title}
              />
            );
          })}
        </Row>

        <Row>
          <Col>
            <CTA />
          </Col>
        </Row>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
