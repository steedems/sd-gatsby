/**
 * Created by Stefano Demurtas on 20/01/2018.
 */


import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';

import { scale } from '../../utils/typography';
import { media } from '../../utils/styles';


function open(link, target = '_blank') {
  return window.open(link, target);
}

const IntroWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  padding: 24px 0; 

`;
const Name = styled.h1`

  margin: 0;
  ${{ ...scale(1.5) }}

`;

const Email = styled.div`

  cursor: pointer;

`;


const Links = styled.div`

  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  a {
    text-decoration: none;
    cursor: pointer;
  }

`;

function Intro({
  name,
  email,
  linkedIn,
  twitter,
  github,
}) {
  return (
    <IntroWrapper>
      <Name>{name}</Name>
      <Email onClick={() => open(`mailto:${email}?Subject=Hi there!`, '_top')}>{email}</Email>
      <Links>
        <Icon onClick={() => open(linkedIn)} name="icon-linkedin" size={2} />
        <Icon onClick={() => open(twitter)} name="icon-twitter" size={2} />
        <Icon onClick={() => open(github)} name="icon-github" size={2} />
      </Links>
    </IntroWrapper>
  );
}

Intro.propTypes = {

};

export default Intro;
