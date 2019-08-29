import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer(){

    return(
        <div className = "menu" id = "footer-menu">
            <div><Link to="/locations" id="footer-menu-item">Locations</Link></div>
            <div><Link to="/contact" id="footer-menu-item">Contact</Link></div>
            <div><Link to="/" id="footer-menu-item">Home</Link></div>
        </div>
    )
}