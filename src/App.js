import "./App.css";
import Home from "./pages/home";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Hakkimizda from "./pages/hakkimizda";
import İletisim from "./pages/iletisim";

import { Route, Routes } from "react-router-dom";
import Hizmetler from "./pages/hizmetler";
import Tesekkurler from "./pages/thanks";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="hizmetler" element={<Hizmetler />}></Route>
            <Route path="hakkimizda" element={<Hakkimizda />}></Route>
            <Route path="iletisim" element={<İletisim />}></Route>
            <Route path="thanks" element={<Tesekkurler />}></Route>
          </Routes>
        </Row>
      </Container>
    </>
  );
}

export default App;
