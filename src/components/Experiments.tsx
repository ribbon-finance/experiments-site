import React from "react";
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Card } from "reactstrap";
import "../static/css/Experiments.css";

const Experiments = () => {

  const data = [
    { id: "1", emojis: "🚀💸", name:"Up Only WBTC" },
    { id: "2", emojis: "⏰🏦", name:"WBTC Theta Vault" },
    { id: "3", emojis: "🎢🤑", name:"Vega Vault" }
  ];

  return (
    <Container className="experiments-container container min-vh-100">
      <Row className="row h-100 justify-content-center align-items-center">
        <Col className="experiments-column col-12">
          <div>
            <h3 className="title-section">
              <div className="emoji">🧪</div> Experimental
            </h3>
            <Card>
              <ListGroup className="experiments-list">
                {data.map(item => (
                  <ListGroupItem className="experiments-list-item">
                    <div className="emoji">{item.emojis}</div>- {item.name}
                    <Button className="list-button float-right" color="primary" href="/up-only" size="sm"> <strong>+</strong> </Button>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Card>

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experiments;
