/**
 * Created by Stefano Demurtas on 21/01/2018.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { SkillsWrapper, Skill, Label, Score } from './styleds';

function Skills({ list }) {
  return (
    <SkillsWrapper>
      {list.sort((a, b) => b.node.level - a.node.level).map(skill => (
        <Skill key={skill.node.label}>
          <Label>{skill.node.label}</Label>
          <Score level={skill.node.level} />
        </Skill>))}
    </SkillsWrapper>
  );
}

Skills.propTypes = {
  list: PropTypes.array,
};

export default Skills;
