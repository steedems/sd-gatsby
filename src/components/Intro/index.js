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
  
  height: 100vh; // weird fix for computed height
  height: ${props => props.height};
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
    transform: translate3d(-50%, 0, 0);
  }
	40% {
    transform: translate3d(-50%, -30px, 0);
  }
	60% {
    transform: translate3d(-50%, -15px, 0);
  }
`;

const Arrow = styled.div`

    font-size: 2rem;
    line-height: 3rem;
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translate(-50%, 0);
    animation: ${animationName} 2s infinite;
    cursor: pointer;
    
    a {
      text-decoration: none;
      text-shadow: none;
      background-image: none;
    }
    
    .intro-arrow {
      padding: 12px;
      opacity: ${props => (props.scrolled ? 0 : 1)};
      transition: all 1s;
    }
`;


const letThePartyBegin = () => {
  if (!window) return;
  window.scroll({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth',
  });
};

const getWindowHeight = () => {
  try {
    if (!window) return '100vh';
    return `${window.innerHeight}px`;
  } catch (e) {
    console.warn('gatsby did not find window');
  }
};


function Intro({
  name,
  title,
  scrolled,
}) {
  return (
    <IntroWrapper height={getWindowHeight()}>
      <Name>{name}</Name>
      <Quote>{title}</Quote>
      <Arrow scrolled={scrolled} onClick={letThePartyBegin}>
        <Icon className="intro-arrow" name="icon-chevron-down" />
      </Arrow>
    </IntroWrapper>
  );
}

Intro.propTypes = {};

export default Intro;
