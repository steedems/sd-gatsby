import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import Link, { navigateTo } from 'gatsby-link';

import { scale } from '../utils/typography';

import Intro from '../components/Intro';
import { media, colors } from '../utils/styles';

const HomeWrapper = styled.div`

  width: 100vw;
  min-height: 100vh;
  background: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

class IndexPage extends React.PureComponent {
  componentDidMount() {
    navigateTo('/resume');
  }
  render() {
    const {
      profileJson,
    } = this.props.data;
    return (
      <HomeWrapper>
        <Intro {...profileJson} scrolled />
      </HomeWrapper>
    );
  }
}

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
