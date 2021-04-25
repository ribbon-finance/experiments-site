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
                            <div className="title-section">
                                <div className="emoji">{item.emojis}</div>{item.name}
                                <CustomInput className="switch-label float-right" type="switch" id="approveSwitch" name="approveSwitch" label="Approve Vault" />
                            </div>
                        ))}                        
                    </div>
                    <Alert color="warning" className="d-flex justify-content-md-center">
                        <Col sm="2">
                            <div className="warning-icon">
                                ⚠️ <strong> - WARNING</strong>
                            </div>
                        </Col>
                        <Col sm="10">
                            <div className="warning-text">
                            This an experiment of an experiment, of a series of experiments, made by apes and for them. Proceed with extreme caution.
                            </div>
                        </Col>
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
                                            <div className="mini-card-list token">
                                                <div className="label-text"><strong>WBTC price:</strong> <span className="data-text">$55,960.00</span></div>
                                            </div>
                                            <div className="mini-card-list deposit-limit">
                                                <div className="label-text"><strong>Deposit Limit:</strong> <span className="data-text">200.00 WBTC</span></div>
                                            </div>
                                            <div className="mini-card-list total-assets">
                                                <div className="label-text"><strong>Total Assets:</strong> <span className="data-text">77.66 WBTC</span></div>
                                            </div>
                                        </Col>
                                        <Col xs="6">
                                            <div className="mini-card-list vault">
                                                <div className="label-text"> <strong>Vault:</strong>
                                                <a href="https://etherscan.io/" className="data-text"> Contract</a></div>
                                            </div>
                                            <div className="mini-card-list version">
                                                <div className="label-text"><strong>Version:</strong> <span className="data-text">0.3.5</span></div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="container progress-section">
                                        <Col xs="12">
                                            <div className="progress-details text-right">
                                                <div className="label-text">
                                                    <strong>Price Per Share:</strong> <span className="data-text">1.0033743</span>
                                                </div>
                                                <div className="label-text">
                                                    <strong>Available limit:</strong> <span className="data-text">122.33 WBTC</span>
                                                </div>
                                                <Progress className="progress-custom" value="75" />
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
                    <div className="">
                        <Row>
                            <Col sm="3">
                            </Col>
                            <Col sm="6">
                                <FormGroup>
                                    <Label for="exampleNumber">Amount WBTC</Label>
                                    <Input
                                    type="number"
                                    name="number"
                                    id="exampleNumber"
                                    placeholder="0"
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm="3" className="button-section">
                                <UncontrolledButtonDropdown className="float-right">
                                    <DropdownToggle caret color="secondary">
                                        Deposit 
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Deposit</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Deposit All</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                                <UncontrolledButtonDropdown className="float-right">
                                    <DropdownToggle caret color="secondary">
                                        Withdraw 
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Withdraw</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Withdraw All</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown> 
                            </Col>
                        </Row>
                    </div>
                    </Card>
                </div>
                </Col>
            </Row>
        </Container>
    );
};
  
export default ExperimentDetail;
  