import React, { Component } from 'react';
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

export default class App extends Component {

  state = {
    obj: {
    total: null,
    next: null,
    operation: null}
  }

  handleClick = (buttonName) =>  {
    const { calculate } = calculateObj
    const newObj = calculate(this.state.obj, buttonName)
    this.setState({
      obj: newObj
    })

  }

  render() {
    return (
      <StyledCalculator id="App">
        <Display result={this.state.obj.total || this.state.obj.next || '0'}/>
        <ButtonPannel handleClick={this.handleClick} />
    </StyledCalculator>
    )
  }
}




