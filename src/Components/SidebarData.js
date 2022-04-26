import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faStethoscope, faUserDoctor, faHospitalUser, faWheelchair, faCreditCard, faCircleQuestion} from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [

    {
        title: "Dashboard",
        icon: <FontAwesomeIcon icon={faChartPie} />,
        link: "/Dashboard"
    },
    {
        title: "Appointments",
        icon: <FontAwesomeIcon icon={faStethoscope} />,
        link: "/Appointments"
    },
    {
        title: "Doctors",
        icon: <FontAwesomeIcon icon={faUserDoctor} />,
        link: "/Doctors"
    },
    {
        title: "Departments",
        icon: <FontAwesomeIcon icon={faHospitalUser} />,
        link: "/Departments"
    },
    {
        title: "Patients",
        icon: <FontAwesomeIcon icon={faWheelchair} />,
        link: "/Patients"
    },
    {
        title: "Payments",
        icon: <FontAwesomeIcon icon={faCreditCard} />,
        link: "/Payments"
    },
    {
        title: "Help",
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        link: "/Help"
    }
]