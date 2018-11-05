import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class Form extends Component{
  constructor(props){
    super(props)

    this.state = {
      title: '',	
      price: '',	
      vehicle_type:	'',
      manufacturers: '',	
      mpg: '',	
      userid: this.props.userid
    }
    this.handleChange = this.handleChange.bind(this);
    this.addCarProfile = this.addCarProfile.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  addCarProfile(props){
    const newProfile = {
      title: this.state.title,	
      price: this.state.price,	
      vehicle_type:	this.state.vehicle_type,
      manufacturers: this.state.manufacturers,	
      mpg: this.state.mpg,	
      userid: this.props.userid
    }
    axios.post('/api/newprofile', newProfile)
      .then( res => {
        alert('Car successfully added');
      });
  }

  
    render(){

    return(
        <div>

            <h1>Build Your Vehicle Profile</h1>
            <div>
            Wheel Style Profile Name:
            <input name='title' onChange={ (e) => this.handleChange(e)}></input>
            Maximum Price:
            <input name='price' onChange={ (e) => this.handleChange(e)}></input>
            Vehicle Type: 
            <input name='vehicle_type' onChange={ (e) => this.handleChange(e)}></input>
            {/* Make Drop down? <input name='password' onChange={ (e) => this.handleChange(e)}></input> */}
            Preferred Manufacturer:
            <input name='manufacturers' onChange={ (e) => this.handleChange(e)}></input>
            <Link to='/dashboard'><button onClick={this.addCarProfile}>Show Me My Wheels!</button></Link>
            </div>

        </div>

    )
  }

}

function mapStateToProps(props){
  return {userid: props.userid}
}

export default connect(mapStateToProps)(Form);