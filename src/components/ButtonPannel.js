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
        <Button name="AC" color="#e0e0e0" />
        <Button name="+/-" color="#e0e0e0" />
        <Button name="%" color="#e0e0e0" />
        <Button name="÷" />
      </div>
      <div className="row rowTwo">
        <Button name="7" color="#e0e0e0" />
        <Button name="8" color="#e0e0e0" />
        <Button name="9" color="#e0e0e0" />
        <Button name="X" />
      </div>
      <div className="row rowThree">
        <Button name="4" color="#e0e0e0" />
        <Button name="5" color="#e0e0e0" />
        <Button name="6" color="#e0e0e0" />
        <Button name="-" />
      </div>
      <div className="row rowFour">
        <Button name="1" color="#e0e0e0" />
        <Button name="2" color="#e0e0e0" />
        <Button name="3" color="#e0e0e0" />
        <Button name="+" />
      </div>
      <div className="row rowFive">
        <Button name="0" wide color="#e0e0e0" />
        <Button name="." color="#e0e0e0" />
        <Button name="=" />
      </div>
    </StyledButtomPanel>
  );
}
