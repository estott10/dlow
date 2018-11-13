import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){

    return(
        <div className= "header">

            <h1>D-low</h1>
            <h2>Get Your Dream Life on Wheels!</h2>
            
            <div className="menu">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/dashboard">Vehicle Profiles</Link></p>
            <p><Link to="/newprofile">Start New Profile</Link></p>
            <p><Link to="/">Logout</Link></p>
            </div>
        </div>

    )
}