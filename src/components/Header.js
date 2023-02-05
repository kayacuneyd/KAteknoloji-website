import React from "react";
import { Col, Container, Row } from "react-bootstrap";
//import KatekBG from "../assets/img/katek-bg.jpg";

const imagePath = "../assets/img/katek-bg.jpg";

export const Header = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url('${imagePath}')`,
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <h1 class="display-4 fw-normal text-white">KA Teknoloji</h1>
                <p class="lead fw-normal text-white">
                  İşiniz güvenilir ve profesyonel ellerde!
                </p>
                <a class="btn btn-outline-primary text-white" href="/iletisim">
                  Bilgi ve teklif almak için iletişime geç!
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
