import React, {Component} from 'react';
import axios from 'axios';
import Car from '../Car/Car';

export default class ProfileVehicles extends Component{
  constructor(){
    super()

    this.state = {
        vehiclesList: []
    }
  }

  componentDidMount(props){
        const {vehicle_type, manufacturers} = this.props;
       axios.get(`/api/single_profile_list/${manufacturers}/${vehicle_type}`)
         .then(result => {
           console.log(result);
            
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
    render(props){
        const {manufacturers}= this.props;
    return(
        <div>
          {this.state.vehiclesList.map( (vehicle, i) => {
              return <ul key= {i}><Car /> </ul>
          })
          
          }
       
        </div>

    )
  }

}