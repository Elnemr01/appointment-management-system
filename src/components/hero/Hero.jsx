import React from 'react'
import "./hero.css"
import { assets } from '../../assets/assets_frontend/assets'
import { Link } from 'react-router'

const Hero = () => {
    return (
        <div className="hero">
            <div className="text">
                <h2>book appointment with trusted doctors</h2>
                <div className="info">
                    <div className="images">
                        <img src={assets.group_profiles} alt="check connection" loading='lazy' />
                    </div>
                    <p>
                        Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.
                    </p>
                </div>
                <Link to={'#speciality'}>book appointment <img src={assets.arrow_icon} alt="check connection" loading='lazy'/></Link>
            </div>
            <div className="image">
                <img src={assets.header_img} alt="check connection" loading='lazy' />
            </div>
        </div>
    )
}

export default Hero

