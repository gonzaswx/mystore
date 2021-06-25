import './styles.css';
import { Counter } from './Counter';

 export const CardComponent = ({name, precio , stock}) => {

    const onAdd = () =>{
        console.log(`Compraste de articulos`)
}
    
    return(
            <div className="card">
                <h1> {name} </h1>
                <strong> ${precio} </strong>
                <button> Agregar al carrito </button>
                <Counter stock={stock}  onAdd ={onAdd}/>
            </div>

    ) 
}