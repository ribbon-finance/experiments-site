import React, { Component } from "react";
import ExperimentDetail from "../ExperimentDetail";

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

  render = () => {
    return (
      <ExperimentDetail
        purchaseAmount={this.state.purchaseAmount}
        updatePurchaseAmount={this.updatePurchaseAmount}
      />
    );
  };
}

export default UpOnlyWBTC;
