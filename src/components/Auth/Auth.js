import React, {Component} from 'react';
import axios from 'axios';
import Options from '../Options/Options'; 

export default class Auth extends Component{
  constructor(){
    super()

    this.state = {
      userid: '',
      username: '',
      email: '',
      password: '',
      profile_pic: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  loginUser(e){
    e.preventDefault();
    const existingUser = {
      email: this.state.userid,
      password: this.state.password
    }
    axios.post('/api/login', existingUser)
      .then((response)=>{
        console.log(response.data);
        if(response.data.isSuccessful){
          this.props.history.push('/options');
          // this.setState({
          //   userid: response.data.userid,
          //   username: response.data.username,
          //   email: response.data.email,
          //   password: response.data.password,
          //   profile_pic: response.data.profile_pic
          // })
        }else{
          this.props.history.push('/register')
          alert(`User does not exist. Please Register.`);
        }
      })
  }
    render(){
     const {username} = this.state;
    return(
        <div>
            <div>Sign In</div>
            <div>Email: </div>
            <input name='email' onChange={ (e) => this.handleChange(e)}></input>
            <div>Password:</div> 
            <input name='password' onChange={ (e) => this.handleChange(e)}></input>
            <button onClick={this.loginUser}>Login</button>
        </div>

    )
  }

}