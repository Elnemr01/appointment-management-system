import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AppointmentCard from '../components/appointmentCard/AppointmentCard';
import { doctors } from '../assets/assets_frontend/assets';

const Myappointments = () => {
    let appointmentArr =useSelector(state => state.appContainer);
    let [appointments,setAppointments]=useState([]);


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
            </div>
        </section>
    )
}


export default Myappointments
