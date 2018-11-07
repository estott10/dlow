import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA-SpQMyMvSlUs4xLi4OxJzojvCm3EGZbs';

class Reviews extends Component{
  constructor(){
    super()

    this.state = {

    }
    
  }



  componentDidMount(){
   
    const { make, model} = this.props.match.params;
    const searchTerm = make + " " + model;

    function searchYT(searchTerm){
      YTSearch({ key: API_KEY, searchTerm}, videos =>{
        console.log(videos);
      })
    }

    searchYT(searchTerm);

    // console.log(make);
    // console.log(model);
    // axios.get('/api/reviews/', 
    // {'maxResults': '25',
    // 'part': 'snippet',
    // 'q': searchTerm,
    // 'type': 'video'})
    //    .then(result => {   
    //        console.log(result);
    //      })
  }
    render(){

    return(
        <div>
            {console.log(this.props.match.params)}
            Reviews

        </div>

    )
  }

}

export default connect(null)(Reviews)

