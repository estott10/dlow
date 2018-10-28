import React, {Component} from 'react';
import Vehicle from '../Vehicle/Vehicle';
import axios from 'axios';

export default class Dashboard extends Component{
  constructor(){
    super()

    this.state = {
      userid: 2,
      vehicle_profiles: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(){
    axios.get(`/api/profiles/${this.state.userid}`)
      .then(result => {
        console.log(result);
          this.setState({
            vehicle_profiles: result.data
          })
      })
  }

    render(){
     
    return(
        <div>

            Dashboard

          {this.state.vehicle_profiles.map( (vehicle, i) => {
              return <ul key= {i}><Vehicle vehicle_profileid={vehicle.vehicle_profileid}	title={vehicle.title}	price={vehicle.price}	vehicle_type={vehicle.vehicle_type}	manufacturers={vehicle.manufacturers}	mpg={vehicle.mpg}	userid={vehicle.userid}/> </ul>
          })
          
          }
        </div>

    )
  }

}