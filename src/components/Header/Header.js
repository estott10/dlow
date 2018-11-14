import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){

    return(
        <div className= "header">
            <div className="logo">
            <h1>D-low</h1>
            <h2>Get Your Dream Life on Wheels</h2>
            <img alt="womandriving" src="/src/adventure-automobile-automotive-787476copy.jpg" />
            </div>
            <div className="menu">
            <p><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></p>
            <p><Link to="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>Vehicle Profiles</Link></p>
            <p><Link to="/newprofile" style={{ textDecoration: 'none', color: 'white' }}>Start New Profile</Link></p>
            <p><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Logout</Link></p>
            </div>
        </div>

    )
}