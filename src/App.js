import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigationbar from './components/Navigationbar';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Jumbotron } from './components/Jumbotron';
import Character from "./components/Character";


import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      searchResult: '',
      searchQuery: '',
      on: false
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  // componentDidMount() {
  //   // fetch('https://www.breakingbadapi.com/api/characters/')
  //   //   .then(res => res.json())
  //   //   .then(json => {
  //   //     this.setState({
  //   //       isLoaded: true,
  //   //     })
  //   //   })
  // }

  submitSearch(event) {
    event.preventDefault();
    this.setState({
      searchQuery: this.state.searchResult
    })
  }

  //create updatesearch to set state
  updateSearch(event) {
    const inputSearch = event.target.value;
    this.setState({
      searchResult: inputSearch
    })
  }

  toggleVisibility() {
    this.setState({
      on: !this.state.on
    });
    console.log(this.state.on)
  }

  render() {
    return (
      <React.Fragment>
        {/* pass updateSearch function into navigation bar */}
        <Navigationbar updateSearch={this.updateSearch} submitSearch={this.submitSearch} toggleVisibility={this.toggleVisibility}/>
        <Jumbotron />
        <Router>
          <div className="App">
            <Switch>
              {/* pass search result into home */}
              <Route exact path="/" render={(props) => <Home searchQuery={this.state.searchQuery} visibility={this.state.on}/>} />
              <Route exact path="/character/:key" component={Character} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
          <div className="footer text-center py-3">Data derived from:
            <a href="https://www.breakingbadapi.com/"
              target="_blank"> breakingbadapi.com/</a>
          </div>

        </Router>

      </React.Fragment>
    );
  }
}

export default App;
