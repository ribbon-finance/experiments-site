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

  render = () => {
    return <ExperimentDetail />;
  };
}

export default UpOnlyWBTC;
