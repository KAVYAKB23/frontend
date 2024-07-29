import React from 'react'
import Header from '../COMPONENTS/Header'
import Footer from '../COMPONENTS/Footer'
import { Button } from 'react-bootstrap'



function Analysis() {
  return (
    <div>
      <Header/>
      <div className="row">
        <div className="col-md 1"></div>
        <div className="col-md 4" style={{fontSize:'18px', marginTop: '5px', marginLeft: '2rem', marginRight: '2rem', textAlign: 'justify'}}>
            <p>EXPENSE</p>
            <p style={{marginTop:'-20px',color:' #30afdd'}}>₹0.00</p>
        </div>
        <div className="col-md 3">
            <p>INCOME</p>
            <p style={{marginTop:'-20px',color:' #30afdd'}}>₹0.00</p>
        </div>
        <div className="col-md 3" style={{fontSize:'18px', marginTop: '5px', marginLeft: '2rem', marginRight: '2rem', textAlign: 'justify'}}>
            <p>TOTAL</p>
            <p style={{marginTop:'-20px',color:' #30afdd'}}>₹0.00</p>
        </div>
        <div className="col-md 1"></div>
    </div> 
    <div className="row mt-5">
        {/* <div className="col-md 4"></div>
        <div className="col-md 4 "> */}
        <p style={{fontSize:'18px',fontFamily:"cursive",display:'flex',textAlign:'center',justifyContent:'center'}}>No analysis this month</p>
        {/* </div>
        <div className="col-md 4"></div> */}
    </div>
    <div className="row">
       <div className="col  d-flex justify-content-end">
        <Button style={{color:'black',backgroundColor:'#30afdd' , fontWeight: 'bold',marginRight: '10%'}}>+</Button>{' '}</div>
    </div>
      <Footer/>
    </div>
  )
}

export default Analysis
