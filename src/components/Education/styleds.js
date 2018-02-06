/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import styled from 'styled-components';
import { media } from '../../utils/styles';
import { rhythm } from '../../utils/typography';

export const EducationWrapper = styled.div`

  padding-top: 24px;

`;
export const Head = styled.div`

  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  ${media.phone`
    flex-direction: column;
    align-items: flex-start;
  `}

  

`;
export const Title = styled.h2`

  margin: 0;
  margin-right: 24px;
  font-size: ${rhythm(1)};
  line-height: ${rhythm(1)};
  padding-bottom: 12px;

`;
export const School = styled.div`

  font-size: ${rhythm(0.75)};
  line-height: ${rhythm(0.75)};

`;
