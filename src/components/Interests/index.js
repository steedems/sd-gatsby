/**
 * Created by Stefano Demurtas on 28/01/2018.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../../utils/styles';

import Icon from '../Icon';
import { scale } from '../../utils/typography';

const InterestsWrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
  flex-wrap: wrap;
`;
const Interest = styled.div`

  flex: 1;
  ${media.phone`flex: 1 1 50%;`}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
const InterestIcon = styled(Icon)``;
const InterestName = styled.div``;

function Interests({ list }) {
  console.log(list);
  return (
    <InterestsWrapper>
      {list.map(interest => (
        <Interest>
          <InterestIcon size={3} name={'icon-github' || interest.node.icon} />
          <InterestName>{interest.node.name}</InterestName>
        </Interest>))}
    </InterestsWrapper>
  );
}

Interest.propTypes = {
  list: PropTypes.array,
};

export default Interests;
