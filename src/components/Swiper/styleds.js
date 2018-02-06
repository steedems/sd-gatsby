/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import styled from 'styled-components';
import { colors } from '../../utils/styles';

const PAGINATION_HEIGHT = '48px';

export const SliderContainer = styled.div`

   &.swiper-container {
     padding-bottom: ${PAGINATION_HEIGHT};
   }

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

`;
export const SliderWrapper = styled.div``;

export const PaginationWrapper = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${PAGINATION_HEIGHT};
  position: absolute;
  bottom: 0;

`;
export const DOT_SIZE = '4px';
export const DOT_ACTIVE = '8px';
export const PaginationDot = styled.div`

  height: ${props => (props.active ? DOT_ACTIVE : DOT_SIZE)};
  width: ${props => (props.active ? DOT_ACTIVE : DOT_SIZE)};
  transition: all .3s ease-in-out;
  margin: 4px;
  border-radius: 50%;
  background: ${props => (props.active ? colors.highlight : colors.primaryDark)};

`;
