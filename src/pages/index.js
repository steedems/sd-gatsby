import React from 'react';

import styled from 'styled-components';

function open(link, target = '_blank') {
  return window.open(link, target);
}

import Icon from '../components/Icon';

const HomeWrapper = styled.div`

  height: 100vh;
  width: 100vw;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h1 {
    font-size: 5rem;
    font-weight: 400;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    font-weight: 400;
    font-style: italic;
    text-align: center;
  }

`;

const Links = styled.div`

  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    text-decoration: none;
    cursor: pointer;
  }

`;

const IndexPage = () => (
  <HomeWrapper>
    <h1>stefano demurtas</h1>
    <h2>developer and sea lover <span role="img">⛵</span></h2>
    <Links>
      <Icon onClick={() => open('https://www.linkedin.com/in/stefanodemurtas')} name="icon-linkedin" size={2} />
      <Icon onClick={() => open('https://twitter.com/steedems')} name="icon-twitter" size={2} />
      <Icon onClick={() => open('https://github.com/steedems')} name="icon-github" size={2} />
      <Icon onClick={() => open('mailto:st.demurtas@gmail.com?Subject=Hi there!', '_top')} name="icon-envelope-o" size={2} />
    </Links>
  </HomeWrapper>
);


export default IndexPage;
