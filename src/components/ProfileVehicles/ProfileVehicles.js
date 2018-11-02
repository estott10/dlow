import React, {Component} from 'react';
import axios from 'axios';
import Car from '../Car/Car';
import {Link} from 'react-router-dom'

export default class ProfileVehicles extends Component{
  constructor(props){
    super(props)

    this.state = {
        vehiclesList: []
    }
  }

  componentDidMount(props){
        const {vehicle_type, manufacturers} = this.props;
  
       axios.get(`/api/single_profile_list/${manufacturers}/${vehicle_type}`)
         .then(result => {
          this.setState({
            vehiclesList: result.data.Results
          }) 
         })
     }
//       const {manufacturers, vehicle_type} = this.props;
//       axios.get('/api/single_profile_list/:make/:vehicle_type', {manufacturers, vehicle_type})
//         .then(result => {
//             console.log(result);
//             this.setState({
//                 vehiclesList: result
//             })
//         })
//   }
    render(){

    return(
        <div>
          {this.state.vehiclesList.map( (vehicle, i) => {
              console.log(this.state.vehiclesList);
              return <ul key= {i}> <Link to='/reviews'><Car make={vehicle.Make_Name} model={vehicle.Model_Name}/></Link> </ul>
          })
          }
        </div>

    )
  }

}