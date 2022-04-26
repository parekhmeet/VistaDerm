import React from 'react'
import "../App.css";
import {SidebarData} from './SidebarData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return(
        <div className='Sidebar'>
        <div id='logo'>
            <h1> <FontAwesomeIcon icon={faHeartPulse} /> VistaDerm</h1>
        </div>
        <ul className='SidebarList'>
            {SidebarData.map((val, key) => {
                return( 
                    <li className='row' 
                    id={window.location.pathname == val.link ? "active" : ""}
                    onClick={() => {window.location.pathname = val.link}}> 
                    {" "}
                    <div id='icon'>{val.icon}</div>{" "}
                    <div id='title'>{val.title}</div>
                    </li>
                );
            })}
        </ul>
        </div>
    )
}

export default Sidebar