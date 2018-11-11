import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class ProfileVehicles extends Component{
  constructor(props){
    super(props)

    this.state = {
        vehiclesList: [],
        vehicle_profiles: [],
        vehicle_type: '', 
        manufacturers: '',
        profileid: this.props.match.params
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(props){
        const {profileid} = this.props.match.params;
        const {vehicle_profiles} = this.props;
        console.log(vehicle_profiles);
        let manufacturers= '';
        let vehicle_type = '';
           
        vehicle_profiles.map( function(obj, i){
          console.log(profileid);
          console.log(obj.vehicle_profileid);
           if(obj.vehicle_profileid === (parseInt(profileid, 10))){
             console.log(parseInt(profileid, 10));
              manufacturers= obj.manufacturers;
              vehicle_type = obj.vehicle_type;
            } else {
              console.log("no matches found");
            }
          } );
    
       axios.get(`/api/single_profile_list/${manufacturers}/${vehicle_type}`)
       .then(result => {   
       this.setState({
            vehiclesList: result.data.Results
          });
           console.log(result.data.Results);
         })
     }


    render(props){
        const {vehiclesList} = this.state;

    return(
        <div>
          Vehicles Matching Your Profile 
        
          {vehiclesList.map( (vehicle, i) => {
              console.log(vehiclesList);
              return <ul key= {i}> <Link to={`/reviews/${vehicle.Make_Name}/${vehicle.Model_Name}`}>{vehicle.Make_Name} {vehicle.Model_Name}</Link> </ul>
            })
          }
        </div>
    )
  }
}

function mapStateToProps(props){
  return {
    vehicle_profiles: props.vehicle_profiles
  }
}

export default connect(mapStateToProps)(ProfileVehicles);