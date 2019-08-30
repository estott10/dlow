import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUsername, updateEmail, updateAddress, updatePassword, updateProfilePic, updateUserId} from '../../ducks/reducer';
import {Link} from 'react-router-dom';
// import { cpus } from 'os';

class Auth extends Component{
  constructor(props){
    super(props)

    this.state = {
      userid: '',
      username: '',
      email: '',
      address: '',
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
  
  loginUser(props){
    // e.preventDefault();
    const existingUser = {
      email: this.state.email,
      password: this.state.password
    }
    const {updateUsername, updateEmail, updateAddress, updatePassword, updateProfilePic, updateUserId} = this.props;
    axios.post('/api/login', existingUser)
      .then((response)=>{
        if(response.data === []){
          this.props.history.push('/register')
          alert(`User does not exist. Please Register.`);
        }else{
          console.log(response.data[0]);
          console.log(response.data[0].userid);
          this.props.history.push('/options');
          updateUserId(response.data[0].userid);
          updateUsername(response.data[0].username);
          updateEmail(response.data[0].email);
          updateAddress(response.data[0].address);
          updatePassword(response.data[0].password);
          updateProfilePic(response.data[0].profile_pic);
        }
      })
  }
    render(){
     
    return(
        <div>
        <div className="auth">
          <div className="login">
            <div className="signIn">=Sign In=</div>
            <div>Email: </div>
            <input name='email' onChange={ (e) => this.handleChange(e)}></input>
            <div>Password:</div> 
            <input name='password' onChange={ (e) => this.handleChange(e)}></input>
            <button style= {{backgroundColor: "white", color: "black", width: "40%", borderRadius:"2px"}} onClick={this.loginUser}>Login</button>
            <div className="register-guest" style = {{display: "flex", flexDirection: "row"}}>
              {/* <button><Link id="register-guest-bttn" style= {{textDecoration: "none"}} to='/register'>Register</Link></button>  */}
              {/* <button style = {{backgroundColor: "white"}}><Link id="register-guest-bttn" style= {{textDecoration: "none", color:"black"}} to='/dashboard'>Continue As Guest</Link></button>  */}
            </div>
          </div>
          </div>
          <div className = "auth-btn-div">
            <button id= "auth-options1" ><Link to="/register" id= "auth-options">Register</Link></button>
            <button id= "auth-options2" ><Link to="/newprofile" id= "auth-options">Continue As Guest</Link></button>
          </div>
        </div>
    )
  }
}
export default connect(null, {updateUsername, updateEmail, updateAddress, updatePassword, updateProfilePic, updateUserId})(Auth);


