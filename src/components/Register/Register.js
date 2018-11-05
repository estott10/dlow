import React, {Component} from 'react';
import axios from 'axios';


export default class Register extends Component{
  constructor(){
    super()

    this.state = {
      username: '',
      email: '',
      password: '',
      address: '',
      profile_pic: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  registerUser(){
  const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      profile_pic: this.state.profile_pic
  }
 
  axios.post('/api/register', newUser)
    .then((response)=>{
        this.props.history.push('/');
    })
}
    render(){

    return(
        <div>

            <h1>Register</h1>
            <div>
            Username:
            <input name='username' onChange={ (e) => this.handleChange(e)}></input>
            Email:
            <input name='email' onChange={ (e) => this.handleChange(e)}></input>
            Password:
            <input name='password' onChange={ (e) => this.handleChange(e)}></input>
            Address:
            <input name='address' onChange={ (e) => this.handleChange(e)}></input>
            Profile URL:
            <input name='profile_pic' onChange={ (e) => this.handleChange(e)}></input>
            <button onClick={this.registerUser}>Register</button>
            </div>
        </div>

    )
  }
}

// export default connect(null, {updateUsername, updateEmail, updateAddress, updatePassword, updateProfilePic, updateUserId})(Register);
