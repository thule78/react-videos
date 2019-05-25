import React, {Component} from 'react';

class SearchBar extends Component {
  state = {
    query: ""
  }

  handleChange = (event) => {
    this.setState({query: event.target.value});
  }

  handleSubmit = (event)=> {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.query);
  }
  render(){
    return(
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label> Search for Videos</label>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
              />
          </div>
        </form>
      </div>
      )
  }
}

export default SearchBar
