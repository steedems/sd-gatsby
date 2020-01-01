/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import styled from 'styled-components';
import { media } from '../../utils/styles';
import typography from '../../utils/typography';

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
  font-size: ${typography.rhythm(1)};
  line-height: ${typography.rhythm(1)};
  padding-bottom: 12px;

`;
export const School = styled.div`

  font-size: ${typography.rhythm(0.75)};
  line-height: ${typography.rhythm(0.75)};

`;
