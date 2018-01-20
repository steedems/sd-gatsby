/**
 * Created by Stefano Demurtas on 20/01/2018.
 */

import React from 'react';
import PropType from 'prop-types';
import styled, { css } from 'styled-components';

import Experience from '../components/Experience';
import Intro from '../components/Intro';

import { media } from '../utils/styles';

const pagePadding = () => css`
  padding: 0 256px;
  ${media.giant`padding: 0 256px;`}
  ${media.desktop`padding: 0 128px;`}
  ${media.tablet`padding: 24px;`}
  ${media.phone`padding: 12px;`}
`;

const ResumeWrapper = styled.div`

  min-height: 100vh;
  width: 100%;

`;

const IntroWrapper = styled.div`

  background: #dfeaf1;
  ${pagePadding()}

`;
const ExperiencesWrapper = styled.div`

  background: #dfeaf166;
  ${pagePadding()}
  
  
`;

class Resume extends React.PureComponent {
  render() {
    const { edges } = this.props.data.allExperienceJson;
    const { profileJson } = this.props.data;
    return (
      <ResumeWrapper>
        <IntroWrapper>
          <Intro {...profileJson} />
        </IntroWrapper>
        <ExperiencesWrapper>
          {edges.map((edge, index) => <Experience key={index} {...edge.node} />)}
        </ExperiencesWrapper>
      </ResumeWrapper>
    );
  }
}


export default Resume;

export const pageQuery = graphql`
  query ResumePage {
    profileJson {
      name
      title
      linkedIn
      twitter
      github
      email
    } 
    allExperienceJson {
      edges {
        node {
          title
          company
          startDate(formatString: "MMMM YYYY")
          endDate(formatString: "MMMM YYYY")
          description
          location
          activities
          techs
        }
      }
    }
  }
`;
