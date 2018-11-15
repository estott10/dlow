import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateVehicleProfiles} from '../../ducks/reducer';
import {Link} from 'react-router-dom';



class Dashboard extends Component{
  constructor(props){
    super(props)

    this.state = {
      userid: this.props.userid,
      vehicle_profiles: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(props){
     const {userid, updateVehicleProfiles} = this.props;
    axios.get(`/api/profiles/${userid}`)
      .then(result => {
          this.setState({
            vehicle_profiles: result.data
          });
          updateVehicleProfiles(result.data);
  });
}

removeVehicleProfile(profileId){
  axios.delete(`/api/vehicles/${profileId}`)
    .then(result => {
        this.componentDidMount();
    });
}


    render(props){

    return(
        <div className="dashboard">

            <h1>Stored Vehicle Profiles</h1>
      
          {this.props.vehicle_profiles.map( (vehicle, i) => {

              return <ul className="profileGrid" key= {i}>
              <div className="vehicleProfile">
              <Link to={`/profilelist/${vehicle.vehicle_profileid}`} style={{ textDecoration: 'none', color: 'blue'}}>{vehicle.title} List</Link>
              <div>Type: {vehicle.vehicle_type}</div>
              <div>Price: ${vehicle.price}</div>
              <div>Make: {vehicle.manufacturers}</div>
              </div>
              <div>
              <Link to ={`/edit/${vehicle.vehicle_profileid}`} style={{ textDecoration: 'none', color: 'white'}}><button>Edit</button></Link>
              <button onClick= {()=>{this.removeVehicleProfile(vehicle.vehicle_profileid)}}>Delete</button>
              </div>
              </ul>
            })
          }
        </div>

    )
  }
}

function mapStateToProps(props){
  return {
    userid: props.userid,
    vehicle_profiles: props.vehicle_profiles
  }
}

export default connect(mapStateToProps, {updateVehicleProfiles})(Dashboard);