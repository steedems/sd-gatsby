/**
 * Created by Stefano Demurtas on 28/01/2018.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { InterestsWrapper, Interest, InterestIcon, InterestName } from './styleds';

function Interests({ list }) {
  return (
    <InterestsWrapper>
      {list.map(interest => (
        <Interest key={interest.node.name}>
          <InterestIcon>{interest.node.icon}</InterestIcon>
          <InterestName>{interest.node.name}</InterestName>
        </Interest>))}
    </InterestsWrapper>
  );
}

Interests.propTypes = {
  list: PropTypes.array,
};

export default Interests;
