import './styles.css';
import { Counter } from './Counter';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

 export const CardComponent = ({title, price , img , stock}) => {

    const onAdd = () =>{
        console.log(`Compraste de articulos`)
}
    
    return(
            <Card style={{width: "18rem"}}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    <strong> ${price} Stock:{stock}</strong>
                    </Card.Text>
                <img src={img}/>               
                <Counter stock={stock} onAdd={onAdd}/>
                <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>

    ) 
}
