/**
 * Created by Stefano Demurtas on 20/01/2018.
 */

import React from 'react';
import PropType from 'prop-types';
import styled, { css } from 'styled-components';

import Experience from '../components/Experience';
import Education from '../components/Education';
import Intro from '../components/Intro';
import Section from '../components/Section';

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
    const { edges: careers } = this.props.data.allExperienceJson;
    const { edges: education } = this.props.data.allEducationJson;
    const { profileJson } = this.props.data;
    return (
      <ResumeWrapper>
        <IntroWrapper>
          <Intro {...profileJson} />
        </IntroWrapper>
        <ExperiencesWrapper>
          <Section title="work experience">
            {careers.map((edge, index) => <Experience key={index} {...edge.node} />)}
          </Section>
          <Section title="education">
            {education.map((edge, index) => <Education key={index} {...edge.node} />)}
          </Section>
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
    allEducationJson {
      edges {
        node {
          title
          school
          startDate(formatString: "MMMM YYYY")
          endDate(formatString: "MMMM YYYY")
          location
        }
      }
    }
  }
`;
