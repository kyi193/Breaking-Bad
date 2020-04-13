import React, { Component } from 'react';
import axios from 'axios';

import styled from "styled-components";

const Sprite = styled.img`
  width: 20em;
  height: 25em;
  display: none;
`;


export default class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      birthday: '',
      imageUrl: '',
      occupations: '',
      status: '',
      nickName: '',
      portrayed: '',
      seasonsAppeared: '',
      imageLoading1: true,
      tooManyRequests1: false,
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.searchQuery !== this.props.searchQuery) {
  //     this.fetchCharacters(this.props.searchQuery);
  //   }
  // }

  async fetchCharacters() {
    const charIndex = this.props.match.params.key;
    const characterRes = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${charIndex}`)

    const name = characterRes.data[0].name;
    const birthday = characterRes.data[0].birthday;
    const occupationList = characterRes.data[0].occupation;
    const imageUrl = characterRes.data[0].img;
    const status = characterRes.data[0].status;
    const nickName = characterRes.data[0].nickname;
    const seasons = characterRes.data[0].appearance;
    const portrayed = characterRes.data[0].portrayed;

    let seasonsAppeared = seasons[0];
    if (seasons.length > 1) {
      for (let i = 1; i < seasons.length; i++) {
        seasonsAppeared += ", " + seasons[i]
      }
    }

    let occupations = occupationList[0];
    if (occupationList.length > 1) {
      for (let i = 1; i < occupationList.length; i++) {
        occupations += ", " + occupationList[i]
      }
    }

    this.setState({
      name,
      birthday,
      imageUrl,
      occupations,
      status,
      nickName,
      seasonsAppeared,
      portrayed,
    })
  }




  render() {
    return (
      <div id="container">
        <div id="left">
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            onLoad={() => this.setState({ imageLoading1: false })}
            onError={() => this.setState({ tooManyRequests1: true })}
            src={this.state.imageUrl}
            style={
              this.state.tooManyRequests ? { display: "none" } :
                this.state.imageLoading ? null : { display: "block" }
            }
          />
        </div>
        <div id="charInfo">
          <div>
            Name: {this.state.name}
            <br />
          Birthday: {this.state.birthday}
            <br />
          Occupation(s): {this.state.occupations}
            <br />
          Status: {this.state.status}
            <br />
          Nick Name: {this.state.nickName}
            <br />
          Seasons Appeared: {this.state.seasonsAppeared}
            <br />
          Portrayed By: {this.state.portrayed}
            <br />
          </div>
        </div>
      </div>

    )
  }
}