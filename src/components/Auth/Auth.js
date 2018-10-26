import React, {Component} from 'react';

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
    this.handleChange.bind = this.handleChange.bind(this);
    this.loginUser.bind = this.loginUser.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  loginUser(e){
    e.preventDefault();
    axios.post('/api/login', this.state)
      .then((response)=>{
        if(response.data.isSuccesful){
          this.props.history.push('/')
        }else{
          this.props.history.push('/register')
          alert(`User does not exist. Please Register.`);
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
        </div>

    )
  }

}