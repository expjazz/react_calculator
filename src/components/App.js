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
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  handleClick(buttonName) {
    const { calculate } = calculateObj;
    const { obj } = this.state;
    const newObj = calculate(obj, buttonName);
    this.setState({
      obj: newObj,
    });
  }

  render() {
    const { obj } = this.state;
    return (
      <StyledCalculator id="App">
        <Display result={obj.total || obj.next || '0'} />
        <ButtonPannel handleClick={this.handleClick} />
      </StyledCalculator>
    );
  }
}
