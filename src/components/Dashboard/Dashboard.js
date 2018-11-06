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

    render(props){

    return(
        <div>

            Dashboard
      
          {this.props.vehicle_profiles.map( (vehicle, i) => {

              return <ul key= {i}>
              <Link to={`/profilelist/${vehicle.vehicle_profileid}`}>{vehicle.title}</Link>
              {vehicle.vehicle_type}
              {vehicle.price}
              {vehicle.manufacturers}</ul>
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