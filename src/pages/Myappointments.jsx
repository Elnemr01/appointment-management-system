import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AppointmentCard from '../components/appointmentCard/AppointmentCard';
import { doctors } from '../assets/assets_frontend/assets';

const Myappointments = () => {
    let appointmentArr =useSelector(state => state.appContainer);
    let [appointments,setAppointments]=useState([]);
    // console.log(appointmentArr);


    useEffect(()=>{
        setAppointments(appointmentArr);
    },[appointmentArr]);


    return (
        <section className="myAppointments">
            <h2 className="pageName">my appointments</h2>
            <div className="appointments">
                {
                    appointments.map((e)=> <AppointmentCard appointmentData={e}/>)
                }

                {/* exapmle data */}
                <AppointmentCard appointmentData={doctors[0]}/>
                <AppointmentCard appointmentData={doctors[0]}/>
            </div>
        </section>
    )
}


export default Myappointments
