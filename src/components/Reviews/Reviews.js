import React, {Component} from 'react';
import {connect} from 'react-redux';
import YTSearch from 'youtube-api-search';
import {updateVideos} from '../../ducks/reducer';
import Car from '../Car/Car';
import private_key from '../../dlowKey.json'

const API_KEY = private_key.private_key;

class Reviews extends Component{
  constructor(props){
    super(props)

    this.state = {
        videoList: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(props){
    const { make, model} = this.props.match.params;
    const searchTerm = make + " " + model + " Review";
    const {updateVideos} = this.props;
    const searchYT =(term)=>{
      YTSearch({ key: API_KEY, term}, videos =>{
        console.log(term);
        this.setState({
          videoList : videos
        })
        return updateVideos(videos);
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
    render(props){
      const {videoList} = this.state;
    return(
        <div>
            <h1>Featured Reviews</h1>
            {console.log(videoList)}
            {videoList.map( (video, i) => {
                
                return <ul className="reviewGrid" key= {i}>
                <div className="review">
                  <a className="thumnail" target="_blank" href={`https://www.youtube.com/watch?v=${video.id.videoId}`}><img alt='review' src={video.snippet.thumbnails.default.url}/>Watch Now</a> 
                  <Car title={video.snippet.title}  channel={video.snippet.channelTitle} description={video.snippet.description}/>
                  </div>
                  </ul>
                })
                  }
        </div>
    )
  }
}

function mapStateToProps(props){
  return {
    videoList: props.video_list
  }
}
export default connect(mapStateToProps, {updateVideos})(Reviews)

