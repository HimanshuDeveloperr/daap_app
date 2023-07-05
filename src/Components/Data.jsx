import React from 'react'
import './Data.scss'
import LineChart from './LineChart.jsx'
const Data = () => {
  return (

  <div className="main_data_container">
    <div className="left_data">
        <div className='co'>
        Total Collateral
        </div>
        <div className='price'>
        $525.36M
        </div>
        <div>
          <LineChart backgroundColor= 'rgba(0, 173, 121, 0.2)' borderColor= 'rgba(0, 173, 121, 1)' />
        </div>
    </div>
    <div className="right_data">
        <div className='bo'>
        Total Borrowing
        </div>
        <div className='price'>
        $241.70M
        </div>
        <div>
        <LineChart backgroundColor='rgba(143, 102, 255, 0.2)' borderColor= 'rgba(143, 102, 255, 1)'/>

        </div>
    </div>
  </div>

    )
}

export default Data;