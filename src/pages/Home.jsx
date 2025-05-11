import React from 'react'
import Hero from '../components/hero/Hero'
import HomeTitle from '../components/homeTitle/HomeTitle'
import Specialisty from '../components/specialistySection/Specialisty'

const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <Specialisty/>
        </div>
    )
}

export default Home
