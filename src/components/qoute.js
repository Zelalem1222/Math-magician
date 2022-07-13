import React from 'react';
import styled from 'styled-components';

function Quote() {
  return (
    <QuotesContainer>
      <Quotes>
        Mathmatics is not about numbers, equetions, computations,
        or algorithms: it is about understanding. — William Paul Thurston
      </Quotes>
      <Quotes>The essence of mathematics lies in its freedom. — Georg Cantor</Quotes>
      <Quotes>
        Just because we can not find a solution, it does not mean there is not one.
        — Andrew Wiles, English mathematician
      </Quotes>
    </QuotesContainer>
  );
}

export default Quote;

const QuotesContainer = styled.div`
  margin: 10% auto 1%;
    width : 35%
  `;

const Quotes = styled.h3`
    
  `;
