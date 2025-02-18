import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/Header.css'

function Header() {
  return (
    <>
      <Navbar style={{backgroundColor:"rgb(49, 145, 49)"}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Lista Videojuegos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link target='__blank' href="https://educacionadistancia.juntadeandalucia.es/centros/jaen/course/view.php?id=1209&section=3#tabs-tree-start">Moodle</Nav.Link>
            <Nav.Link target='__blank' href="https://github.com/marcosarjonaa">Repositorio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;