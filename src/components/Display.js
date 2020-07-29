import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Display(props) {
  const { result } = props;
  const StyledDisplay = styled.div`
    background: gray;
    height: 100px;
    p {
      font-weight: bold;
      padding: 5px;
      text-align: right;
    }
  `;
  return (
    <StyledDisplay>
      <p>
        {result}
      </p>
    </StyledDisplay>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
