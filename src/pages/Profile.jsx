<<<<<<< HEAD
const Profile = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));    
    return (
        <div className="profile">
            {
                <div>
                    <h1>name : {user?.full_name}</h1>
                    <h1>email : {user?.email}</h1>
                </div>
            }
=======
import React, { useContext, useState } from 'react'
import './pageStyle/profilePage.css'
import { OurContext } from '../contextAPI/FilterName';
import { assets } from './../assets/assets_frontend/assets';
import { toast } from 'react-toastify';

const Profile = ({userData}) => {
    let {login}=useContext(OurContext);
    let [editable,setEditable]=useState(false);
    let [name,setName]=useState('ahmed elenmr');
    let [email,setEmail]=useState('ahmed@gm.com');
    let [phone,setPhone]=useState('00000000000');
    let [address,setAddress]=useState('');
    let [gender,setGender]=useState('');
    let [birthday,setBirthday]=useState('');

    const handleAfterEdit = ()=> {
        setEditable(!editable);
        toast.success("Profile Updated");
    }

    // if (!login) return null;
    return (
        <div className="profile">
            <div className="picture">
                <img src={assets.upload_area} alt="check connection" loading='lazy'/>
            </div>
            {/* user name */}
            <div className="name">
                {
                    !editable ? <h1>{name}</h1> :
                    <input type="text" value={name} onChange={(eve)=> setName(eve.target.value)}/>
                }
            </div>
            {/* contact info */}
            <div className="contactInfo infoTitle">
                <h2>contact information</h2>
                {/* email */}
                <div className="email data">
                    <label htmlFor="email">email id:</label>
                    <p>{email}</p>
                </div>
                {/* phone */}
                <div className="phone data">
                    <label htmlFor="phone">phone:</label>
                    {
                        !editable ? <p>{phone}</p> :
                        <input type="number" value={phone} id='phone' onChange={(eve)=> setPhone(eve.target.value)}/>
                    }
                </div>
                {/* address */}
                <div className="address data">
                    <label htmlFor="address">address:</label>
                    {
                        !editable ? <p>{address}</p> :
                        <input type="text" value={address} id='address' onChange={(eve)=> setAddress(eve.target.value)}/>
                    }
                </div>
            </div>
            <div className="basicInfo infoTitle">
                <h2>basic information</h2>
                {/* gender */}
                <div className="gender data">
                    <label htmlFor="gender">gender :</label>
                    {
                        !editable ? <p>{gender}</p> :
                        <select name="gender" id="gender" onChange={(eve)=> setGender(eve.target.value)}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    }
                </div>
                {/* birthday */}
                <div className="birthday data">
                    <label htmlFor="birthday">birthday:</label>
                    {
                        !editable ? <p>{birthday}</p> :
                        <input type='date' value={birthday} onChange={(eve)=> setBirthday(eve.target.value)}/>
                    }
                </div>
            </div>
            {editable ? <button onClick={()=> handleAfterEdit()}>save information</button> 
            : <button onClick={()=> setEditable(!editable)}>edit</button>}
>>>>>>> 128b950180132a27c1fc54821ea3f5ba763dffc5
        </div>
    )
}

export default Profile
