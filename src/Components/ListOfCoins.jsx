import React from "react";
import "./ListOfCoins.scss";

const dummy_data = [
  {
    id: 1,
    CollateralAssets: "Ether",
    insort: "ETH",
    totalSupply: 225.57,
    oraclePrice: 1960.11,
    reserves: 0.0,
    collateralFactor: 83,
    liquidationFactor: 90,
    liquidationPenalty: 5,
    src: "https://app.compound.finance/images/assets/asset_WETH.svg",
    width:"33%"
  },
  {
    id: 2,
    CollateralAssets: "	Wrapped Bitcoin",
    insort: "WBTC",
    totalSupply: 218.83,
    oraclePrice: 30989.91,
    reserves: 0.03,
    collateralFactor: 70,
    liquidationFactor: 77,
    liquidationPenalty: 5,
    src: "https://app.compound.finance/images/assets/asset_BTC.svg",
    width:"59%"

  },
  {
    id: 3,
    CollateralAssets: "Compound",
    insort: "COMP",
    totalSupply: 57.09,
    oraclePrice: 64.36,
    reserves: 0.02,
    collateralFactor: 65,
    liquidationFactor: 70,
    liquidationPenalty: 12,
    src: "	https://app.compound.finance/images/assets/asset_COMP.svg",
    width:"99%"

  },
  {
    id: 4,
    CollateralAssets: "Uniswap",
    insort: "UNI",
    totalSupply: 12.67,
    oraclePrice: 5.55,
    reserves: 0.0,
    collateralFactor: 75,
    liquidationFactor: 81,
    liquidationPenalty: 7,
    src: "		https://app.compound.finance/images/assets/asset_UNI.svg",
    width:"99%"

  },
  {
    id: 5,
    CollateralAssets: "Chainlink",
    insort: "LINK",
    totalSupply: 4.9,
    oraclePrice: 6.52,
    reserves: 0.0,
    collateralFactor: 79,
    liquidationFactor: 85,
    liquidationPenalty: 7,
    src: "		https://app.compound.finance/images/assets/asset_LINK.svg",
    width:"59%"

  },
];

const ListOfCoins = () => {
  return (
    <div className="container">
      <div className="header">
        <div>Collateral Assets</div>
        <div>Total Supply</div>
        <div>Oracle Prices</div>
        <div>Reserves</div>
        <div>Collateral Factor</div>
        <div>Liquidation Factor</div>
        <div>Liquidation Penalty</div>
      </div>
      <div>
        {dummy_data.map((data) => (
          <li className="section" key={data.id}>
            <div>
              <div className="details">
                <img src={data.src} alt="" />
                <div>
                  <span>{data.CollateralAssets}</span>
                  <div className="symbol">{data.insort}</div>
                </div>
              </div>
            </div>
            <div>${data.totalSupply}M</div>
            <div>${data.oraclePrice.toFixed(2)} <div
                className="meter"
                style={{
                  backgroundColor: '#00c289',
                  borderRadius: '8px',
                  height: '4px',
                  maxWidth: '100%',
                  marginLeft:"0",
                  marginTop:"10px",
                  width:`${data.width}`, // Set the width dynamically based on the progress,
                }}
              /></div>
            <div>${data.reserves.toFixed(2)}</div>
            <div>{data.collateralFactor}%</div>
            <div>{data.liquidationFactor}%</div>
            <div>{data.liquidationPenalty}%</div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ListOfCoins;
