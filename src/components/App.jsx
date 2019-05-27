import React, {Component} from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends Component {
  state={
    videos: [],
    selectedVideo: null
  };
  onQuerySubmit = query => {
    console.log(query);
    youtube.get('/search',{
      params: {
        q: query
      }
    })
    .then(response => this.setState({videos: response.data.items}))

  };

  onVideoSelect = (video) =>{
    this.setState({selectedVideo: video})
  }
  render(){
    return(
      <div className="ui container">
        <h1>Hello Videos</h1>
        <SearchBar onSearchSubmit = {this.onQuerySubmit}/>
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos}/>
      </div>
      )
  }
}

export default App
