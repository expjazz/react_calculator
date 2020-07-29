import React from 'react';
import './App.scss';
import styled from 'styled-components';
import Display from './Display';
import ButtonPannel from './ButtonPannel';

const StyledCalculator = styled.div`
  width: 700px;
  margin: auto;
`;

function App() {
  return (
    <StyledCalculator>
      <Display />
      <ButtonPannel />
    </StyledCalculator>
  );
}

export default App;
