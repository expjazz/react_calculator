import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button(props) {
  const { name } = props;
  const StyledButton = styled.button`
    width: 25%;
    border: solid 1px black
    p {
      text-align: center;
      color: black;
    }

  `;
  return (
    <StyledButton type="button">
      <p>
        { name }
      </p>
    </StyledButton>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
