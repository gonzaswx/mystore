import './styles.css';
import { Counter } from './Counter';
import { Card } from 'react-bootstrap';

 export const CardComponent = ({title, price , img , stock}) => {

    const onAdd = () =>{
        console.log(`Compraste de articulos`)
}
    
    return(
            <div className="card">
                <img src={img}/>
                <h1> {title} </h1>
                <h2> {stock}  </h2>
                <strong> ${price} </strong>
                
                <Counter stock={stock}/>
            </div>

    ) 
}
