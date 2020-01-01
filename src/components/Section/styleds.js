/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import styled from 'styled-components';

import typography from '../../utils/typography';

export const SectionWrapper = styled.div``;
export const Title = styled.div`

  display: block;
  ${{ ...typography.scale(1.5) }}
  padding-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  text-align: right;
  border-bottom: solid 1px rgba(64,64,64,1);

`;
