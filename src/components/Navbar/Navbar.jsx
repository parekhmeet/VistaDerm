import "./navbar.scss"
import noti from "./notification.png";
import user from "./Doc.png";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";



 

const Navbar = () => {
  const [bgcolor, setBgcolor] = useState('black');
  const [textcolor, setTextcolor] = useState('white');    
  
  const handleHighlightTab = () => {
      setBgcolor('white');
      setTextcolor('black');
  }

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
        </div>
        <div className="items">
          {/* <div className="item">
            English
          </div> */}
          <div className="item">
            Features
          </div>
          <div className="item">
            Solutions
          </div>
          <div className="item">
            About
          </div>
          <div className="item">
          <img  src={noti} height='20px' width='20px'alt="fireSpot"/>
                    
          </div>
          <div className="user">
          <img  src={user} height='25px' width='25px'alt="fireSpot"/>
                    
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Navbar