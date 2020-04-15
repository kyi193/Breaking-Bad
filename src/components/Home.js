import React, { Component } from 'react';
import axios from 'axios';
import * as data from '../data/characters.json';

import CharacterCard from "./CharacterCard";

const USE_MOCK_DATA = false;

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.searchQuery !== this.props.searchQuery) {
      this.fetchCharacters(this.props.searchQuery);
    }
    if(prevProps.visibility != this.props.visibility) {
      this.fetchCharacters();
    }
  }

  fetchCharacters(queryName='') {
    console.log("state: " + this.props.visibility)
    if(!this.props.visibility) {
      console.log("API fetched from: Characters.json")
      this.setState({
        characters: data.characters
      })

      return;
    }
    console.log("API fetched from: BreakingBadAPI")
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${queryName}`)
      .then((json) => {
        this.setState({
          characters: json.data
        })
      })
  }
  
  render() {
    return (
      <React.Fragment>
        {this.state.characters ? (
          <div className="row">
            {this.state.characters.map(character =>(
              <CharacterCard 
                key = {character.name}
                charId = {character.char_id}
                name = {character.name}
                url = {character.img}
                birthday = {character.birthday}
              />
            ))}
          </div>
        ) : (
            <h1>Loading Characters</h1>
          )}

      </React.Fragment>
    )
  }
}