import React from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Footer from "../components/Footer";
import KatekNavbar from "../components/KatekNavbar";
import SEO from "../components/SEO";

const Tesekkurler = () => {
  return (
    <>
      <SEO
        title={
          "Teşekkür Sayfası | Elektrik taahhüt, Veri merkezi kurulumu ve proje yönetimi konularında bizimle iletişime geçebilirsiniz."
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12027.644764656236!2d29.086138!3d41.092787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca36705056e7%3A0x521bc60facedc340!2zS2F2YWPEsWssIE9rdWwgQ2QuIE5vOjI5LCAzNDgxMCBCZXlrb3ovxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1sen!2sus!4v1675628778113!5m2!1sen!2sus"
              style={{ border: "0", width: "100%", height: "450px" }}
              allowfullscreen={true}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="ofisimiz"
            ></iframe>
          </Col>
        </Row>

        <Row className="align-items-center g-lg-5 py-5 px-5">
          <Col>
            <h1 className="display-4 fw-bold lh-1 mb-3">İletişim Formu</h1>
            <p className="col-lg-10 fs-4">
              Bizimle iletişime geçtiğiniz için teşekkür ederiz. En kısa zamanda
              yanıtlayacağız.
            </p>
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

export default Tesekkurler;
