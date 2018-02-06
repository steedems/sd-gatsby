/**
 * Created by Stefano Demurtas on 20/01/2018.
 */

import React from 'react';
import PropType from 'prop-types';
import AnimateHeight from 'react-animate-height';

import uniq from 'lodash/uniq';

import Icon from '../Icon';
import Projects from '../Projects';

import {
  ExperienceWrapper,
  Title,
  Head,
  Company,
  Description,
  ProjectsButton,
  Techs,
  TechsTitle,
  ANIMATION_DURATION,
} from './styleds';

import WhenAndWhere from '../WhenAndWhere';

class Experience extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showProjects: false,
      techs: uniq(props.projects.reduce((accumulator, value) =>
        accumulator.concat(value.technologies), props.techs)),
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
        <WhenAndWhere startDate={startDate} endDate={endDate} location={location} />
        <Description>
          {description}
        </Description>
        <AnimateHeight
          duration={ANIMATION_DURATION}
          height={!showProjects ? 'auto' : 0}
        >
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
          projects <Icon size={0.75} className="projects-icon" name="icon-chevron-down" />
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
  techs: PropType.array,
  projects: PropType.array,
  description: PropType.string,
};

export default Experience;
