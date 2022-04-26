import "./sidebar.scss"
import cal from "./logo/appointment.png"
import patient from "./logo/patient.png"
import cases from "./logo/medical-history.png"
import med from "./logo/medicine.png"
import crm from "./logo/crm.png"
import finance from "./logo/finance.png"
import { Link,NavLink } from "react-router-dom"



const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top"><span className="logo">
            <NavLink to="/" style={{color: 'inherit', textDecoration: 'inherit'}} activeClassName="selected">
                VistaDerm</NavLink></span>
        </div>
        <hr/>
        <div className="center">
            <ul>
            {/* // id={window.location.pathname == val.link ? "active" : ""}
            // onClick={() => {window.location.pathname = val.link}} */}
                
                <li>
                
                <img  src={cal} height='30px' width='30px'alt="fireSpot"/>
                <NavLink to="/Appointment" style={{ color: 'inherit', textDecoration: 'inherit' ,paddingLeft: 10,fontSize: 14
                }} activeClassName="selected">
                    Appointments 
                    </NavLink>
                </li>
                <li>
                <img  src={patient} height='30px' width='30px'alt="fireSpot"/>
                    <span>Patients</span>
                </li>
                <li>
                <img  src={cases} height='30px' width='30px'alt="fireSpot"/>
                    <span>Cases</span>
                </li>
                <li>
                <img  src={med} height='30px' width='30px'alt="fireSpot"/>
                    <span>Medicines</span>
                </li>
                <li>
                <img  src={crm} height='30px' width='30px'alt="fireSpot"/>
                    <span>CRM</span>
                </li>
                <li>
                <img  src={finance} height='30px' width='30px'alt="fireSpot"/>
                    <span>Finances</span>
                </li>
            </ul>
        </div>
        {/* <div className="bottom">color</div> */}
    </div>
  )
}

export default Sidebar