import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Container, Row, Col, Alert, Card, Button, Progress, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import "../static/css/Experiments.css";
 

const ExperimentDetail = () => {

    const [data] = useState([
        { id: "1", emojis: "🚀💸", name:"Up Only WBTC" , contract: "OxSalo12345", assetPrice: "1.00", currency: "$", totalAssets: "1000", totalAUM: "10000", baseAsset: "WBTC"},
      ]);

    return (
        <Container className="experiments-container container h-100">
            <Row className="row h-100 justify-content-center align-items-center">
                <Col className="experiments-column col-12">
                <div>
                    <Card className="card card-detail">
                    <h3>
                    {data.map(item => (
                        <div><div className="emoji">{item.emojis}</div>{item.name}</div>
                    ))}
                    </h3>
                    <Alert color="warning">
                        ⚠️ <strong>WARNING</strong> this an experiment of an experiment, of a series of experiments, made by apes and for them.<br></br>Proceed with extreme caution.
                    </Alert>

                    <Card className="mini-card">
                        <CardBody>
                            <CardTitle tag="h5">Strategy Details</CardTitle>
                            <CardSubtitle tag="h6">Some fine details of above</CardSubtitle>
                            <CardText>
                                <div> 
                                    <ul>
                                        <li>Vault: 📃Contract</li>
                                        <li>ICE price (CoinGecko 🦎): $7.6400</li>
                                        <li>Deposit Limit: 12,000.0 ICE</li>
                                        <li>Total Assets: 6,127.43 ICE</li>
                                        <li>Total AUM: $46,813.57</li>
                                    </ul>
                                </div>
                            </CardText>
                        </CardBody>
                        <div>
                            <Progress color="danger" value="75" />
                        </div>
                    </Card>
                    
                    <div className="button-section float-right">    
                        <Button className="button-detail" color="primary">Approve Vault</Button>{' '}
                        <Button className="button-detail" color="secondary">Deposit</Button>{' '}
                        <Button className="button-detail" color="secondary">Deposit All</Button>{' '}
                        <Button className="button-detail" color="secondary">Withdraw All</Button>{' '}
                    </div>
                       
                    </Card>
                </div>
                </Col>
            </Row>
        </Container>
    );
};
  
export default ExperimentDetail;
  