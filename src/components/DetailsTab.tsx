import React, { useState, useEffect } from "react";
import { Row, Col, Card, Progress } from "reactstrap";
import stakedPut from "./../contracts/stakedPut";

const DetailsTab = ({
  totalCost,
}: {
  totalCost: any;
}) => {

  const [price, setPrice] = useState('');

  const getWBTCPrice = async () => {
    const currentPrice = await (await stakedPut.methods.getCurrentPrice()).call();
    const finalPrice = (currentPrice / 1e18);
    const parsedPrice = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 4}).format(finalPrice);
    return setPrice(parsedPrice);
  };

  const getContractName = async () => {
    const getName = await (await stakedPut.methods.getName().call());
    const elem = document.getElementById('contractName')
    if (elem !== null) {
      elem.innerText = getName.toString()
    };
  }

  useEffect(() => {
    getContractName();
    getWBTCPrice();
  });

  // if (!price) {
  //   getWBTCPrice();
  // };

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
                    <span className="data-text">${ price }</span>
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
                    <strong>Estimated Put Price:</strong>{" "}
                    <span className="data-text">{totalCost} ETH</span>
                  </div>
                </div>
                <div className="mini-card-list version">
                  <div className="label-text">
                    <strong>Name:</strong>{" "}
                    <span className="data-text" id="contractName"></span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="container progress-section">
              <Col xs="12">
                <div className="progress-details text-right">
                  {/* <div className="label-text">
                    <strong>Price Per Share:</strong>{" "}
                    <span className="data-text">1.0033743</span>
                  </div>
                  <div className="label-text">
                    <strong>Available limit:</strong>{" "}
                    <span className="data-text">122.33 WBTC</span>
                  </div> */}
                  <Progress className="progress-custom" value="38" />
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