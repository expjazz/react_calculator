import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
        <Button handleClick={handleClick} name="AC" color="#e0e0e0" />
        <Button handleClick={handleClick} name="+/-" color="#e0e0e0" />
        <Button handleClick={handleClick} name="%" color="#e0e0e0" />
        <Button handleClick={handleClick} name="÷" />
      </div>
      <div className="row rowTwo">
        <Button handleClick={handleClick} name="7" color="#e0e0e0" />
        <Button handleClick={handleClick} name="8" color="#e0e0e0" />
        <Button handleClick={handleClick} name="9" color="#e0e0e0" />
        <Button handleClick={handleClick} name="X" />
      </div>
      <div className="row rowThree">
        <Button handleClick={handleClick} name="4" color="#e0e0e0" />
        <Button handleClick={handleClick} name="5" color="#e0e0e0" />
        <Button handleClick={handleClick} name="6" color="#e0e0e0" />
        <Button handleClick={handleClick} name="-" />
      </div>
      <div className="row rowFour">
        <Button handleClick={handleClick} name="1" color="#e0e0e0" />
        <Button handleClick={handleClick} name="2" color="#e0e0e0" />
        <Button handleClick={handleClick} name="3" color="#e0e0e0" />
        <Button handleClick={handleClick} name="+" />
      </div>
      <div className="row rowFive">
        <Button handleClick={handleClick} name="0" color="#e0e0e0" wide />
        <Button handleClick={handleClick} name="." color="#e0e0e0" />
        <Button handleClick={handleClick} name="=" />
      </div>
    </StyledButtomPanel>
  );
}

ButtonPannel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
