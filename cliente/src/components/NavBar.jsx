import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">FASICLIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/ ">Plano de Contas</Nav.Link>

            <NavDropdown title="Movimento Contabil" id="basic-nav-dropdown">
              <NavDropdown.Item href="/movimento">Movimentação Contabil</NavDropdown.Item>
              <NavDropdown.Item href="/tabela-movimento">
                Consultar Movimentação
              </NavDropdown.Item> 
            </NavDropdown>

            <NavDropdown title="Escritura Fiscal" id="basic-nav-dropdown">
              <NavDropdown.Item href="/escritura">Cadastrar Escritura Fiscal</NavDropdown.Item>
              <NavDropdown.Item href="/tabela-escritura">
                Consultar Escritura Fiscal
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;