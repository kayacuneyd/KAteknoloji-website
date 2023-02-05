import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutHeader() {
  return (
    <>
      <Container>
        <Row>
          <Col md>
            <img
              src="../assets/img/hakkimizda.jpg"
              className="d-block mx-lg-auto img-fluid rounded-bottom"
              alt="Ka Teknoloji"
            />
          </Col>
          <Col md className="d-flex align-items-center mt-3">
            <div>
              <h1 className="display-6 fw-bold lh-1 mb-3">
                KA Teknoloji bir elektrik taahhüt, verimerkezi kurulumu ve proje
                yönetimi firmasıdır.
              </h1>
              <p className="lead">
                Elektrik taahhüt işleri, verimerkezi kurulumları, yapısal
                kablolama sistemleri, enerji altyapı sistemleri, tesis işletim
                hizmetleri, teknik servis ve bakım hizmetleri gibi alanlar ana
                faaliyet alanlarıdır.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
