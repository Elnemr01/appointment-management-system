import React from 'react'
import './card.css'

const DoctorCard = ({doctor}) => {
    return (
        <div className='docCard'>
            <div className="image">
                <img src={doctor.image} alt="check connection" loading='lazy'/>
            </div>
            <div className="available">
                <p></p>
                <p>availabe</p>
            </div>
            <p className="name">{doctor.name}</p>
            <div className="speciality">{doctor.speciality}</div>
        </div>
    )
}

export default DoctorCard
