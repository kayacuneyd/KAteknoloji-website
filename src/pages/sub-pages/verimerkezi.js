import React from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function VeriMerkezi() {
  return (
    <Row>
      <Header />
      <Col>
        <h1>Bu Veri merkezi inşasıyla alakalı bir alt sayfa örneğidir</h1>
      </Col>
      <Footer />
    </Row>
  );
}
