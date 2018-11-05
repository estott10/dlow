import React from 'react';
import {Link} from 'react-router-dom';

export default function Car(props){
  
    return(
        <div>
         <Link to='/reviews'>{props.make}{props.model}</Link> 
        </div>
    )
  }

// function mapStateToProps(state){
//   return {
//     manufacturers: this.state.manufacturers,
//     model: this.state.model
//   }
// }

// export default connect(mapStateToProps, {updateModel})(Car);