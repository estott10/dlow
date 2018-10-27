import React, {Component} from 'react';

export default class Options extends Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }
    render(props){

    return(
        <div>

            Options
            <h2>{this.props.username}</h2>

        </div>

    )
  }

}