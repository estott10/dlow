import React, {Component} from 'react';

export default class Register extends Component{
  constructor(){
    super()

    this.state = {
      userid: '',
      username: '',
      email: '',
      password: '',
      address: '',
      profile_pic: ''
    }
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
    render(){

    return(
        <div>

            Register
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