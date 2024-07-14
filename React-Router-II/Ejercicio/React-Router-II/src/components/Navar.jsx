import { NavLink } from "react-router-dom";
import {Container, Nav, Navbar} from 'react-bootstrap';

const Navar = () => {
    // Se crea una funcion ternaria para que enc aso de que esta activo cambie de color sino queda estandar que viene del C
    const ActivadoMenu = ({isActive}) => isActive ? 'menu activo' : 'menu';

  return (
    <Navbar expand="lg" className="bg-dark " data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Ejercicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={ActivadoMenu} to="/">Home</NavLink>
            <NavLink className={ActivadoMenu} to="/contactanos">Contactanos</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navar
