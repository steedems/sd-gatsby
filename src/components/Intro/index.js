/**
 * Created by Stefano Demurtas on 20/01/2018.
 */


import React from 'react';
import PropType from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Icon from '../Icon';

import { rhythm, scale } from '../../utils/typography';
import { media } from '../../utils/styles';

const IntroWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding: 24px 0; 
  
  height: 100vh;
  position: relative;

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

const animationName = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translate(-50%, 0);
  }
	40% {
    transform: translate(-50%, -30px);
  }
	60% {
    transform: translate(-50%, -15px);
  }
`;

const Arrow = styled.div`

    font-size: 2rem;
    line-height: 3rem;
    position: absolute;
    bottom: 24px;
    left: 50%;
    animation: ${animationName} 2s infinite;
    
    .intro-arrow {
      padding: 12px;
      opacity: ${props => (props.scrolled ? 0 : 1)};
      transition: all 1s;
    }
`;


function Intro({
  name,
  title,
  scrolled,
}) {
  return (
    <IntroWrapper>
      <Name>{name}</Name>
      <Quote>{title}</Quote>
      <Arrow scrolled={scrolled} ><Icon className="intro-arrow" name="icon-chevron-down" /></Arrow>
    </IntroWrapper>
  );
}

Intro.propTypes = {};

export default Intro;
