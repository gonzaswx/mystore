import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

const ItemDetailConteiner = () => {

    const {product_id} = useParams()
    const [item, setItem] = useState([])
    useEffect(()=>{
        fetch(`https://api.mercadolibre.com/items/${product_id}`)
        .then(res => res.json())
        .then(res=>{
            setItem(res)
        })
    },[product_id])

    return (
        <>
            {
            item === undefined ?  
            <p> No hay stock </p>
            : 
            <ItemDetail item={item} />
            }
        </>
    )
}

export default ItemDetailConteiner