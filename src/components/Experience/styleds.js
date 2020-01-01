/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import styled from 'styled-components';
import { colors, media } from '../../utils/styles';
import typography from '../../utils/typography';

export const ANIMATION_DURATION = 750;

export const ExperienceWrapper = styled.div`
  padding: 24px 0;
`;
export const Head = styled.div`

  display: flex;
  align-items: flex-end;
  padding-bottom: 24px;
  ${media.phone`
    flex-direction: column;
    align-items: flex-start;
  `}
`;
export const Title = styled.h2`

  margin: 0;
  margin-right: 24px;
  font-size: ${typography.rhythm(1.5)};
  line-height: ${typography.rhythm(1.5)};

`;
export const Company = styled.div`

  font-size: ${typography.rhythm(1)};
  line-height: ${typography.rhythm(1)};

`;

export const Techs = styled.div`

  padding-bottom: 24px;
  text-align: justify;
`;

export const TechsTitle = styled.div`

  display: flex;
  align-items: center;

`;
export const Description = styled.div`
  padding: 24px 0;
  white-space: pre-line;
  text-align: justify;
`;

export const ProjectsButton = styled.div`
  font-weight: 800;
  font-size: ${typography.rhythm(0.8)};
  line-height: ${typography.rhythm(0.8)};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  color: ${colors.bodyColor};

  .projects-icon {
    transition: all ${ANIMATION_DURATION}ms;
    transform: rotate(${props => (props.showProjects ? 180 : 0)}deg);
    padding: 12px;
  }
`;
