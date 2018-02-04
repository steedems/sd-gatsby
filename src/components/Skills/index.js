/**
 * Created by Stefano Demurtas on 21/01/2018.
 */

import React from 'react';
import styled from 'styled-components';
import { colors, media } from '../../utils/styles';

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  padding-bottom: 24px;

`;
const Skill = styled.div`

  display: flex;
  flex: 0 0 50%;
  padding: 12px 0;
  align-items: center;
  white-space: pre-wrap;
  
  &:nth-child(even) {
    padding-left: 24px;
    ${media.phone`padding-left: 0;`}
  }
  &:nth-child(odd) {
    padding-right: 24px;
    ${media.phone`padding-right: 0;`}
  }
  
  ${media.phone`flex: 1 1 100%; flex-direction: column; white-space: inherit;`};

`;
const Label = styled.div`

  flex: 0 0 50%;
  
  ${media.phone`width: 100%; display: flex; flex: 1 1 auto;`};

`;
const Score = styled.div`

  flex: 0 0 50%;
  display: flex;
  align-items: center;
  height: 8px;
  border: solid 1px ${colors.highlight};
  &:after {
    content: '';
    width: ${props => props.level}%;
    height: 100%;
    background: ${colors.highlight};
  }
  
  ${media.phone`width: 100%; display: flex; flex: 1 1 auto;`};

`;

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

export default Skills;
