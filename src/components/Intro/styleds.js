/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import styled, { keyframes } from 'styled-components';

import { rhythm, scale } from '../../utils/typography';
import { media } from '../../utils/styles';

export const IntroWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding: 24px 0; 
  
  height: 100vh; // weird fix for computed height
  height: ${props => props.height};
  position: relative;

`;
export const Name = styled.h1`

  margin: 0;
  ${{ ...scale(2.5) }};
  text-align: center;

`;


export const Quote = styled.h2`

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

export const Arrow = styled.div`

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
