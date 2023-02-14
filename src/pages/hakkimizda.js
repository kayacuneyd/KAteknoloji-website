import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KatekNavbar from "../components/KatekNavbar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import AboutHeader from "../components/AboutHeader";
import ReferenceList from "../components/ReferenceList";
import CTA from "../components/CTA";
import Misyon from "../components/Misyon";
import SEO from "../components/SEO";

const referenceList = [
  {
    title: "Nitel",
    foto: "../assets/img/nitel.png",
    id: 1,
  },
  {
    title: "Adli Tıp Kurumu",
    foto: "../assets/img/adli.jpg",
    id: 2,
  },
  {
    title: "AKOM",
    foto: "../assets/img/akom.jpg",
    id: 3,
  },
  {
    title: "ASAŞ",
    foto: "../assets/img/asaş.jpg",
    id: 4,
  },
  {
    title: "Beyaz Net",
    foto: "../assets/img/BEYAZnet.png",
    id: 5,
  },
  {
    title: "Burgan Bank",
    foto: "../assets/img/burgan.jpg",
    id: 6,
  },
  {
    title: "Bursa Büyükşehir Belediyesi",
    foto: "../assets/img/bursa.jpg",
    id: 7,
  },
  {
    title: "Denizbank",
    foto: "../assets/img/denizbank.png",
    id: 8,
  },
  {
    title: "ICBC Bank",
    foto: "../assets/img/icbc.png",
    id: 9,
  },
  {
    title: "MINA",
    foto: "../assets/img/mima.jpg",
    id: 10,
  },
  {
    title: "Tanap",
    foto: "../assets/img/tanap.jpg",
    id: 11,
  },
  {
    title: "Yapıkredi Bank",
    foto: "../assets/img/yapı.jpg",
    id: 12,
  },
  {
    title: "Ziraat Bank",
    foto: "../assets/img/ziraat.jpg",
    id: 9,
  },
];

const Hakkimizda = () => {
  return (
    <>
      <SEO
        title={
          "Hakkımızda sayfası | Elektrik taahhüt, Veri merkezi kurulumu ve proje yönetimi konularında bizimle iletişime geçebilirsiniz."
        }
        description={`Elektrik taahhüt işleri, 
          verimerkezi kurulumları, 
          yapısal kablolama sistemleri, 
          enerji altyapı sistemleri, 
          tesis işletim hizmetleri, 
          teknik servis ve bakım hizmetleri gibi alanlar KA Teknoloji'nin ana faaliyet alanlarıdır.`}
        name={"KA Teknoloji İletişim Sayfası"}
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
            <AboutHeader />
          </Col>
        </Row>

        <Row>
          <Col>
            <Misyon />
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col>
            <h1 className="text-center display-5 fw-bold lh-1 mb-4">
              Referanslarımızdan Bazıları
            </h1>
          </Col>
          <Col>
            <div className="reference-list-wrapper">
              {referenceList.map((reference, index) => {
                return (
                  <ReferenceList
                    key={index}
                    imgSrc={reference.foto}
                    title={reference.title}
                  />
                );
              })}
            </div>
          </Col>
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

export default Hakkimizda;
