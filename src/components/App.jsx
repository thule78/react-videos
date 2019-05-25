import React, {Component} from 'react';

import SearchBar from './SearchBar'

class App extends Component {
  render(){
    return(
      <div className="ui container">
        <h1>Hello Videos</h1>
        <SearchBar />
      </div>
      )
  }
}

export default App
