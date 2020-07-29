import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Display(props) {
  const { result } = props;
  const StyledDisplay = styled.div`
    background: gray;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    p {
      font-weight: bold;
      padding: 1.5rem;
      text-align: right;
      font-size: 35px;
      color: white;
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
