import React, { useEffect, useState } from 'react'
import './specialisty.css'
import HomeTitle from '../homeTitle/HomeTitle'
import { specialityData } from '../../assets/assets_frontend/assets';
import { Link } from 'react-router';

const Specialisty = () => {
    const [specialistyArr,setSpecialisty]=useState([]);

    useEffect(()=> {
        setSpecialisty(specialityData);
    })
    return (
        <section id='speciality'>
            <HomeTitle text1={'Find by Speciality'}
            text2={'Simply browse through our extensive list of trusted doctors,schedule your appointment hassle-free.'}/>
                {/* specialistyData */}
            <div className="specialistyData">
                {specialistyArr.map((e,i)=> {
                    return <Link to={`/allDocutors/${e.speciality}`} key={i}>
                        <img src={e.image} alt="check connection" loading='lazy' />
                        <p className='specialistyName'>{e.speciality}</p>
                    </Link>
                })}
            </div>
        </section>
    )
}

export default Specialisty
