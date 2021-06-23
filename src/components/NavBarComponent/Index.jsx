import Button from 'react-bootstrap/Button';

export const NavbarComponent = ({cart}) => {
    return(
        <div className= "NavBar">
        <h1>Im the NavBar</h1><Button variant="contained">Default</Button>

<Button variant="contained" color="primary">
  Promocion
</Button>
<Button variant="contained" color= "primary">
  Camisetas
</Button>
<Button variant="contained" color="primary">
  Camperas
</Button>
<Button variant="contained" color="primary">
  Botines
</Button>
<Button variant="contained" color="primary">
  Carrito: {cart.length}
</Button>

        </div>
    )
}