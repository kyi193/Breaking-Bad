import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';

import styled from 'styled-components';



const Styles = styled.div`
  .jumbo  {
    background-size: cover;
    color: #ccc;
    height: 30px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #0D3E10 !important;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;  
  }
`;
export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay">
        <Container>
          <h1>Welcome!</h1>
          <p>Learn about all your favorite Breaking Bad Characters Here!</p>
        </Container>
      </div>
    </Jumbo>
  </Styles>
)