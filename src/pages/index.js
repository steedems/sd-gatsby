import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { scale } from '../utils/typography';

import Icon from '../components/Icon';
import { media } from '../utils/styles';

const HomeWrapper = styled.div`

  height: 100vh;
  width: 100vw;
  background: #dfeaf1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h1 {
    ${{ ...scale(2.5) }}
    ${media.phone`${{ ...scale(1.75) }}`}
    text-align: center;
  }
  h2 {
    ${{ ...scale(1.25) }}
    ${media.phone`${{ ...scale(0.75) }}`}
    text-align: center;
  }

`;

const ToResume = styled(Link)`

  text-shadow: none;
  background-image: none;
  ${{ ...scale(1) }}
  padding-top: 24px;
  cursor: pointer;
  color: inherit;
  display: flex;

`;

const IndexPage = ({ data }) => {
  const {
    name, title,
  } = data.profileJson;
  return (
    <HomeWrapper>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <ToResume to="/resume">
        <Icon name="icon-drivers-license-o" size={2} />
        <Icon name="icon-angle-right" />
      </ToResume>
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
    } 
  }
`;
