import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){

    return(
        <div className= "header" id="header">
            <div className="logo">
            <div><h1>DriveStyle</h1></div>
            {/* <div><h2>Get Your Dream Life on Wheels</h2></div> */}
            
            </div>
            <div className="menu">
            <p><Link to="/" id= "menuItem">Home</Link></p>
            <p><Link to="/dashboard" id= "menuItem">Vehicle Profiles</Link></p>
            <p><Link to="/newprofile" id= "menuItem">Start New Profile</Link></p>
            <p><Link to="/" id= "menuItem">Logout</Link></p>
            </div>
            {/* <div className= "welcome">Welcome</div> */}
        </div>

    )
}