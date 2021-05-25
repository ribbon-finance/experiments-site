import React, { useState } from "react";
import ExperimentDetail from "../ExperimentDetail";
import stakedPut from "../../contracts/stakedPut";

const UpOnlyWBTC = () => {
  const [purchaseAmount, setPurchaseAmount] = useState(0);

  const updatePurchaseAmount = ({ target: { value } }: { target: any }) => {
    setPurchaseAmount(value);
  };

  const purchase = async () => {
    try {
      const {
        wbtcSize,
        expDigg,
        tradeAmt,
        premium,
        totalCost,
        currentPrice,
        expiry,
      } = await stakedPut.methods.getInputs(purchaseAmount).call();
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

  return (
    <ExperimentDetail
      purchaseAmount={purchaseAmount}
      updatePurchaseAmount={updatePurchaseAmount}
      purchase={purchase}
    />
  );
};

export default UpOnlyWBTC;
