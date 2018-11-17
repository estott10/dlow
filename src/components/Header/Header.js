import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){

    return(
        <div className= "header">
            <div className="logo">
            <div><h1>D-Low</h1></div>
            <div><h2>Get Your Dream Life on Wheels</h2></div>
            
            </div>
            <div className="menu">
            <p><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></p>
            <p><Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>Vehicle Profiles</Link></p>
            <p><Link to="/newprofile" style={{ textDecoration: 'none', color: 'white' }}>Start New Profile</Link></p>
            <p><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Logout</Link></p>
            </div>
            <div className= "welcome">Welcome</div>
        </div>

    )
}