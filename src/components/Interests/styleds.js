/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import styled from 'styled-components';
import { media } from '../../utils/styles';
import { scale } from '../../utils/typography';

export const InterestsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
  flex-wrap: wrap;
`;
export const Interest = styled.div`
  flex: 1;
  ${media.phone`flex: 1 1 50%; padding: 12px;`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InterestIcon = styled.div`

  padding: 8px;
  font-size: 2rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  opacity: .9;
  filter: grayscale(.3);

`;
export const InterestName = styled.div``;
