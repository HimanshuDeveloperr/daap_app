import React from 'react'
import './Navbar.scss'
import image from '../Assets/Compound Logo (Comp) - PNG Logo Vector Downloads (SVG, EPS).png'
import dashboard from '../Assets/dashboard.svg'
import market from '../Assets/markets.svg'
import vote from '../Assets/vote.svg'
import extension from '../Assets/extensions.svg'
const Navbar = () => {
const connectHandler=()=>{
    console.log("hello");
}

  return (
    <div className="navbar">
        <div className="left">
            <img src={image} alt="" />
            <span className="title">Compound</span>
        <div className="links">
        <div className='link'> <img src={dashboard} alt="" /> Dashboard</div>
        <div className='link'> <img src={market} alt="" /> Markets</div>
        <div className='link'> <img src={extension} alt="" /> Extensions</div>
        <div className='link'> <img src={vote} alt="" /> Vote</div>
        </div>
        </div>

        <div className="right">
            <div className="exchange">
                <span>
                <img src="https://app.compound.finance/images/assets/asset_USDC.svg" alt="" />
                </span>
                <span>

                <img src="https://app.compound.finance/images/assets/asset_ETHEREUM.svg" alt="" />
                </span>
                
                <span className='usdc'>USDC</span>
                <span className='eth'>Ethereum<svg className="arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.2287 0.171509L0.285889 1.11432L4.99992 5.82838L9.71397 1.11434L8.77116 0.171528L4.99994 3.94275L1.2287 0.171509Z" fill="#7A8A99"></path></svg></span>
            </div>
            <button className="connect" onClick={connectHandler}>
                Connect Wallet
            </button>
        </div>
      
        

    </div>
  )
}

export default Navbar