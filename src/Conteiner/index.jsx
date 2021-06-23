import { useState } from "react";
import { CardComponent } from "../components/CardComponent";
import { NavbarComponent } from "../components/NavBarComponent/Index";

export const HomeConteiner = () => {
    const [ cart, setCart] = useState ([]);
    console.log(cart);
    return (
        <>
            <NavbarComponent cart={cart} />
             <section>
                <button onClick ={() => { setCart([ ...cart, { id: 1, name: 'Store'}]) }}>
                    Agregar al carrito
                 </button>
                 <CardComponent  title ={'trabajo'} price ={8000}/>
                 <CardComponent  title ={'Camiseta'} price ={3000}/>
                 <CardComponent  title ={'Botin'} price ={4000}/>
                 <CardComponent  title ={'Pelota'} price ={5000}/>
            </section>
        </>
    )
}