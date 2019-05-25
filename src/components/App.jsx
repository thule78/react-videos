import React, {Component} from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends Component {
  state={
    videos: []
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
  render(){
    return(
      <div className="ui container">
        <h1>Hello Videos</h1>
        <SearchBar onSearchSubmit = {this.onQuerySubmit}/>
        {this.state.videos.length} videos
      </div>
      )
  }
}

export default App
