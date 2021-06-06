import React, { useState } from "react";
import "../static/css/Experiments.css";
import classnames from "classnames";
import DetailsTab from "./DetailsTab";
// import WalletTab from "./WalletTab";
// import ContractsTab from "./ContractsTab";
import {
  Container,
  Row,
  Col,
  Alert,
  Card,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button
} from "reactstrap";

const ExperimentDetail = ({
  purchaseAmount,
  updatePurchaseAmount,
  purchase,
  totalCost,
}: {
  purchaseAmount: number;
  updatePurchaseAmount: any;
  purchase: any;
  totalCost: any;
}) => {
  const data = [
    {
      id: "1",
      emojis: "🚀💸",
      name: "Up Only WBTC",
      contract: "OxSalo12345",
      assetPrice: "1.00",
      currency: "$",
      totalAssets: "1000",
      totalAUM: "10000",
      baseAsset: "WBTC",
    },
  ];

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const navItems = ["Details", "Wallet", "Contracts"];

  return (
    <Container className="experiments-container container h-100">
      <Row className="row h-100 justify-content-center align-items-center">
        <Col className="experiments-column col-12">
          <div>
            <Card className="card card-detail">
              <div>
                {data.map((item) => (
                  <div className="title-section" key={item.id}>
                    <div className="emoji">{item.emojis}</div>
                    {item.name}
                    <CustomInput
                      className="switch-label float-right"
                      type="switch"
                      id="approveSwitch"
                      name="approveSwitch"
                      label="Approve Vault"
                    />
                  </div>
                ))}
              </div>
              <Alert
                color="warning"
                className="d-flex justify-content-md-center"
              >
                <Col sm="2">
                  <div className="warning-icon">
                    ⚠️ <strong> - WARNING</strong>
                  </div>
                </Col>
                <Col sm="10">
                  <div className="warning-text">
                    This an experiment of an experiment, of a series of
                    experiments, made by apes and for them. Proceed with extreme
                    caution.
                  </div>
                </Col>
              </Alert>
              <Nav pills justified>
                {navItems.map((navItem: string, navItemKey: number) => {
                  const tab = (navItemKey + 1).toString();

                  return (
                    <NavItem key={navItem}>
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
                  <DetailsTab
                    totalCost={totalCost}
                  />
                </TabPane>
                <TabPane tabId="2">
                  <DetailsTab
                    totalCost={totalCost}
                  />
                  {/* <WalletTab></WalletTab> */}
                </TabPane>
                <TabPane tabId="3">
                  <DetailsTab
                    totalCost={totalCost}
                  />
                  {/* <ContractsTab></ContractsTab> */}
                </TabPane>
              </TabContent>
              <div className="">
                <Row>
                  <Col sm="3"></Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label for="exampleNumber">Purchase Amount</Label>
                      <Input
                        type="number"
                        name="number"
                        id="exampleNumber"
                        min={0.01}
                        value={purchaseAmount}
                        onChange={updatePurchaseAmount}
                      />
                    </FormGroup>
                  </Col>
                  <Col sm="3" className="button-section float-right">
                    <Button onClick={purchase}>Purchase</Button>
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
