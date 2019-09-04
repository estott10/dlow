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
      userid: this.props.userid
  }
  this.editVehicleProfile = this.editVehicleProfile.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  editVehicleProfile(props){
    const {vehicle_profileid} = this.props.match.params;
    const {userid} = this.props;
    const updatedProfile = {
      title: this.state.title,	
      price: (parseInt(this.state.price, 10)),	
      vehicle_type:	this.state.vehicle_type,
      manufacturers: this.state.manufacturers,		
      userid: userid,
      vehicle_profileid: (parseInt(vehicle_profileid, 10))
    }

    console.log(updatedProfile);
    axios.put('/api/editprofile', updatedProfile)
      .then( res => {
        alert('Profile successfully updated');
        this.props.history.push('/dashboard');
      });
  }
    render(props){
      const {vehicle_profileid} = this.props.match.params;
    return(
        <div style = {{display: "flex", flexDirection:"row"}}>
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
          <button onClick= {()=>{this.editVehicleProfile(vehicle_profileid)}}>Update Vehicle Profile</button>
          </div>
          <div id = "edit-image">
          </div>
        </div>
    )
  }
}

function mapStateToProps(props){
  return {
    userid: props.userid,
  }
}

export default connect(mapStateToProps)(Edit);