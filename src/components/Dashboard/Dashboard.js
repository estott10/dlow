import React, {Component} from 'react';
import Vehicle from '../Vehicle/Vehicle';
import axios from 'axios';
import {connect} from 'react-redux';


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
     const {userid} = this.props;
    axios.get(`/api/profiles/${userid}`)
      .then(result => {
          this.setState({
            vehicle_profiles: result.data
          });
        //   updateShownVehicleProfile(props){
        //     const {updateVehicleProfileId, updateTitle, updatePrice, updateVehicleType, updateManufacturers, updateMpg} = this.props;
        
        //     updateVehicleProfileId(vehicle_profileid); 
        //     updateTitle(title); 
        //     updatePrice(price); 
        //     updateVehicleType(vehicle_type); 
        //     updateManufacturers(manufacturers); 
        //     updateMpg(mpg);
        //  }
      })
  }

    render(){
     
    return(
        <div>

            Dashboard
      
          {this.state.vehicle_profiles.map( (vehicle, i) => {
               console.log(this.state.vehicle_profiles);
              return <ul key= {i}><Vehicle vehicle_profileid={vehicle.vehicle_profileid}	title={vehicle.title}	price={vehicle.price}	vehicle_type={vehicle.vehicle_type}	manufacturers={vehicle.manufacturers}	mpg={vehicle.mpg}	userid={vehicle.userid}/> </ul>
          })
          
          }
        </div>

    )
  }
}

function mapStateToProps(props){
  return {userid: props.userid}
}

export default connect(mapStateToProps)(Dashboard);