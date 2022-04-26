import "./home.scss"

import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import Widget from "../../components/Widget/Widget"
import Schedular from "../../components/schedule/Schedular"

const Home = () => {
  return (
    <div className="home">
        
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget/>
            
            
            

          </div>
          
        
          
          
          Home container
        </div>
    </div>
  )
}

export default Home