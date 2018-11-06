import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProfileVehicles from '../ProfileVehicles/ProfileVehicles';
import {connect} from 'react-redux';
import {updateVehicleType, updateManufacturers} from '../../ducks/reducer';

class Vehicle extends Component{
  constructor(props){
    super(props)

    this.state = {
      vehicle_profileid: this.props.vehicle_profiles.vehicle_profileid,	
      title: this.props.vehicle_profiles.title,	
      price: this.props.vehicle_profiles.price,	
      vehicle_type: this.props.vehicle_profiles.vehicle_type,	
      manufacturers: this.props.vehicle_profiles.manufacturers,	
      mpg: this.props.vehicle_profiles.mpg,	
      userid: this.props.vehicle_profiles.userid,
    }
    this.updateShownVehicleProfile = this.updateShownVehicleProfile.bind(this);
  }
  updateShownVehicleProfile(props){
    const {vehicle_profileid, title, price, vehicle_type, manufacturers, mpg} = this.state;
    const {updateVehicleProfileId, updateTitle, updatePrice, updateVehicleType, updateManufacturers, updateMpg} = this.props;

    updateVehicleProfileId(vehicle_profileid); 
    updateTitle(title); 
    updatePrice(price); 
    updateVehicleType(vehicle_type); 
    updateManufacturers(manufacturers); 
    updateMpg(mpg);
 }

    render(props){
        const {vehicle_profileid, title, price, vehicle_type, manufacturers}= this.props.vehicle_profiles;
    return(
        <div>

        <Link to={`/profilelist/${vehicle_profileid}`} ><button onclick={this.updateShownVehicleProfile}>{title}</button></Link>
        <div>Max Price:{price}</div>
        <div>Type: {vehicle_type}</div>
        <div>Make: {manufacturers}</div>
        {/* <ProfileVehicles vehicle_type={this.state.vehicle_type} manufacturers={this.state.manufacturers}/> */}
        </div>

    )
  }
}

function mapStateToProps(props){
  return {
    vehicle_type: props.vehicle_type,	
    manufacturers: props.manufacturers,	
  }
}

export default connect(mapStateToProps, {updateVehicleType, updateManufacturers})(Vehicle)