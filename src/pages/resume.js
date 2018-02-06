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
import Icon from '../components/Icon';

import { media, colors } from '../utils/styles';
import { rhythm } from '../utils/typography';

function open(link, target = '_blank') {
  return window.open(link, target);
}

const pagePadding = () => css`
  padding: 0 256px;
  ${media.giant`padding: 0 256px;`}
  ${media.desktop`padding: 0 128px;`}
  ${media.tablet`padding: 0 24px;`}
  ${media.phone`padding: 0 12px;`}
`;

const ResumeWrapper = styled.div`

  min-height: 100vh;
  width: 100%;
  
  *::selection {
    color: ${colors.highlight};
    background-color: ${colors.primary};
  }

`;

const SectionWrapper = styled.div`

  ${pagePadding()};
  background: ${colors.primaryLight};
  
  &:first-child {
    background: ${colors.primary};
  }
  
`;

const ContactsWrapper = styled(SectionWrapper)`

  background: ${colors.primary};

  padding-bottom: 24px;
      
`;

const Links = styled.div`

  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  a {
    text-decoration: none;
    cursor: pointer;
  }

`;

const Email = styled.div`

  cursor: pointer;

`;

const Phone = styled.div`

  cursor: pointer;
  font-size: ${rhythm(0.6)};
  // line-height: ${rhythm(0.5)};

`;

const Contact = styled(Icon)`

  padding: 12px;
  color: ${colors.bodyColor};

`;

class Resume extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }
  componentDidMount() {
    try {
      window.addEventListener('scroll', () => {
        this.setState({ scrolled: window.pageYOffset > 0 });
      });
    } catch (e) {
      console.log('body.addEventListener failed', e);
    }
  }
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
        <SectionWrapper>
          <Intro {...profileJson} scrolled={this.state.scrolled} />
        </SectionWrapper>
        <SectionWrapper>
          <Section title="work experience">
            {careers.map((edge, index) => <Experience key={index} {...edge.node} />)}
          </Section>
        </SectionWrapper>
        <SectionWrapper>
          <Section title="skills">
            <Skills list={techSkills} />
          </Section>
        </SectionWrapper>
        <SectionWrapper>
          <Section title="tools">
            <Skills list={tools} />
          </Section>
        </SectionWrapper>
        <SectionWrapper>
          <Section title="education">
            {education.map((edge, index) => <Education key={index} {...edge.node} />)}
          </Section>
        </SectionWrapper>
        <SectionWrapper>
          <Section title="languages">
            <Skills list={languages} />
          </Section>
        </SectionWrapper>
        <SectionWrapper>
          <Section title="interests">
            <Interests list={interests} />
          </Section>
        </SectionWrapper>
        <ContactsWrapper>
          <Section title="contacts">
            <Email onClick={() => open(`mailto:${profileJson.email}?Subject=Hi there!`, '_top')}>{profileJson.email}</Email>
            <Phone onClick={() => 0}>{profileJson.phone}</Phone>
            <Links>
              <Contact onClick={() => open(profileJson.linkedIn)} name="icon-linkedin" size={2} />
              <Contact onClick={() => open(profileJson.twitter)} name="icon-twitter" size={2} />
              <Contact onClick={() => open(profileJson.github)} name="icon-github" size={2} />
            </Links>
          </Section>
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
      quote
      linkedIn
      twitter
      github
      email
      phone
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
