/**
 * Created by Stefano Demurtas on 20/01/2018.
 */

import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';

import uniq from 'lodash/uniq';

import Icon from '../Icon';
import Projects from '../Projects';

import { scale, rhythm } from '../../utils/typography';
import { media } from '../../utils/styles';

const ANIMATION_DURATION = 500;

const ExperienceWrapper = styled.div`
  padding: 24px 0;
`;
const Head = styled.div`

  display: flex;
  align-items: flex-end;
  padding-bottom: 24px;
  ${media.phone`
    flex-direction: column;
    align-items: flex-start;
  `}

  

`;
const Title = styled.h2`

  margin: 0;
  margin-right: 24px;
  font-size: ${rhythm(1.5)};
  line-height: ${rhythm(1.5)};

`;
const Company = styled.div`

  font-size: ${rhythm(1)};
  line-height: ${rhythm(1)};

`;
const SubTitle = styled.div`
  display: flex;
  align-items: center;
  ${media.phone`
    flex-direction: column;
    align-items: flex-start;
  `}
`;
const Duration = styled.div`
  display: flex;
  align-items: center;
`;
const Date = styled.div`
  
  padding-right: 12px;

`;

const Location = styled.div`

  display: flex;
  align-items: center;

`;
const Techs = styled.div`

  padding-bottom: 24px;
  text-align: justify;
`;

const TechsTitle = styled.div`

  display: flex;
  align-items: center;

`;
const Description = styled.div`
  padding: 24px 0;
  white-space: pre-line;
  text-align: justify;
`;

const ProjectsButton = styled.div`
  font-weight: 800;
  font-size: ${rhythm(0.8)};
  line-height: ${rhythm(0.8)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  
  .projects-icon {
    transition: all ${ANIMATION_DURATION}ms;
    transform: rotate(${props => (props.showProjects ? 180 : 0)}deg);
  }
`;

class Experience extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showProjects: false,
      techs: uniq(props.projects.reduce((accumulator, value) => accumulator.concat(value.technologies), [])),
    };
    this.toggleProjects = this.toggleProjects.bind(this);
  }

  toggleProjects() {
    this.setState({ showProjects: !this.state.showProjects });
  }

  render() {
    const {
      title,
      company,
      startDate,
      endDate,
      location,
      description,
      projects,
    } = this.props;

    const { showProjects, techs } = this.state;
    return (
      <ExperienceWrapper>
        <Head>
          <Title>{title}</Title>
          <Company>{company}</Company>
        </Head>
        <SubTitle>
          <Duration>
            <Icon name="icon-calendar" />
            <Date>{startDate}</Date>
            <Date>-</Date>
            <Date>{endDate || 'Present'}</Date>
          </Duration>
          <Location><Icon name="icon-map-marker" />{location}</Location>
        </SubTitle>
        <AnimateHeight
          duration={ANIMATION_DURATION}
          height={!showProjects ? 'auto' : 0}
        >
          <Description>
            {description}
          </Description>
          {techs &&
            <Techs>
              <TechsTitle>
                <Icon name="icon-wrench" /> Some of the technologies used:
              </TechsTitle>
              {techs.join(', ')}.
            </Techs>
          }
        </AnimateHeight>
        <ProjectsButton onClick={this.toggleProjects} showProjects={showProjects}>
          projects <Icon className="projects-icon" name="icon-chevron-down" />
        </ProjectsButton>
        <AnimateHeight
          duration={ANIMATION_DURATION}
          height={showProjects ? 'auto' : 0}
          style={{ overflow: 'auto' }}
        >
          <Projects list={projects} />
        </AnimateHeight>
      </ExperienceWrapper>
    );
  }
}

Experience.propTypes = {
  title: PropType.string,
  company: PropType.string,
  startDate: PropType.string,
  endDate: PropType.string,
  location: PropType.string,
  activities: PropType.array,
  techs: PropType.array,
  projects: PropType.array,
};

export default Experience;
