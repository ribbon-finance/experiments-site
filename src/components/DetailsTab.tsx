import React from "react";
import { Row, Col, Card, Progress } from "reactstrap";

const DetailsTab = () => {
  return (
    <div>
      <Row>
        <Col sm="12">
          <Card className="mini-card">
            <Row className="content-section container-fluid">
              <Col xs="6">
                <div className="mini-card-list token">
                  <div className="label-text">
                    <strong>WBTC price:</strong>{" "}
                    <span className="data-text">$55,960.00</span>
                  </div>
                </div>
                <div className="mini-card-list deposit-limit">
                  <div className="label-text">
                    <strong>Deposit Limit:</strong>{" "}
                    <span className="data-text">200.00 WBTC</span>
                  </div>
                </div>
                <div className="mini-card-list total-assets">
                  <div className="label-text">
                    <strong>Total Assets:</strong>{" "}
                    <span className="data-text">77.66 WBTC</span>
                  </div>
                </div>
              </Col>
              <Col xs="6">
                <div className="mini-card-list vault">
                  <div className="label-text">
                    {" "}
                    <strong>Vault:</strong>
                    <a href="https://etherscan.io/" className="data-text">
                      {" "}
                      Contract
                    </a>
                  </div>
                </div>
                <div className="mini-card-list version">
                  <div className="label-text">
                    <strong>Version:</strong>{" "}
                    <span className="data-text">0.3.5</span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="container progress-section">
              <Col xs="12">
                <div className="progress-details text-right">
                  <div className="label-text">
                    <strong>Price Per Share:</strong>{" "}
                    <span className="data-text">1.0033743</span>
                  </div>
                  <div className="label-text">
                    <strong>Available limit:</strong>{" "}
                    <span className="data-text">122.33 WBTC</span>
                  </div>
                  <Progress className="progress-custom" value="75" />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DetailsTab