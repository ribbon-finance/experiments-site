import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../static/css/Experiments.css";

const Experiments = () => {
  return ( 
    <Container className="experiments-container">
      <Row>
        <Col className="experiments-column">
          <div>
            <h3>
              <div className="emoji">🧪</div> Experimental
            </h3>
            <ul className="experiments-list">
              <li className="experiments-list-item">
                <div className="emoji">🚀💸</div> Up Only WBTC
              </li>
              <li className="experiments-list-item">
                <div className="emoji">⏰🏦</div> WBTC Theta Vault
              </li>
              <li className="experiments-list-item">
                <div className="emoji">🎢🤑</div> Vega Vault
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Experiments;
