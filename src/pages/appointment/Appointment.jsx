import React from 'react'
import './appointment.scss';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

import Schedular from '../../components/schedule/Schedular';
import Editt from '../../components/Edit/edit';

const Appointment = () => {
  return (
    <div className="appointment">

        <Sidebar/>
        <div className="AppointmentContainer">
            <Navbar/>
            
            <Editt/>
        </div>
        
    </div>
  )
}

export default Appointment