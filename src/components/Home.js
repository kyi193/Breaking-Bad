import React, { Component } from 'react';
import axios from 'axios';

import CharacterCard from "./CharacterCard";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      characters: []
    };
  }

  async componentDidMount() {
    const response = await fetch('https://www.breakingbadapi.com/api/characters');
    const json = await response.json();
    this.setState({
      characters: json
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.characters ? (
          <div className="row">
            {this.state.characters.map(character => (
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