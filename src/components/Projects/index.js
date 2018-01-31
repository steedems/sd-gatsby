/**
 * Created by Stefano Demurtas on 28/01/2018.
 */

import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import Swiper from '../Swiper';

import Icon from '../Icon';
import { rhythm } from '../../utils/typography';
import { colors, media } from '../../utils/styles';

const ProjectsWrapper = styled.div``;
const Project = styled.div`

  padding: 24px;
  border-radius: 3px;
  border: solid 1px ${colors.highlight};

`;
const Client = styled.div`

  display: flex;
  align-items: center;
  font-size: ${rhythm(0.8)};
  line-height: ${rhythm(0.8)};

`;
const Description = styled.div`

  display: flex;
  align-items: center;
  white-space: pre-line;
  text-align: justify;
  ${media.phone`padding: 12px 0;`};
  
`;
const Techs = styled.div`

  display: flex;
  align-items: center;
  text-align: justify;

`;

function Projects({ list }) {
  return (
    <ProjectsWrapper>
      <Swiper slidesPerView={1.05} centeredSlides>
        {list.map((project, i) => (
          <Project key={i}>
            <Client><Icon name="icon-suitcase" />{project.client} - {project.industry}</Client>
            <Description><Icon name="icon-tasks" />{project.description}</Description>
            <Techs><Icon name="icon-wrench" />{project.technologies.join(', ')}</Techs>
          </Project>))}
      </Swiper>
    </ProjectsWrapper>
  );
}

Projects.propTypes = {
  list: PropType.array,
};

export default Projects;
