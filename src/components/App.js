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
  const { calculate } = calculateObj;
  console.log(calculate({
    next: '3',
    total: '10',
    operation: '+',
  }, '='));
  return (
    <StyledCalculator id="App">
      <Display />
      <ButtonPannel />
    </StyledCalculator>
  );
}

export default App;
