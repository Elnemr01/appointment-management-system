import React, { useContext } from 'react'
import { OurContext } from '../contextAPI/FilterName';

const Profile = () => {
    let {login}=useContext(OurContext);


    if (!login) return null;
    return (
        <div className="profile">
            profile
        </div>
    )
}

export default Profile
