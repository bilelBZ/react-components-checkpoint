import React from 'react'
import Profile from './bilel.jpg'
function ProfilePhoto() {
    const mystyle = {
        width :"50%",
        height:"auto"
    }
    return (
        <div>
            <img src={Profile} style={mystyle} alt='bilel'/>
        </div>
    )
}

export default ProfilePhoto
