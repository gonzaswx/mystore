import React,{useState} from 'react'
import { Button } from 'react-bootstrap'

export const Counter = ({stock}) => {
    const [counter,setCounter] = useState(1)

    const sumar=()=>{
        if(counter<stock){
            setCounter(counter+1)
        }
    }  
    const restar = () =>{
        if(counter > 1){
            setCounter(counter-1)
        
    } else {
        setCounter(counter)
    }}
    const onAdd = () =>{
            console.log(`Compraste ${counter} de articulos`)
    }
    return (
        <div>
            <button onClick= {sumar}>+</button>
            <p>{counter}</p>
            <button onClick= {restar} >-</button>
            <button onClick={onAdd} variant="primary"> Comprar </button>
        </div>
    )
}