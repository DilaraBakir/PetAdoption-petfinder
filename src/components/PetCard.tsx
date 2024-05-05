import { Card } from "react-bootstrap";
import { Pet } from "../models/Pet";
import '../components/css/petcard.css';
import { Link } from "react-router-dom";

interface PetCardProps{
    pet: Pet
}

//taking the data from the parent which is petlist and displaying it
export function PetCard(props:PetCardProps) {
    return(
        <Card>
            <Card.Img variant="top" src={`img/${props.pet.image}`}></Card.Img>
            <Card.Body>
                <Card.Title>{props.pet.name} ({props.pet.breed})</Card.Title>
                {props.pet.description}
            </Card.Body>
            <Card.Footer  className="btn-group">
                <Link to={`/adoptions/${props.pet.id}`} className="btn btn-primary ml-2">Adopt Me</Link>
                <Link to={`/details/${props.pet.id}`} className="btn btn-secondary ml-2">Details</Link>
            </Card.Footer>
        </Card>
    )
}