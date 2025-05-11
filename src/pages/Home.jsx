import React from 'react'
import Hero from '../components/hero/Hero'
import Specialisty from '../components/specialistySection/Specialisty'
import TopDoctors from '../components/topDoctors/TopDoctors'

const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <Specialisty/>
            <TopDoctors/>
        </div>
    )
}

export default Home
