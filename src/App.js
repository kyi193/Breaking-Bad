import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import Navigationbar from './components/Navigationbar';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Jumbotron } from './components/Jumbotron';
import Character from "./components/Character";
import backgroundImage from './assets/background.jpg'

import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      searchResult: '',
      searchQuery: ''

    }
    this.updateSearch = this.updateSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  componentDidMount() {
    // fetch('https://www.breakingbadapi.com/api/characters/')
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       isLoaded: true,
    //     })
    //   })
    console.log("RERENDER APP")
  }

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

  render() {

    // const { isLoaded } = this.state

    // if (!isLoaded) {
    //   return <div>Loading....</div>
    // }
    return (
      <React.Fragment>
        {/* pass updateSearch function into navigation bar */}
        <Navigationbar updateSearch={this.updateSearch} submitSearch={this.submitSearch} />
        <Jumbotron />
        <Router>
          <div className="App">
            <Switch>
              {/* pass search result into home */}
              <Route exact path="/" render={(props) => <Home searchQuery={this.state.searchQuery} />} />
              <Route exact path="/character/:key" component={Character} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
          <div class="footer text-center py-3">Data derived from:
           <a href="https://www.breakingbadapi.com/"
              target="_blank"> breakingbadapi.com/</a>
          </div>
        </Router>

      </React.Fragment>
    );
  }
}

export default App;
