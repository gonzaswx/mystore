import './styles.css';
import { Counter } from './Counter';

 export const CardComponent = ({name, precio , stock}) => {
    
    return(
            <div className="card">
                <h1> {name} </h1>
                <strong> ${precio} </strong>
                <button> Agregar al carrito </button>
                <Counter stock={stock}/>
            </div>

    ) 
}