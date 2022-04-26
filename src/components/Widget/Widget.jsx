import React from 'react';
import "./widget.scss";
import doctor from "./doctor.png"
import Schedular from '../schedule/Schedular';

const Widget = () => {
  return (
    <div className="widget">
        <div className="welcome">
            <div className="left">
                <div className="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="15" cy="15" r="15" fill="#90caf9"/>
                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="5" cy="5" r="5" transform="translate(30 30)" fill="#4dd0e1"/>
                    </svg>

                </div>
            </div>

            <div className='text'>Welcome Dr.Alex
            </div>
                    
            <div className='doctor'>
                    <img  src={doctor} height='150px' width='150px'alt="fireSpot"/>
            </div>

        </div>
        
        <div className="schedule">
            
        
        </div>
        
    </div>
  )
}

export default Widget