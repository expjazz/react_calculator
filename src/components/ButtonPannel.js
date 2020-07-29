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
export default function ButtonPannel(props) {
  const { handleClick } = props;
  return (
    <StyledButtomPanel>
      <div className="row rowOne">
        <Button handleClick={ handleClick }  name="AC" />
        <Button handleClick={ handleClick } name="+/-" />
        <Button handleClick={ handleClick } name="%" />
        <Button handleClick={ handleClick } name="÷" />
      </div>
      <div className="row rowTwo">
        <Button handleClick={ handleClick } name="7" />
        <Button handleClick={ handleClick } name="8" />
        <Button handleClick={ handleClick } name="9" />
        <Button handleClick={ handleClick } name="X" />
      </div>
      <div className="row rowThree">
        <Button handleClick={ handleClick } name="4" />
        <Button handleClick={ handleClick } name="5" />
        <Button handleClick={ handleClick } name="6" />
        <Button handleClick={ handleClick } name="-" />
      </div>
      <div className="row rowFour">
        <Button handleClick={ handleClick } name="1" />
        <Button handleClick={ handleClick } name="2" />
        <Button handleClick={ handleClick } name="3" />
        <Button handleClick={ handleClick } name="+" />
      </div>
      <div className="row rowFive">
        <Button handleClick={ handleClick } name="0" wide />
        <Button handleClick={ handleClick } name="." />
        <Button handleClick={ handleClick } name="=" />
      </div>
    </StyledButtomPanel>
  );
}

