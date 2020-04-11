import React, { Component } from 'react';
import axios from 'axios';
import * as data from '../data/characters.json';

import CharacterCard from "./CharacterCard";

const DEFAULT_QUERY = '';
const USE_MOCK_DATA = true;

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
  }

  fetchCharacters(queryName='') {
    if(USE_MOCK_DATA) {
      
      this.setState({
        characters: data.characters
      })

      return;
    }

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
                key = {character.char_id}
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