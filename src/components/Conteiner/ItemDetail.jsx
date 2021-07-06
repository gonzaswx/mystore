import React from 'react'



const ItemDetail = ({item}) => {


    return (
        <div>
            <img src={item.img} alt="img celular" />
            <p> {item.title} </p>
            <p> {item.price} </p>

        </div>
    )
}

export default ItemDetail


