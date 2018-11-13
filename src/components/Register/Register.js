import React, {Component} from 'react';
import axios from 'axios';
import { uploadFile } from 'react-s3';
 
const config = {
    bucketName: 'dlowstorage',
    dirName: 'photos',
    region: 'us-west-1',
    accessKeyId: 'AKIAIJYT3FJG73MGIURQ',
    secretAccessKey: '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',
}


export default class Register extends Component{
  constructor(){
    super()

    this.state = {
      username: '',
      email: '',
      password: '',
      address: '',
      profile_pic: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.storeProfilePic = this.storeProfilePic.bind(this);
  }

  handleChange= (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  storeProfilePic = (e) => {
    this.setState({
      profile_pic: e.target.files[0]
    })
    console.log(e.target.files[0])
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
      uploadFile(this.state.profile_pic, config)
      .then(data => console.log(data))
      .catch(err => console.error(err))
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
            Profile Image:
            <input type="file" onChange={this.storeProfilePic}></input>
            
            <button onClick={this.registerUser}>Register</button>
            </div>
        </div>

    )
  }
}

// export default connect(null, {updateUsername, updateEmail, updateAddress, updatePassword, updateProfilePic, updateUserId})(Register);
