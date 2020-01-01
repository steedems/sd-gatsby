/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import styled from 'styled-components';

import typography from '../../utils/typography';
import { colors, media } from '../../utils/styles';

export const ProjectsWrapper = styled.div``;
export const Project = styled.div`

  padding: 24px;
  border-radius: 3px;
  border: solid 1px ${colors.highlight};

`;
export const Client = styled.div`

  display: flex;
  align-items: center;
  font-size: ${typography.rhythm(0.8)};
  line-height: ${typography.rhythm(0.8)};

`;
export const Description = styled.div`

  display: flex;
  align-items: center;
  white-space: pre-line;
  text-align: justify;
  ${media.phone`padding: 12px 0;`};

`;
export const Techs = styled.div`

  display: flex;
  align-items: center;
  text-align: justify;

`;
