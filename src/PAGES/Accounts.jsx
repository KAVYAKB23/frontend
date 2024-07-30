import React from 'react';
import Header from '../COMPONENTS/Header';
import Footer from '../COMPONENTS/Footer';

function Accounts() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="row mb-4 text-center">
          <div className="col-12">
            <h6>Overall</h6>
          </div>
        </div>
        <div className="row text-center mb-4">
          <div className="col-md-6">
            <p style= {{fontSize:'20px'}} >Expense so far</p>
            <p className="text-primary">₹0.00</p>
          </div>
          <div className="col-md-6">
            <p style= {{fontSize:'20px'}}>Income so far</p>
            <p className="text-primary">₹0.00</p>
          </div>
        </div>
        <div className="row text-center mb-4">
          <div className="col-12">
            <p style= {{fontSize:'20px'}}>All accounts balance: <span className="text-primary">₹0.00</span></p>
          </div>
        </div>
        <div className="row text-center mb-4">
          <div className="col-12">
            <h6>Accounts</h6>
            <input type="text" className="form-control w-50 mx-auto" placeholder="Enter account name" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accounts;
