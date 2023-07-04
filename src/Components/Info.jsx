import React from "react";
import "./Info.scss";

const Info = () => {
  return (
    <div className="main">
      <div className="sub_container">
        <div className="info_container">
          <div className="one">
            <div className="two">Total Earning</div>
            <div className="three">$249.99M</div>
          </div>
          <div className="one">
            <div className="two">Earn APR</div>
            <div className="three">
              <span>
                <img
                  src="https://app.compound.finance/images/assets/asset_USDC.svg"
                  width={20}
                  alt=""
                />
              </span>
              3.19%
            </div>
          </div>
          <div className="one">
            <div className="two">Earn Distribution</div>
            <div className="three">
              <span>
                <img
                  src="https://app.compound.finance/images/assets/asset_COMP.svg"
                  width={20}
                  alt=""
                />
              </span>
              0.00%
            </div>
          </div>
          <div className="one">
            <div className="two">Reserves</div>
            <div className="three">$1.39M</div>
          </div>
        </div>

        <div className="info_container">
          <div className="one">
            <div className="two">Total Borrowing</div>
            <div className="three">$235.02M</div>
          </div>
          <div className="one">
            <div className="two">Borrow APR</div>
            <div className="three">
              <span>
                <img
                  src="https://app.compound.finance/images/assets/asset_USDC.svg"
                  width={20}
                  alt=""
                />
              </span>
              3.99%
            </div>
          </div>
          <div className="one">
            <div className="two">Borrow Distribution</div>
            <div className="three">
              <span>
                <img
                  src="https://app.compound.finance/images/assets/asset_COMP.svg"
                  width={20}
                  alt=""
                />
              </span>
              4.75%
            </div>
          </div>
          <div className="one">
            <div className="two">Oracle Price</div>
            <div className="three">$1.00</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="utilize">
          <div className="same">utilization</div>
          <div className="same">93.98%</div>
          <div className="same" data-simplebar>scroll</div>
        </div>
        <div className="utilize new">
          <div className="sameOne">Borrow APR</div>
          <div className="sameOne">3.99%</div>
        </div>
        <div className="last">
          <div className="">Earn APR</div>
          <div className="">3.19%</div>
          <div className="">scroll</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
