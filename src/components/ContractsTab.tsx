import React from "react";
import { Row, Col, Card, CardBody, CardText } from 'reactstrap';

const ContractsTab = () => {
  return (
<div>
      <Row>
        <Col sm="12">
          <Card className="mini-card">
            <CardBody>
              <CardText>
                <Row className="content-section">
                  <Col sm="12">
                    <div className="strategy-step">
                      <div className="main-text">
                        <strong>Strat. 0: </strong> StrategyLenderYieldOptimiser
                      </div>
                      <div className="sub-text">Address: Contract</div>
                    </div>
                    <div className="strategy-step">
                      <div className="main-text">
                        <strong>Strat. 1: </strong> StrategyMasterchefGenericMod
                      </div>
                      <div className="sub-text">Address: Contract</div>
                    </div>
                    <div className="strategy-step">
                      <div className="main-text">
                        <strong>Strat. 2: </strong> yvWBTCStratMMV1
                      </div>
                      <div className="sub-text">Address: Contract</div>
                    </div>
                  </Col>
                </Row>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContractsTab;
