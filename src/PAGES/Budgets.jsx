import React from 'react'
import Header from '../COMPONENTS/Header';
import Footer from '../COMPONENTS/Footer'

function Budgets() {
  return (
    <div>
      <Header/>
      <div className="row">
        <div className="col-md 1"></div>
        <div className="col-md 5"style={{fontSize:'18px', marginTop: '5px', marginLeft: '2rem', marginRight: '2rem', textAlign: 'justify'}}>
            <p>TOTAL BUDGET</p>
            <p style={{marginTop:'-20px',color:' #30afdd'}}>₹0.00</p>
        </div>
        <div className="col-md 5" style={{fontSize:'18px', marginTop: '5px', marginLeft: '2rem', marginRight: '2rem', textAlign: 'justify'}}>
            <p>TOTAL SPENT</p>
            <p style={{marginTop:'-20px',color:' #30afdd'}}>₹0.00</p>
        </div>
        <div className="col-md 1"></div>
      </div>
      <div className="row mt-5">
        {/* <div className="col-md 4"></div>
        <div className="col-md 4 "> */}
        <p style={{fontSize:'18px',fontFamily:"cursive",display:'flex',textAlign:'center',justifyContent:'center'}}>Currently, no budget is applied for this month. Set nudgets-limits for this month,or copy your budget-limits from past months</p>
        {/* </div>
        <div className="col-md 4"></div> */}
    </div>
    <div>
        <h6 style={{fontSize:'18px',fontFamily:"cursive",display:'flex',textAlign:'center',justifyContent:'center',textDecoration: 'underline'}}>Not budgeted this month</h6>
    </div>
      <Footer/>
    </div>
  )
}

export default Budgets
