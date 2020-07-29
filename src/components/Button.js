import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: ${props => (props.wide ? '50%' : '25%')};
    border: solid 1px black;
    background: ${props => props.color};
    p {
      text-align: center;
      color: black;
    }

  `;
function Button(props) {
  const { name, color, wide, handleClick } = props;
  return (
    <StyledButton color={color} wide={wide} type="button" onClick={() => handleClick(name)}>
      <p>
        { name }
      </p>
    </StyledButton>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
