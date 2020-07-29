import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledButtomPanel = styled.div`
  .row {
    height: 100px;
    display: flex;
    flex-grow: 1;
  }
  
  `;
export default function ButtonPannel() {
  return (
    <StyledButtomPanel>
      <div className="row rowOne">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" />
      </div>
      <div className="row rowTwo">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="X" />
      </div>
      <div className="row rowThree">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </div>
      <div className="row rowFour">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </div>
      <div className="row rowFive">
        <Button name="0" wide />
        <Button name="." />
        <Button name="=" />
      </div>
    </StyledButtomPanel>
  );
}
