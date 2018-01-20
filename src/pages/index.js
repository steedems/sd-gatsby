import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import { scale } from '../utils/typography';

import Icon from '../components/Icon';

function open(link, target = '_blank') {
  return window.open(link, target);
}

const HomeWrapper = styled.div`

  height: 100vh;
  width: 100vw;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h1 {
    ${{ ...scale(2.5) }}
    text-align: center;
  }
  h2 {
    ${{ ...scale(1.25) }}
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

const IndexPage = ({ data }) => {
  const {
    name, title, linkedIn, twitter, github, email,
  } = data.profileJson;
  return (
    <HomeWrapper>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <Links>
        <Icon onClick={() => open({ linkedIn })} name="icon-linkedin" size={2} />
        <Icon onClick={() => open(twitter)} name="icon-twitter" size={2} />
        <Icon onClick={() => open({ github })} name="icon-github" size={2} />
        <Icon
          onClick={() => open({ email }, '_top')}
          name="icon-envelope-o"
          size={2}
        />
      </Links>
    </HomeWrapper>
  );
};


IndexPage.propTypes = {
  data: PropType.object,
};


export default IndexPage;


export const pageQuery = graphql`
  query IndexPage {
    profileJson {
      name
      title
      linkedIn
      twitter
      github
      email
    } 
  }
`;
