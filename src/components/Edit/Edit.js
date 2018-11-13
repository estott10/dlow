import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Edit extends Component{
  constructor(props){
    super(props)

    this.state = {
      title: '',	
      price: '',	
      vehicle_type:	'',
      manufacturers: '',	
      userid: this.props.userid,
      vehicle_profileid: this.props.match.params.profileid
  }
  this.editVehicleProfile = this.editVehicleProfile.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  editVehicleProfile(id){
    const {profileid} = this.props.match.params
    const updatedProfile = {
      title: this.state.title,	
      price: this.state.price,	
      vehicle_type:	this.state.vehicle_type,
      manufacturers: this.state.manufacturers,		
      userid: this.state.userid,
      vehicle_profileid: profileid
    }

    console.log(updatedProfile);
    axios.put('/api/editprofile', updatedProfile)
      .then( res => {
        alert('Profile successfully updated');
        this.props.history.push('/dashboard');
      });
  }
    render(){
      const {profileid} = this.props.match.params
    return(
        <div className="edit">
            <h1>Update Your Vehicle Profile</h1>
            <div>Wheel Style Profile Name:</div>
            <input name='title' onChange={ (e) => this.handleChange(e)}></input>
            <div>Maximum Price:</div>
            <input name='price' onChange={ (e) => this.handleChange(e)}></input>
            <div>Vehicle Type:</div> 
            <input name='vehicle_type' onChange={ (e) => this.handleChange(e)}></input>
            {/* Make Drop down? <input name='password' onChange={ (e) => this.handleChange(e)}></input> */}
            <div>Preferred Manufacturer:</div>
            <input name='manufacturers' onChange={ (e) => this.handleChange(e)}></input>
        <button onClick= {()=>{this.editVehicleProfile(profileid)}}>Update Vehicle Profile</button>
        </div>
    )
  }
}

export default connect(null)(Edit);