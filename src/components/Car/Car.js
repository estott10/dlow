import React, {Component} from 'react';

export default class Car extends Component{
  constructor(props){
    super(props)

    this.state = {
     
    }
  }



    render(props){
        const {make, model} = this.props;
    return(
        <div>
          {make}
          {model}
        </div>
    )
  }
}

// function mapStateToProps(state){
//   return {
//     manufacturers: this.state.manufacturers,
//     model: this.state.model
//   }
// }

// export default connect(mapStateToProps, {updateModel})(Car);