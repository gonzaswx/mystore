import { useState } from "react";
import { CardComponent } from "../components/CardComponent";
import { NavbarComponent } from "../components/NavBarComponent/Index";

export const HomeConteiner = () => {
        const product = {
            title: "Botines",
            price: 6500,
            stock: 5
        }
    
    return (
        <>
        <div>
            <CardComponent title={product.title} price={product.price} stock={product.stock} img={product.img}/>
                <button variant="primary">
                   Comprar
                 </button>
        </div>
        </>
    )}


    /*  [{id: 1, title :"Camiseta Boca" , price: "$7800"},
        {id: 2, title  :"Camiseta River" , price: "$6700"},
        {id: 3, title  :"Campera Boca" , price: "$12800"},
        {id: 4, title  :"Campera Barcelona" , price: "$15800"}
              <CardComponent  title ={'trabajo'} price ={8000}/>
                 <CardComponent  title ={'Camiseta'} price ={3000}/>
                 <CardComponent  title ={'Botin'} price ={4000}/>
                 <CardComponent  title ={'Pelota'} price ={5000}/>  
                []     
        */