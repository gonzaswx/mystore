import { Nav, Navbar,Form,FormControl,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavbarComponent = () => {
    return(
          <div>
      <Navbar.Brand href="#home">SuperCell</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Nav className="mr-auto">

      <Button variant="contained" color="primary">
      <Link to={'/'}> Home </Link>
      </Button>
      <Button variant="contained" color= "primary">
      
      </Button>
      <Button variant="contained" color="primary">
      <Link to={'/Camaras y accesorios'}> Camaras y accesorios </Link>
      </Button>
      <Button variant="contained" color="primary">
      <Link to={'/detail'}> Promo </Link>
      </Button>
      <Button variant="contained" color="primary">
      <Link to={'/contacto'}> Ir a contacto </Link>
      </Button>
      </Nav>
      <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                  <Button variant="outline-success">Search</Button>
      </Form>
 
      
          </div>
      
    )
}




