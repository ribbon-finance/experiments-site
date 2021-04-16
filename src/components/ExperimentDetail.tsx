import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Container, Row, Col, Alert, Card, Progress, CardBody, CardTitle, CardSubtitle, CardText, FormGroup, Label, Input, CustomInput, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import "../static/css/Experiments.css";
 

const ExperimentDetail = () => {

    const [data] = useState([
        { id: "1", emojis: "🚀💸", name:"Up Only WBTC" , contract: "OxSalo12345", assetPrice: "1.00", currency: "$", totalAssets: "1000", totalAUM: "10000", baseAsset: "WBTC"},
      ]);

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <Container className="experiments-container container h-100">
            <Row className="row h-100 justify-content-center align-items-center">
                <Col className="experiments-column col-12">
                <div>
                    <Card className="card card-detail">
                    <div>
                        {data.map(item => (
                            <div className="title-section"><div className="emoji">{item.emojis}</div>{item.name}
                            <CustomInput className="switch-label float-right" type="switch" id="exampleCustomSwitch" name="customSwitch" label="Approve Vault" />
                            </div>
                        ))}                        
                    </div>
                    
                    <Alert color="warning">
                        ⚠️ <strong>WARNING</strong> this an experiment of an experiment, of a series of experiments, made by apes and for them.<br></br>Proceed with extreme caution.
                    </Alert>

                    <Card className="mini-card">
                        <CardBody>
                            <CardTitle tag="h5">Details</CardTitle>
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
                    
                    <div className="button-section">
                        <FormGroup>
                            <Label for="exampleNumber">Amount</Label>
                            <Input
                            type="number"
                            name="number"
                            id="exampleNumber"
                            placeholder="0"
                            />
                            <p>WBTC</p>
                        
                        </FormGroup>    
                    </div>
                    <Row className="container">
                    <div className="button-section"> 

                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret color="primary">
                            Deposit
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Deposit</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Deposit All</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret color="secondary">
                            Withdraw
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Depoist</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Deposit All</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>    
                    </div>
                    </Row>
                       
                    </Card>
                </div>
                </Col>
            </Row>
        </Container>
    );
};
  
export default ExperimentDetail;
  