import React from 'react';
import { CardComponent } from '../CardComponent';
import {useEffect, useState} from "react"
import ItemDetailComponent from "./ItemDetailComponent";

const ItemDetailContainer = (props) => {

    const [item, setItem] = useState ()

    useEffect (() => {

        fetch("json/productos.json")
            .then((response) => response.json())
            .then((datos) => {
                setTimeout(() => {
                    setItem(datos[0]);
                }, 2000); 
                });
    },[item])

    return (
        <>
        <ItemDetailComponent item={item}/>
        </> 
    )
}

export default ItemDetailContainer 

{/* */}