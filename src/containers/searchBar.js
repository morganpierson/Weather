import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.setState({ term: '' })
  }

  render() {
    return (
      <form className='input-group' onSubmit={ this.onFormSubmit }>
        <input 
          onChange={ this.onInputChange }
          placeholder='Get a five day weather forecast of your favorite cities'
          className='form-control'
          value={ this.state.term }
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar;