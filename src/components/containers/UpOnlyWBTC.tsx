import React, { useState } from "react";
import ExperimentDetail from "../ExperimentDetail";
import stakedPut from "../../contracts/stakedPut";

const UpOnlyWBTC = () => {
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [putPriceETH, setPutPriceETH] = useState('');

  const updatePurchaseAmount = ({ target: { value } }: { target: any }) => {
    setPurchaseAmount(value);
  };

  const purchase = async () => {
    const purchaseAmountEth = (purchaseAmount * 1e18).toString();
    try {
      const {
        wbtcSize,
        expDigg,
        tradeAmt,
        premium,
        totalCost,
        currentPrice,
        expiry,
      } = await stakedPut.methods.getInputs(purchaseAmountEth).call();
      const putPrice = (totalCost / 1e18); 
      setPutPriceETH(putPrice.toFixed(6));
      const encodedBuyInstrumentCall = await (
        await stakedPut.methods.buyInstrument([
          currentPrice,
          wbtcSize,
          premium + 1,
          expiry,
          purchaseAmountEth,
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
            value: Number(totalCost).toString(16),
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
      totalCost={putPriceETH}
    />
  );
};

export default UpOnlyWBTC;
