import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUsername, updateEmail, updateAddress, updatePassword, updateProfilePic, updateUserId} from '../../ducks/reducer';
import {Link} from 'react-router-dom';

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
            <div>Sign In</div>
            <div>Email: </div>
            <input name='email' onChange={ (e) => this.handleChange(e)}></input>
            <div>Password:</div> 
            <input name='password' onChange={ (e) => this.handleChange(e)}></input>
            <button onClick={this.loginUser}>Login</button>
           <div><Link to='/register'>New Around Here?</Link></div> 
        </div>

    )
  }
}
export default connect(null, {updateUsername, updateEmail, updateAddress, updatePassword, updateProfilePic, updateUserId})(Auth);


