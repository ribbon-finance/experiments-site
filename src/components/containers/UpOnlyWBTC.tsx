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
      const encodedBuyInstrumentCall = await (
        await stakedPut.methods.buyInstrument([
          process.env.REACT_APP_NODE_ENV ? "5000000000000" : currentPrice,
          wbtcSize,
          process.env.REACT_APP_NODE_ENV
            ? "1000000000000000000000"
            : premium + 1,
          expiry,
          purchaseAmount,
          tradeAmt,
          wbtcSize,
          expDigg,
        ])
      ).encodeABI();

      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            to: stakedPut._address,
            from: window.ethereum.selectedAddress,
            value: totalCost,
            data: encodedBuyInstrumentCall,
          },
        ],
      });
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
