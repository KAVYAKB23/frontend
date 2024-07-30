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
        <p style={{fontSize:'18px',fontFamily:"cursive",display:'flex',textAlign:'center',justifyContent:'center'}}>Currently, no budget is applied for this month. Set budgets-limits for this month,or copy your budget-limits from past months</p>
        {/* </div>
        <div className="col-md 4"></div> */}
    </div>
    <div>
        <h6 style={{fontSize:'18px',fontFamily:"cursive",display:'flex',textAlign:'center',justifyContent:'center',textDecoration: 'underline'}}>Not budgeted this month</h6>
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Baby</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Beauty</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Bills</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Car</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Clothing</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Education</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Electronics</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Entertainment</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Food</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Health</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Home</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Insurance</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Shopping</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Social</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Sport</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Tax</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Telephone</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>
    <div className="row" style={{display:'flex'}}>
        <div className="col-md 1"></div>
        <div className="col-md 5"><p>Transportation</p></div>
        <div className="col-md 6"><button style={{justifyContent:'flex-end', backgroundColor:' #30afdd',color:'black',fontSize:'18px'}}>Set budget</button></div>    
    </div>


      <Footer/>
    </div>
  )
}

export default Budgets
