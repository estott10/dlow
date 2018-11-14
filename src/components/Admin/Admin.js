import React, {Component} from 'react';
import axios from 'axios';


export default class Admin extends Component{
  constructor(){
    super()

    this.state = {
        userList: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
        // const {profileid} = this.props.match.params
    
       axios.get('/api/vehicletype')
       .then(result => {   
       this.setState({
            userList: result.data
          });
           console.log(this.state.userList);
         })
     }


    render(){
        const {userList} = this.state;

    return(
        <div>
          <h1>Admin Access: Users With Profile Matching Vehicle Type</h1> 
          <div>
          {userList.map( (user, i) => {
              console.log(userList);
              return <ul key= {i}> 
              <div>Username: {user.username}</div> 
              <div>email: {user.email}</div> 
              <div>Vehicle Type: {user.vehicle_type}</div> 
              <div>Make: {user.manufacturers}</div> 
              </ul>
            })
          }
          </div>
        </div>
    )
  }
}


