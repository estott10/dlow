import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateVehicleProfileId, updateTitle, updatePrice, updateVehicleType, updateManufacturers, updateMpg} from '../../ducks/reducer';

export default class Vehicle extends Component{
  constructor(props){
    super(props)

    this.state = {
      vehicle_profileid: props.vehicle_profileid,	
      title: props.title,	
      price: props.price,	
      vehicle_type: props.vehicle_type,	
      manufacturers: props.manufacturers,	
      mpg: props.mpg,	
      userid: props.userid,
      profileVehicles: []
    }
    this.updateShownVehicleProfile = this.updateShownVehicleProfile.bind(this);
  }
  updateShownVehicleProfile(){
    const {vehicle_profileid, title, price, vehicle_type, manufacturers, mpg, userid, profileVehicles} = this.state;
    const {updateVehicleProfileId, updateTitle, updatePrice, updateVehicleType, updateManufacturers, updateMpg} = this.props;
    updateVehicleProfileId(vehicle_profileid); 
    updateTitle(title); 
    updatePrice(price); 
    updateVehicleType(vehicle_type); 
    updateManufacturers(manufacturers); 
    updateMpg(mpg);
 }

    render(props){
        const {title, price, vehicle_type, manufacturers, vehicle_profileid}= this.props;
    return(
        <div>

        <Link ><button onClick={this.updateShownVehicleProfile}>{title}</button ></Link>
        <div>Max Price:{price}</div>
        <div>Type: {vehicle_type}</div>
        <div>Make: {manufacturers}</div>
        </div>

    )
  }

}