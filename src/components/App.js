import React from 'react';
import './App.scss';
import styled from 'styled-components';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import calculateObj from '../logic/calculate';

const StyledCalculator = styled.div`
  width: 700px;
  margin: auto;
  display: "flex";
  flex-direction: "column";
  flex-wrap: "wrap";

`;

function App() {
  // eslint-disable-next-line no-unused-vars
  const { calculate } = calculateObj;

  return (
    <StyledCalculator id="App">
      <Display />
      <ButtonPannel />
    </StyledCalculator>
  );
}

export default App;
