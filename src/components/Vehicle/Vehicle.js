import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProfileVehicles from '../ProfileVehicles/ProfileVehicles';
// import {connect} from 'react-redux';
// import {updateVehicleProfileId, updateTitle, updatePrice, updateVehicleType, updateManufacturers, updateMpg} from '../../ducks/reducer';

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
    // this.updateShownVehicleProfile = this.updateShownVehicleProfile.bind(this);
  }
//   updateShownVehicleProfile(props){
//     const {vehicle_profileid, title, price, vehicle_type, manufacturers, mpg, profileVehicles} = this.state;
//     const {updateVehicleProfileId, updateTitle, updatePrice, updateVehicleType, updateManufacturers, updateMpg} = this.props;

//     updateVehicleProfileId(vehicle_profileid); 
//     updateTitle(title); 
//     updatePrice(price); 
//     updateVehicleType(vehicle_type); 
//     updateManufacturers(manufacturers); 
//     updateMpg(mpg);
//  }

    render(props){
        const {vehicle_profileid, title, price, vehicle_type, manufacturers}= this.state;
    return(
        <div>

        <Link to={`/profilelist/${vehicle_profileid}`} >{title}</Link>
        <div>Max Price:{price}</div>
        <div>Type: {vehicle_type}</div>
        <div>Make: {manufacturers}</div>
        <ProfileVehicles vehicle_type={this.state.vehicle_type} manufacturers={this.state.manufacturers}/>
        </div>

    )
  }
}

// function mapStateToProps(props){
//   return {
//     vehicle_profileid: props.vehicle_profileid,	
//     title: props.title,	
//     price: props.price,	
//     vehicle_type: props.vehicle_type,	
//     manufacturers: props.manufacturers,	
//     mpg: props.mpg,	
//     userid: props.userid
//   }
// }

// export default connect(mapStateToProps, {updateVehicleProfileId, updateTitle, updatePrice, updateVehicleType, updateManufacturers, updateMpg})(Vehicle)