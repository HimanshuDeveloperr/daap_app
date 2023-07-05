import React,{useState,useEffect} from 'react'
import './Adderess.scss'
import link from '../Assets/external_link_icon_152621.png'
const Adderess = () => {
  const [walletAddress, setWalletAddress] = useState('0xc3d688B66703497DAA19211EEdff47f25384cdc3');

  useEffect(() => {
    const addressFromLocalStorage = localStorage.getItem('address');
    if (addressFromLocalStorage) {
      setWalletAddress(addressFromLocalStorage);
    }
  }, []);
  return (
     
    <div className="add">
        <div className="logos">
          <span className="leftlogo"><img src="	https://app.compound.finance/images/assets/asset_USDC.svg" width={40} alt="yo" /></span>
          <span className="eth"><img src="https://app.compound.finance/images/assets/asset_ETHEREUM.svg" width={40}  alt="logo" /></span>
        </div>

        <div className="address">
          <div className="mainsec">
            <span className='name'>USDC</span>
            <span className='coin'>
            | Ethereum
            </span>
          </div>
          <div className="id">
          {walletAddress}
          <span className='link'>
           <img src={link} alt="link" width={20} height={20} />
          </span>
          </div>
        </div>
    </div>

    )
}

export default Adderess