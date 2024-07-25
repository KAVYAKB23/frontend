import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar>
            <img
              alt=""
              src="../Images/logo.png"
              width="250"
              height="250"
              className="d-inline-block align-top"
            />
      </Navbar>
    </div>
  )
}

export default Header
