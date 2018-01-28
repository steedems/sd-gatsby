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
import Skills from '../components/Skills';
import Interests from '../components/Interests';

import { media, colors } from '../utils/styles';

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

  background: ${colors.primary};
  ${pagePadding()}

`;
const ExperiencesWrapper = styled.div`

  background: ${colors.primaryLight};
  ${pagePadding()}
  
`;

const SkillsWrapper = styled.div`

  background: ${colors.primary};
  ${pagePadding()}
  
`;

const InterestsWrapper = styled.div`

  background: ${colors.primaryLight};
  ${pagePadding()}
  
`;

const ContactsWrapper = styled.div`

  background: ${colors.primary};
  ${pagePadding()}
  
  height: 30vh;
  
`;

class Resume extends React.PureComponent {
  render() {
    const { edges: careers } = this.props.data.allExperienceJson;
    const { edges: education } = this.props.data.allEducationJson;
    const { edges: techSkills } = this.props.data.techSkills;
    const { edges: languages } = this.props.data.languages;
    const { edges: tools } = this.props.data.tools;
    const { edges: interests } = this.props.data.allInterestsJson;
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
        <SkillsWrapper>
          <Section title="skills">
            <Skills list={techSkills} />
          </Section>
          <Section title="tools">
            <Skills list={tools} />
          </Section>
          <Section title="languages">
            <Skills list={languages} />
          </Section>
        </SkillsWrapper>
        <InterestsWrapper>
          <Section title="interests">
            <Interests list={interests} />
          </Section>
        </InterestsWrapper>
        <ContactsWrapper>

        </ContactsWrapper>
      </ResumeWrapper>
    );
  }
}


Resume.propTypes = {
  data: PropType.object.isRequired,
};


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
          techs
          projects {
            industry
            client
            description
            technologies
          }
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
    techSkills: allSkillsJson(filter: {type:{eq:"tech"}}) {
      edges {
        node {
          label
          level
        }
      }
    }
    languages: allSkillsJson(filter: {type:{eq:"language"}}) {
      edges {
        node {
          label
          level
        }
      }
    }
    tools: allSkillsJson(filter: {type:{eq:"tool"}}) {
      edges {
        node {
          label
          level
        }
      }
    }
    allInterestsJson {
      edges {
        node {
          name
          icon
        }
      }
    }
  }
`;
