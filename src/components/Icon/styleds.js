/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import styled from 'styled-components';

import { colors } from '../../utils/styles';

export const IconWrapper = styled.div`

  font-size: ${props => props.size}rem;
  padding: 12px 12px 12px 0;
  cursor: ${props => (props.onClick ? 'pointer' : '')};
  color: ${colors.highlight};

`;
