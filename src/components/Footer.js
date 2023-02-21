import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiFacebookFill, RiInstagramLine, RiMailLine } from "react-icons/ri";

export default function Footer() {
  return (
    <>
      <footer className="bg-black">
        <Container>
          <Row>
            <Col md className="pt-3 pb-3">
              <div className="text-white text-center footer__widget-head">
                <h3>Sosyal Medyada Biz</h3>
              </div>
              <div className="text-white text-center footer__widget-content">
                <ul className="m-0 p-0">
                  <li className="list-style-none d-inline-block mr-3">
                    <a
                      href="https://www.facebook.com/kateknolojidanismanlik"
                      target="_blank"
                      className="bg-facebook footer__widget-social overflow-hidden lh-4 text-center position-relative rounded text-white d-inline-block mx-3"
                      rel="noreferrer"
                    >
                      <RiFacebookFill />
                    </a>
                  </li>
                  <li className="list-style-none d-inline-block mr-3">
                    <a
                      className="bg-instagram footer__widget-social overflow-hidden lh-4 text-center position-relative rounded text-white d-inline-block mx-3"
                      target="_blank"
                      href="https://www.instagram.com/kateknolojidanismanlik/"
                      rel="noreferrer"
                    >
                      <RiInstagramLine />
                    </a>
                  </li>
                  <li className="list-style-none d-inline-block mr-3">
                    <a
                      className="bg-gmail footer__widget-social overflow-hidden lh-4 text-center position-relative rounded text-white d-inline-block mx-3"
                      target="_blank"
                      href="mailto:fatih@kateknoloji.com"
                      rel="noreferrer"
                    >
                      <RiMailLine />
                    </a>
                  </li>
                </ul>
                <p>Takip etmeyi unutmayın!</p>
              </div>
            </Col>
            <Col md className="pt-3 pb-3">
              <div className="text-white text-center footer__widget-head">
                <h3>KA Teknoloji</h3>
              </div>
              <div className="text-white text-center footer__widget-content">
                <ul className="list-group m-0 pt-0 pb-3">
                  <li className="list-group-item">
                    <img
                      src="../assets/img/ka-teknoloji-logo.png"
                      style={{ height: "85px", width: "250px" }}
                      alt="ka-teknoloji-logo"
                    />
                  </li>
                </ul>
                <p className="fs-5">İşiniz güvenilir ve profesyonel ellerde!</p>
              </div>
            </Col>
            <Col md className="pt-3 pb-3">
              <div className="text-white text-center footer__widget-head">
                <h3>Adresimiz</h3>
              </div>
              <div className="text-white text-center footer__widget-content">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12027.644764656236!2d29.086138!3d41.092787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caca36705056e7%3A0x521bc60facedc340!2zS2F2YWPEsWssIE9rdWwgQ2QuIE5vOjI5LCAzNDgxMCBCZXlrb3ovxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1sen!2sus!4v1675384571950!5m2!1sen!2sus"
                  width={300}
                  height={225}
                  style={{ border: "0" }}
                  allowFullScreen="true"
                  title="adresimiz"
                ></iframe>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center text-white border-top border-light pt-3 pb-3 m-0">
                Copyright @ 2023 - Her hakkı saklıdır.
                <a
                  href="http://kayacuneyt.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  Cüneyt Kaya
                </a>{" "}
                tarafından tasarlandı.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
