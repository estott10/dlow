import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class ProfileVehicles2 extends Component{
    constructor(props){
        super(props)

        this.state= {
            vehiclesList: [],
            vehicle_profiles: [],
            vehicle_type: '', 
            manufacturers: '',
            profileid: this.props.match.params
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(props){
        axios.get(`/api/single_profile_list/${manufacturers}/${vehicle_type}`)
             .then(result => {
                 this.setState({
                     vehiclesList: result.data.Results
                 })
             })
    }


    render(props){

      return(
        <div>
            <h1>Vehicles Matching Your Profile</h1> 
        <div className="carGrid">
        {vehiclesList.map( (vehicle, i) => {
            console.log(vehiclesList);
            return <ul className="car" key= {i}> <Link to={`/reviews/${vehicle.Make_Name}/${vehicle.Model_Name}`}>{vehicle.Make_Name} {vehicle.Model_Name}</Link> </ul>
        })
        }
        </div>

            </div>

        )
    }
}