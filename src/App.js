import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    fetch('https://www.breakingbadapi.com/api/characters/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }
  render() {

    const { isLoaded, items } = this.state
    
    if(!isLoaded) {
      return <div>Loading....</div>
    }
    return (
      <div className="App">
        <ul>
          {items.map(item => (
            <div key = {item.char_id}>
              Name: {item.name}
              <br/>
              Birthday: {item.birthday}
              <br/>
              <img className = "img" src = {item.img} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
