import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Misyon() {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <h1 className="display-5 fw-bold lh-1 mb-5 mt-3 text-center">
            Misyonumuz
          </h1>
          <Col md className="d-flex align-items-center">
            <div>
              <p className="lead">
                Elektrik ve data altyapı sistemleri konusunda; siz
                müşterilerimizin ihtiyaç ve beklentilerini en iyi şekilde
                anlayarak, size en doğru ve en uygun çözüm önerilerini sunan, en
                hızlı ve en etkin şekilde ulaştıran, müşteri memnuniyetini her
                şeyden üstün tutan bir firma olmak.
              </p>
            </div>
          </Col>
          <Col md>
            <img
              src="../assets/img/misyon.jpg"
              className="d-md-block mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <h1 className="display-5 fw-bold lh-1 mb-5 mt-3 text-center">
            Vizyonumuz
          </h1>
          <Col md>
            <img
              src="../assets/img/vizyon.jpg"
              className="d-md-block mx-lg-auto img-fluid d-none d-sm-none rounded"
              alt="Ka Teknoloji"
            />
          </Col>
          <Col md className="d-flex align-items-center">
            <div>
              <ul className="lead">
                <li>
                  Sektörde gelişen teknolojileri takip ederek uluslararası
                  standartlar da projeler üretmek
                </li>
                <li>
                  Projelere özgü, özel çözümler üreterek, yenilikçi ve yaratıcı
                  sonuçlara ulaşmak
                </li>
                <li>
                  Takım çalışmasını teşvik ederek farklı fikirlerin gelişmesine
                  imkan sağlamak
                </li>
                <li>Hizmet kalitesini sürekli artırarak büyümek</li>
                <li>
                  Uzman ekibimizle kaliteyi en uygun maliyetle elde etme
                  başarısını göstermek
                </li>
                <li>
                  Müşteri bağlılığına verdiğimiz önemle taahhüdümüzdeki işleri
                  zamanında tamamlamak
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
