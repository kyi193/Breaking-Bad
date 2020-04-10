import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



import Navigationbar from './components/Navigationbar';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Jumbotron } from './components/Jumbotron';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      searchResult: "Placeholder"
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

  componentDidMount() {
    fetch('https://www.breakingbadapi.com/api/characters/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
        })
      })
  }

  //create updatesearch to set state
  updateSearch(event) {
    this.setState({
      searchResult: event.target.value
    });
  }


  render() {

    const { isLoaded } = this.state

    if (!isLoaded) {
      return <div>Loading....</div>
    }
    return (
      <React.Fragment>
        {/* pass updateSearch function into navigation bar */}
        <Navigationbar updateSearch={this.updateSearch} />
        <Jumbotron />
        <Router>
          <div className="App">
            <Switch>
              {/* pass search result into home */}
              <Route exact path="/"
                render={(props) =>
                  <Home
                    {...props}
                    searchResult={this.state.searchResult}
                  />}
              />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
