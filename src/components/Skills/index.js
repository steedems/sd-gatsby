/**
 * Created by Stefano Demurtas on 21/01/2018.
 */

import React from 'react';
import styled from 'styled-components';
import {colors} from "../../utils/styles";

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Skill = styled.div`

  display: flex;
  flex: 0 0 50%;
  padding: 12px 0;
  align-items: center;
  
  &:nth-child(even) {
    padding-left: 24px;
  }
  &:nth-child(odd) {
    padding-right: 24px;
  }

`;
const Label = styled.div`

  flex: 0 0 50%;

`;
const Score = styled.div`

  flex: 0 0 50%;
  display: flex;
  align-items: center;
  height: 2.3px;
  background: ${colors.primaryLight};
  &:after {
    content: '';
    width: ${props => props.level}%;
    height: 100%;
    background: ${colors.primaryDark};
  }

`;

function Skills({ list }) {
  return (
    <SkillsWrapper>
      {list.map(skill => (
        <Skill key={skill.node.label}>
          <Label>{skill.node.label}</Label>
          <Score level={skill.node.level} />
        </Skill>))}
    </SkillsWrapper>
  );
}

export default Skills;
