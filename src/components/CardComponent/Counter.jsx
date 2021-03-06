import React,{useState} from 'react'

export const Counter = ({stock, onAdd}) => {
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
    }
    }
    
    return (
        <div>

            {stock<0 ?
            <>
            <button onClick= {sumar}>+</button>
            <p>{counter}</p>
            <button onClick= {restar} >-</button>
            <button onClick={onAdd} variant="primary"> Comprar </button>
            </>    
            :
            <p>No mas stock</p>
             }
        </div>
    )
}