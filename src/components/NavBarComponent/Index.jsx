import { Nav, Navbar,Form,FormControl,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavbarComponent = () => {
    return(
          <div>
      <Navbar.Brand href="#home">SuperCell</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Nav className="mr-auto">

      <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
      <Nav.Link><NavLink to="/productos">Productos</NavLink></Nav.Link>
      <Nav.Link><NavLink to="/contacto">Contacto</NavLink></Nav.Link>

      </Nav>
      <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                  <Button variant="outline-success">Search</Button>
      </Form>
 
      
          </div>
      
    )
}




