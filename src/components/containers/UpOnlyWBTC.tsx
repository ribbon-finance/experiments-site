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
        currentPrice,
        expiry,
      } = await stakedPut.methods.getInputs(purchaseAmount).call();
      const encodedBuyInstrumentCall = await (
        await stakedPut.methods.buyInstrument(
          [
            currentPrice,
            wbtcSize,
            premium + 1,
            expiry,
            purchaseAmount,
            tradeAmt,
            wbtcSize,
            expDigg,
          ]
        )
      ).encodeABI();
      console.log(encodedBuyInstrumentCall);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(Object.keys(window.ethereum));

  return (
    <ExperimentDetail
      purchaseAmount={purchaseAmount}
      updatePurchaseAmount={updatePurchaseAmount}
      purchase={purchase}
    />
  );
};

export default UpOnlyWBTC;
