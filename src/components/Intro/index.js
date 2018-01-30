/**
 * Created by Stefano Demurtas on 20/01/2018.
 */


import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import { rhythm, scale } from '../../utils/typography';
import { media } from '../../utils/styles';

const IntroWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding: 24px 0; 
  
  height: 100vh;

`;
const Name = styled.h1`

  margin: 0;
  ${{ ...scale(2.5) }};
  text-align: center;

`;


const Quote = styled.h2`

    ${{ ...scale(1.25) }}
    ${media.phone`${{ ...scale(0.75) }}`}
    text-align: center;
`;


function Intro({
  name,
  title,
  quote,
}) {
  return (
    <IntroWrapper>
      <Name>{name}</Name>
      <Quote>{title}</Quote>
    </IntroWrapper>
  );
}

Intro.propTypes = {};

export default Intro;
