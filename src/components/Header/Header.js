import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){

    return(
        <div className= "header">
            <div className="logo">
            <h1>D-low</h1>
            <h2>Get Your Dream Life on Wheels</h2>
            <img alt="mandriving" src="https://cdn.pixabay.com/photo/2016/09/09/19/56/car-1657935_960_720.jpg" style={{height: 100, width: 'auto'}}/>
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