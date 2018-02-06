/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import styled from 'styled-components';
import { colors, media } from '../../utils/styles';


export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  padding-bottom: 24px;

`;
export const Skill = styled.div`

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
export const Label = styled.div`

  flex: 0 0 50%;
  
  ${media.phone`width: 100%; display: flex; flex: 1 1 auto;`};

`;
export const Score = styled.div`

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
