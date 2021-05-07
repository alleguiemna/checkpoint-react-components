import React from 'react'
import "./ProfilePhoto.css";
import img from "./images.jpg"
const ProfilePhoto = () => {
    return (
        <div >
                <div >
                   <img  className="photo" src={img} alt=""/>
                </div>
        </div>
    )
}

export default ProfilePhoto;