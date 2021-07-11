import React, { useEffect, useState } from "react";
import { CardComponent } from "../CardComponent";
import ItemDetail from "./ItemDetail";


const ItemDetailConteiner = () => {

    const [item, setItem] = useState()

    useEffect(() =>{
        fetch  (
            `https://api.mercadolibre.com/items/MLA928345349`        
        )
        .then(response => response.json())
        .then(response => {
            let aux =
                 {
                  title: response.title,
                  img: response.thumbnail,
                  price: response.price,
                  stock: response.available_quantity
                }
                setItem(aux);
              });
 },[])

console.log(item);


    return (
        <>
            {item == undefined ?  
            <p> No hay stock </p>
            : 
            <ItemDetail item={item} />
            }
        </>
    )
}

export default ItemDetailConteiner