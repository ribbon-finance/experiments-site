import React from "react";
import { Row, Col, Card, CardBody } from 'reactstrap';

const WalletTab = () => {
  return (
    <div>
      <Row>
        <Col sm="12">
          <Card className="mini-card">
            <CardBody>
              <Row className="content-section">
                <Col sm="12">
                  <div className="account">
                    <div className="main-text">
                      <strong>Your Account:</strong> 0x0000000000000000000
                    </div>
                  </div>
                  <div className="vault-shares">
                    <div className="main-text">
                      <strong>Your Vault Shares:</strong> 0
                    </div>
                  </div>
                  <div className="share-value">
                    <div className="main-text">
                      <strong>Shares Value:</strong> 0
                    </div>
                  </div>
                  <div className="asset-balance">
                    <div className="main-text">
                      <strong>Your WBTC Balance:</strong> 0
                    </div>
                  </div>
                  <div className="asset-balance">
                    <div className="main-text">
                      <strong>Your ETH Balance:</strong> 0
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>





    
  );
};

export default WalletTab;
