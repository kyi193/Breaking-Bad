import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import Navigationbar from './components/Navigationbar';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

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

    if (!isLoaded) {
      return <div>Loading....</div>
    }
    return (
      <React.Fragment>
        <Navigationbar />
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path ="/about" component={ About } />
              <Route path ="/contact" component={ Contact } />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
