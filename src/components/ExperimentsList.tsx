import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Card, ListGroup, ListGroupItem } from "reactstrap";
import "../static/css/Experiments.css";
 

const ExperimentsList = () => {

    const [data] = useState([
        { id: "1", emojis: "๐๐ธ", name:"Up Only WBTC" },
        { id: "2", emojis: "โฐ๐ฆ", name:"WBTC Theta Vault" },
        { id: "3", emojis: "๐ข๐ค", name:"Vega Vault" }
      ]);

    return (
        <Container className="experiments-container container h-100">
            <Row className="row h-100 justify-content-center align-items-center">
                <Col className="experiments-column col-12">
                <div>
                    <h3>
                    <div className="emoji">๐งช</div> Experimental
                    </h3>

                    {/* TO DO - map strategies data to li  */}
                    {data.map(item => (
                        <div className="emoji">{item.emojis}{item.name}</div>
                    ))}

                <Card>
                    <ListGroup className="experiments-list">
                        <ListGroupItem className="experiments-list-item">
                        <div className="emoji">๐๐ธ</div> Up Only WBTC
                        <Button className="float-right" color="primary" href="/up-only" size="sm"> <strong>+</strong> </Button>
                        </ListGroupItem>
                        <ListGroupItem className="experiments-list-item">
                        <div className="emoji">โฐ๐ฆ</div> WBTC Theta Vault
                        <Button className="float-right" color="primary" href="#" size="sm"> <strong>+</strong> </Button>
                        </ListGroupItem>
                        <ListGroupItem className="experiments-list-item">
                        <div className="emoji">๐ข๐ค</div> Vega Vault
                        <Button className="float-right" color="primary" href="#" size="sm"> <strong>+</strong> </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>

                </div>
                </Col>
            </Row>
        </Container>
    );
  };
  
  export default ExperimentsList;
  