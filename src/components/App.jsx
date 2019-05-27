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
  componentDidMount(){
    this.onQuerySubmit('Dog');
  }
  onQuerySubmit = query => {
    console.log(query);
    youtube.get('/search',{
      params: {
        q: query
      }
    })
    .then(response => this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]

    }))

  };

  onVideoSelect = (video) =>{
    this.setState({selectedVideo: video})
  }
  render(){
    return(
      <div className="ui container">
        <h1>Hello Videos</h1>
        <SearchBar onSearchSubmit = {this.onQuerySubmit}/>
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetails video={this.state.selectedVideo}/>
              </div>
              <div className="five wide column">
                <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos}/>
              </div>
            </div>
          </div>

      </div>
      )
  }
}

export default App
