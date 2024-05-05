import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pet } from "../models/Pet";
import { getPetById } from "../services/petService";
import { Card, Col, Row } from "react-bootstrap";
import '../components/css/petcard.css'; 

export function PetDetails() {
    const { id } = useParams();
    const [pet, setPet] = useState<Pet | null>();

    useEffect(() => {
        if (id !== undefined) {
            getPetById(Number(id)).then((pet) => {
                setPet(pet);
            });
        }
    }, [id]);

    return (
        <div className="PetDetails">
            {pet && (
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        {/* Apply additional styles for the details page */}
                        <Card className="details-card">
                            <Card.Body>
                                <Row>
                                    <Col lg={4}>
                                        <img src={`/img/${pet.image}`} alt={pet.name}  style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}/>
                                    </Col>
                                    <Col lg={8}>
                                        <Card.Title>{pet.name}</Card.Title>
                                        <Card.Text>
                                            {pet.breed} - {pet.isBoy ? "Boy" : "Girl"}
                                        </Card.Text>
                                        <Card.Text>{pet.description}</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            )}
        </div>
    );
}
