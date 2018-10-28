import React, {Component} from 'react';
import axios from 'axios';

export default class Profile_Vehicles extends Component{
  constructor(){
    super()

    this.state = {
        vehiclesList: []
    }
  }

  componentDidMount(){
      const {manufacturers, vehicle_type} = this.props;
      axios.get('/api/single_profile_list/:make/:vehicle_type', {manufacturers, vehicle_type})
        .then(result => {
            console.log(result);
            this.setState({
                vehiclesList: result
            })
        })
  }
    render(props){
        const {manufacturers}= this.props;
    return(
        <div>
        <div>Make: {manufacturers}</div>
       
        </div>

    )
  }

}