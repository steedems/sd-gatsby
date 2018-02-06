/**
 * Created by Stefano Demurtas on 28/01/2018.
 */

import React from 'react';
import PropType from 'prop-types';

import Swiper from '../Swiper';

import Icon from '../Icon';
import { ProjectsWrapper, Project, Client, Description, Techs } from './styleds';

function Projects({ list }) {
  return (
    <ProjectsWrapper>
      <Swiper slidesPerView={1} centeredSlides slideToClickedSlide spaceBetween={24}>
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
