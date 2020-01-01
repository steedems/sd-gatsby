
/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import styled from 'styled-components';
import { media } from '../../utils/styles';

export const WhenAndWhereWrapper = styled.div`

display: flex;
  align-items: center;
  ${media.phone`
    flex-direction: column;
    align-items: flex-start;
  `}

`;

export const Duration = styled.div`
  display: flex;
  align-items: center;
`;
export const Date = styled.div`

  padding-right: 12px;

`;

export const Location = styled.div`

  display: flex;
  align-items: center;
  padding-left: 12px;

`;
