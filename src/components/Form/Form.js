import React, {Component} from 'react';

export default class Form extends Component{
  constructor(){
    super()

    this.state = {
      vehicle_profileid: '',
      title: '',	
      price: '',	
      vehicle_type:	'',
      manufacturers: '',	
      mpg: '',	
      userid: ''
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

            <h1>Build Your Vehicle Profile</h1>
            <div>
            Wheel Style Profile Name:
            <input name='title' onChange={ (e) => this.handleChange(e)}></input>
            Maximum Price:
            <input name='price' onChange={ (e) => this.handleChange(e)}></input>
            Vehicle Type: 
            {/* Make Drop down? <input name='password' onChange={ (e) => this.handleChange(e)}></input> */}
            Preferred Manufacturer:
            <input name='manufacturers' onChange={ (e) => this.handleChange(e)}></input>
            <button onClick={this.addCarProfile}>Show Me My Wheels!</button>
            </div>

        </div>

    )
  }

}