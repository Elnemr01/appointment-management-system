import React from 'react'
import './appointmentCard.css'
import { doctors } from '../../assets/assets_frontend/assets'

const AppointmentCard = ({appointmentData}) => {
    return (
        <div className="appointmentCard">
            <div className="firstPart">
                <div className="docImage">
                    <img src={appointmentData.image} alt="chect connection" loading='lazy'/>
                </div>
                <ul className="appointmentData">
                    <li className="name">{appointmentData.name}</li>
                    <li className="speciality">{appointmentData.speciality}</li>
                    <li className="address">address: </li>
                    <li className="address1">{appointmentData.address.line1}</li>
                    <li className="address2">{appointmentData.address.line2}</li>
                    <li className="dateAndTime"><span>date & time:</span> {appointmentData.date} | {appointmentData.time}</li>
                </ul>
            </div>
            <div className="buttons">
                <button>pay online</button>
                <button>cancel appointment</button>
            </div>
        </div>
    )
}

/**
    appointment data = {
        doctor image,
        doctor name,
        doctor speciality,
        doctor address,
        date,
        time
    }
 */

export default AppointmentCard
