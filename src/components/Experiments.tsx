import React from "react";
import { Container, Row, Col, Button, ListGroup, ListGroupItem, Card } from "reactstrap";
import "../static/css/Experiments.css";

const Experiments = () => {
  return (
    <Container className="experiments-container container min-vh-100">
      <Row className="row h-100 justify-content-center align-items-center">
        <Col className="experiments-column col-12">
          <div>
            <h3>
              <div className="emoji">🧪</div> Experimental
            </h3>
            <Card>
              <ListGroup className="experiments-list">
                <ListGroupItem className="experiments-list-item">
                  <div className="emoji">🚀💸</div> Up Only WBTC
                  <Button className="float-right" color="primary" href="/up-only" size="sm"> <strong>+</strong> </Button>
                </ListGroupItem>
                <ListGroupItem className="experiments-list-item">
                  <div className="emoji">⏰🏦</div> WBTC Theta Vault
                  <Button className="float-right" color="primary" href="#" size="sm"> <strong>+</strong> </Button>
                </ListGroupItem>
                <ListGroupItem className="experiments-list-item">
                  <div className="emoji">🎢🤑</div> Vega Vault
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

export default Experiments;
