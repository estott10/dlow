import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Options extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }
    render(){

    return(
        <div className= "options">
        
            <div className="option"><Link to='/newprofile' style={{ textDecoration: 'none', color: 'white' }}>What's Your Wheel Style Profile?</Link></div>
            <div className="option"><Link to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}>Explore Your Current Wheels</Link></div>

        </div>

    )
  }

}