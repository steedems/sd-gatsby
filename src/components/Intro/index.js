/**
 * Created by Stefano Demurtas on 20/01/2018.
 */


import React from 'react';
import PropType from 'prop-types';

import Icon from '../Icon';

import { IntroWrapper, Arrow, Name, Quote } from './styleds';

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

Intro.propTypes = {
  name: PropType.string,
  title: PropType.string,
  scrolled: PropType.bool,
};

export default Intro;
