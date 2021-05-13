import React, { Component } from "react";
import ExperimentDetail from "../ExperimentDetail";
import stakedPut from "../../contracts/stakedPut";

class UpOnlyWBTC extends Component<
  any,
  {
    purchaseAmount: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      purchaseAmount: "0",
    };
  }

  updatePurchaseAmount = ({ target: { value } }: { target: any }) => {
    this.setState({ purchaseAmount: value });
  };

  purchase = async () => {
    try {
      const {
        wbtcSize,
        expDigg,
        tradeAmt,
        premium,
        totalCost,
        currentPrice,
        expiry,
      } = await stakedPut.methods.getInputs(this.state.purchaseAmount).call();
      // TODO: Call buyInstrument with inputs
      console.log(
        `wbtcSize: ${wbtcSize}`,
        `expDigg: ${expDigg}`,
        `tradeAmt: ${tradeAmt}`,
        `premium: ${premium}`,
        `totalCost: ${totalCost}`,
        `currentPrice: ${currentPrice}`,
        `expiry: ${expiry}`
      );
    } catch (err) {
      console.error(err);
    }
  };

  render = () => {
    return (
      <ExperimentDetail
        purchaseAmount={this.state.purchaseAmount}
        updatePurchaseAmount={this.updatePurchaseAmount}
        purchase={this.purchase}
      />
    );
  };
}

export default UpOnlyWBTC;
