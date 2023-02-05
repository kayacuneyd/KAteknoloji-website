import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import logo from "./../../public/assets/img/logo.png";

function KatekNavbar() {
  return (
    <Navbar className="bg-aliceblue pt-3 pb-3" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="../assets/img/ka-teknoloji-logo.png"
            style={{ height: "75px", width: "250px" }}
            alt="ka-teknoloji"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <Nav.Link href="/hakkimizda">Hakkımızda</Nav.Link>
            <Nav.Link href="/hizmetler">Hizmetlerimiz</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="/iletisim">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default KatekNavbar;
