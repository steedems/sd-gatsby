/**
 * Created by Stefano Demurtas on 21/01/2018.
 */

import React from 'react';
import styled from 'styled-components';

import { scale } from '../../utils/typography';

const SectionWrapper = styled.div``;
const Title = styled.div`

  display: block;
  ${{ ...scale(1.5) }}
  padding-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  text-align: right;
  border-bottom: solid 1px rgba(64,64,64,1);

`;

function Section({ title, children }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
}

export default Section;
