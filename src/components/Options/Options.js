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
        <div>
            Options
            <div><Link to='/newprofile'>What's Your Wheel Style Profile?</Link></div>
            <div><Link to='/dashboard'>Explore Your Current Wheels</Link></div>

        </div>

    )
  }

}