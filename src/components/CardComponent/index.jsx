import './styles.css';

 export const CardComponent = ({title , price}) => {
    function saludar() {
        alert("Agregado!");
    }
    return(
            <div className="card">
                <h1> {title} </h1>
                <strong> {price} </strong>
                <button onClick={() => { saludar() }}> Agregar al carrito </button>
            
            </div>

    )
}
