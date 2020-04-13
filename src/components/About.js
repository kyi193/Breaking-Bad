import React, { Component } from 'react'
import ReactPlayer from "react-player"

export default class About extends Component {
  render() {
    return (

      <div id="aboutContainer">
        <div>
          <h1 id="aboutTitle">About</h1>
        </div>
        <div id="video">
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Xs6_vecSv2Y"
            />
          </div>
        </div>
        <div id="charInfo">
          <p id="aboutP">Breaking Bad follows protagonist Walter White (Bryan Cranston), a chemistry teacher who lives in New Mexico with his wife (Anna Gunn) and teenage son (RJ Mitte) who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>
        </div>
      </div>



    )
  }
}