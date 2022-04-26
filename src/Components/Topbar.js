import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './Topbar.css';

function Topbar() {
  return (
    <div className='topbar'>
        <div className='search'>
            <input type="text" placeholder='Search'/>
        <div className='searchIcon'><FontAwesomeIcon icon={faSearch}/></div>
        </div>
        <div className='notifications'><FontAwesomeIcon icon={faBell} /></div>
        <div className='user'><FontAwesomeIcon icon={faUser} /></div>
    </div>
  )
}

export default Topbar