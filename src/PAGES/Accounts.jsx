import React from 'react'
import Header from '../COMPONENTS/Header'
import Footer from '../COMPONENTS/Footer'


function Accounts() {
  return (
    <div>
        <Header/>
      <div className="row">
        <p className='d-flex justify-content-center align-items-center'>Overall</p>
        <div className="col-md 1"></div>
        <div className="col-md 5">
          <p>Expense so far</p>
          <p>₹0.00</p>
        </div>
        <div className="col-md 6">
        <p>Income so far</p>
        <p>₹0.00</p>
        </div> 
      </div>
      <div className="row">
        <p className='d-flex justify-content-center align-items-center'>All accounts balance:₹0.00</p>
      </div>
      <div className="row">
        <p className='d-flex justify-content-center align-items-center'>Accounts</p>
        <input type="text" />
      </div>
      <Footer/>
    </div>
  )
}

export default Accounts
