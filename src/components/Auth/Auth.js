import React, {Component} from 'react';

export default class Auth extends Component{
  constructor(){
    super()

    this.state = {
      userid: '',
      username: '',
      password: '',
      profile_pic: ''
    }
    this.handleChange.bind = this.handleChange.bind(this);
    // this.loginUser.bind = this.loginUser.bind(this);
  }
  
  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  // loginUser(){
  //   //axios 
  // }
    render(){

    return(
        <div>
            Auth

            <input name='username' onChange={ (e) => this.handleChange(e)}></input>
            <input name='password' onChange={ (e) => this.handleChange(e)}></input>
            <button onClick={this.loginUser}>Login</button>
        </div>

    )
  }

}