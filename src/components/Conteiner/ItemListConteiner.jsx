import {React, useState, useEffect} from 'react'
import { CardComponent } from '../CardComponent';
import { getData } from '../../Utils/const';
import ItemDetailConteiner from './ItemDetailConteiner';

export const ItemListConteiner = () => {


const [productos, setProductos] = useState([]);

useEffect(() => {
    fetch  (
        `https://api.mercadolibre.com/sites/MLA/search?category=MLA1055`        
    )
    .then(response => response.json())
    .then(response => {
        let aux = response.results.map (element => {
            return {
              title: element.title,
              img: element.thumbnail,
              price: element.price
            }
          
          });
          setProductos(aux);
        }
    )}
, []) 
console.log(productos)

return (
    <>
        {productos.length == 0 ? 
        <p> No hay stock </p>        
        : productos.map((productos, index)=>{
            return (              
                <>

                <CardComponent title={productos.title} price={productos.price} img={productos.img} key={index}/>
                
                </>
                )


        }) 
    }
    </>

);
}



{/*<CardComponent item={productos[0]} title={productos.title} price={productos.price} img={productos.img} key={index}/>*/}