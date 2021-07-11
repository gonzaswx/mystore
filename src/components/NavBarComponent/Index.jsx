import { Nav, Navbar,Form,FormControl,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavbarComponent = () => {
    return(

          <NavbarComponent bg="ligth" expand="lg">
            <Navbar.Brand href="#home">SuperCell</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#link"> Produtos </Nav.Link>  
                  <Nav.Link href="#link"> Promo</Nav.Link>  
                  <Nav.Link href="#link">Contacto </Nav.Link>  
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
          </NavbarComponent>

    )
}


{/*
<Button variant="contained">Promo</Button>

<Button variant="contained" color="primary">
  Samsung
</Button>
<Button variant="contained" color= "primary">
  Motorola
</Button>
<Button variant="contained" color="primary">
  LG
</Button>
<Button variant="contained" color="primary">
<Link to={'/detail'}> Promo </Link>
</Button>
<Button variant="contained" color="primary">
<Link to={'/contacto'}> Ir a contacto </Link>
</Button>

        </div>*/}