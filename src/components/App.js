import React from 'react';
import './App.scss';
import styled from 'styled-components';
import Display from './Display';
import ButtonPannel from './ButtonPannel';

const StyledCalculator = styled.div`
  width: 700px;
  margin: auto;
  display: "flex";
  flex-direction: "column";
  flex-wrap: "wrap";

`;

function App() {
  return (
    <StyledCalculator id="App">
      <Display />
      <ButtonPannel />
    </StyledCalculator>
  );
}

export default App;
