import React from "react";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import KatekNavbar from "../components/KatekNavbar";
import SEO from "../components/SEO";

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
      <SEO
        title={
          "Anasayfa | Elektrik taahhüt, Veri merkezi kurulumu ve proje yönetimi"
        }
        description={`Elektrik taahhüt işleri, 
          verimerkezi kurulumları, 
          yapısal kablolama sistemleri, 
          enerji altyapı sistemleri, 
          tesis işletim hizmetleri, 
          teknik servis ve bakım hizmetleri gibi alanlar KA Teknoloji'nin ana faaliyet alanlarıdır.`}
        name={"KA Teknoloji"}
        type={"article"}
      />
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
