/**
 * Created by Stefano Demurtas on 21/01/2018.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { SectionWrapper, Title } from './styleds';

function Section({ title, children }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};

export default Section;
