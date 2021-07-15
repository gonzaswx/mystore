import './styles.css';
import { Counter } from './Counter';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

 export const CardComponent = ({title, price , img , stock, id}) => {

    const onAdd = () =>{
        console.log(`Compraste de articulos`)
}
    
    return(
            <Card style={{width: "18rem"}}>
                <Card.Body>
                    <Link to={"/productos/"+id}><Card.Title>{title}</Card.Title></Link>
                    <Card.Text>
                    <strong> ${price} Stock:{stock}</strong>
                    </Card.Text>
                <img src={img}/>               
                <Counter stock={stock} onAdd={onAdd}/>
                </Card.Body>
            </Card>

    ) 
}
