import { useEffect, useState } from "react";
import { Pet } from "../models/Pet";
import { getPets } from "../services/petService";
import { Col, Row } from "react-bootstrap";
import { PetCard } from "./PetCard";
import '../components/css/petlist.css'; 

export function PetList() {
    const [pets, setPets] = useState<Pet[]>([]);

    useEffect(() => {
        getPets().then((pets) => setPets(pets));
    }, []);

    return(
        <div className="PetList">
            <Row>
                {pets.map((pet) => (<Col xs={12} sm={6} md={4} lg={3}><PetCard pet={pet}/></Col>))}
            </Row>
        </div>
    )
}