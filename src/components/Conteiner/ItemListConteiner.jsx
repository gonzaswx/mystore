import {React, useState, useEffect} from 'react'
import { CardComponent } from '../CardComponent';


export const ItemListConteiner = () => {


const [productos, setProductos] = useState([]);

useEffect(() => {
    fetch  ("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055")
    .then(res => res.json())
    .then(res => setProductos(res.results))
},[])

return (
    <>
        {
            productos.map((productos, index)=>{return (              
                <>            
                <CardComponent id={productos.id} title={productos.title} price={productos.price} img={productos.img} stock={productos.available_quantity} key={index}/>
                </>
            )
        }) 
    }
    </>
);
}



{/*<CardComponent item={productos[0]} title={productos.title} price={productos.price} img={productos.img} key={index}/>*/}