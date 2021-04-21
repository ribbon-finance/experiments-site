import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Container, Row, Col, Alert, Card, Progress, CardBody, CardText, FormGroup, Label, Input, CustomInput, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import "../static/css/Experiments.css";
import classnames from 'classnames';
 

const ExperimentDetail = () => {

    const data = [
        { id: "1", emojis: "🚀💸", name:"Up Only WBTC" , contract: "OxSalo12345", assetPrice: "1.00", currency: "$", totalAssets: "1000", totalAUM: "10000", baseAsset: "WBTC"},
      ];

    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab: any) => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const navItems = ['Details', 'Wallet', 'Contracts']

    return (
        <Container className="experiments-container container h-100">
            <Row className="row h-100 justify-content-center align-items-center">
                <Col className="experiments-column col-12">
                <div>
                    <Card className="card card-detail">
                    <div>
                        {data.map(item => (
                            <div className="title-section"><div className="emoji">{item.emojis}</div>{item.name}
                            <CustomInput className="switch-label float-right" type="switch" id="approveSwitch" name="approveSwitch" label="Approve Vault" />
                            
                            </div>
                        ))}                        
                    </div>
                    <Alert color="warning">
                        ⚠️ <strong>WARNING</strong> this an experiment of an experiment, of a series of experiments, made by apes and for them.<br></br>Proceed with extreme caution.
                    </Alert>
                    <Nav pills justified>
                        {navItems.map((navItem: string, navItemKey: number) => {
                            const tab = (navItemKey + 1).toString();

                            return (
                            <NavItem>
                                <NavLink
                                className={classnames({ active: activeTab === tab })}
                                onClick={() => {
                                    toggle(tab);
                                }}
                                >
                                {navItem}
                                </NavLink>
                            </NavItem>
                            );
                        })}
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Card className="mini-card">
                                    <Row className="content-section container-fluid"> 
                                        <Col xs="6">
                                            <div className="token">
                                                <div className="main-text"><strong>WBTC price:</strong> $55,960.00</div>
                                            </div>
                                            <div className="deposit-limit">
                                                <div className="main-text"><strong>Deposit Limit:</strong> 200.00 WBTC</div>
                                            </div>
                                            <div className="total-assets">
                                                <div className="main-text"><strong>Total Assets:</strong> 77.66 WBTC</div>
                                            </div>
                                        </Col>
                                        <Col xs="6">
                                            <div className="vault">
                                                <div className="main-text"> <strong>Vault:</strong>
                                                <a href="https://etherscan.io/" className="sub-text"> Contract</a></div>
                                            </div>
                                            <div className="version">
                                                <div className="main-text"><strong>Version:</strong> 0.3.5</div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="container progress-section">
                                        <Col xs="12">
                                            <div className="progress-details">
                                                <div className="price-per-share">
                                                    <strong>Price Per Share:</strong> 1.0033743
                                                </div>
                                                <div className="available-limit">
                                                    <strong>Available limit:</strong> 122.33 WBTC
                                                </div>
                                                <Progress color="danger" value="75" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        </TabPane>
                        <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Card className="mini-card">
                                    <CardBody>
                                        <CardText>
                                            <Row className="content-section"> 
                                                <Col sm="12">
                                                    <div className="strategy-step">
                                                        <div className="main-text"><strong>Strat. 0: </strong> StrategyLenderYieldOptimiser</div>
                                                        <div className="sub-text">Address: Contract</div>
                                                    </div>
                                                    <div className="strategy-step">
                                                        <div className="main-text"><strong>Strat. 1: </strong> StrategyMasterchefGenericMod</div>
                                                        <div className="sub-text">Address: Contract</div>
                                                    </div>
                                                    <div className="strategy-step">
                                                        <div className="main-text"><strong>Strat. 2: </strong> yvWBTCStratMMV1</div>
                                                        <div className="sub-text">Address: Contract</div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        </TabPane>
                        <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <Card className="mini-card">
                                    <CardBody>
                                        <Row className="content-section"> 
                                            <Col sm="12">
                                                <div className="account">
                                                    <div className="main-text"><strong>Your Account:</strong> 0x0000000000000000000</div>
                                                </div>
                                                <div className="vault-shares">
                                                    <div className="main-text"><strong>Your Vault Shares:</strong> 0</div>
                                                </div>
                                                <div className="share-value">
                                                    <div className="main-text"><strong>Shares Value:</strong> 0</div>
                                                </div>
                                                <div className="asset-balance">
                                                    <div className="main-text"><strong>Your WBTC Balance:</strong> 0</div>
                                                </div>
                                                <div className="asset-balance">
                                                    <div className="main-text"><strong>Your ETH Balance:</strong> 0</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        </TabPane>
                    </TabContent>
                    
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
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret color="primary">
                                Deposit 
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Deposit</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Deposit All</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret color="secondary">
                                Withdraw 
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Withdraw</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Withdraw All</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
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
  