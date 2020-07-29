import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button(props) {
  const { name, color, wide } = props;
  const StyledButton = styled.button`
    width: ${wide ? '50%' : '25%'};
    border: solid 1px black;
    background: ${color};
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
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
