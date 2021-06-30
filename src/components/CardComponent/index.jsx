import './styles.css';
import { Counter } from './Counter';

 export const CardComponent = ({title, price , stock , img}) => {

    const onAdd = () =>{
        console.log(`Compraste de articulos`)
}
    
    return(
            <div className="card">
                <img src={img}/>
                <h1> {title} </h1>
                <strong> ${price} </strong>
                <button> Agregar al carrito </button>
                <Counter stock={stock}  onAdd ={onAdd}/>
            </div>

    ) 
}