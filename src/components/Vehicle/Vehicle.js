import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Profile_Vehicles from '../ProfileVehicles/Profile_Vehicles';

export default class Vehicle extends Component{
  constructor(){
    super()

    this.state = {
      
    }
  }
    render(props){
        const {title, price, vehicle_type, manufacturers, vehicle_profileid}= this.props;
    return(
        <div>

        <Link vehicle_profileid={vehicle_profileid} make={manufacturers} vehicle_type={vehicle_type} to='/profilelist'><h2>{title}</h2></Link>
        <div>Max Price:{price}</div>
        <div>Type: {vehicle_type}</div>
        <div>Make: {manufacturers}</div>
        <Profile_Vehicles make={manufacturers} vehicle_type={vehicle_type}/>
        </div>

    )
  }

}