import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDisplay = styled.div`
  background: gray;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  p {
    font-weight: bold;
    text-align: right;
    color: white;
    ${(props => (props.result.length < 39 ? `font-size: 35px;
    padding: 1.5rem;` : 'font-size: 15px; overflow-wrap: anywhere;'))}
 
  }
`;
export default function Display(props) {
  const { result } = props;
  console.log(result.length > 30);
  return (
    <StyledDisplay result={result}>
      <p>{result}</p>
    </StyledDisplay>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
