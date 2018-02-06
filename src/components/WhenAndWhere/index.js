/**
 * Created by Stefano Demurtas on 06/02/2018.
 */

import React from 'react';
import PropType from 'prop-types';

import { WhenAndWhereWrapper, Duration, Date, Location } from './styleds';

import Icon from '../Icon';

function WhenAndWhere({ startDate, endDate, location }) {
  return (
    <WhenAndWhereWrapper>
      <Duration>
        <Icon name="icon-calendar" />
        <Date>{startDate}</Date>
        <Date>-</Date>
        <Date>{endDate || 'Present'}</Date>
      </Duration>
      <Location><Icon name="icon-map-marker" />{location}</Location>
    </WhenAndWhereWrapper>
  );
}

export default WhenAndWhere;
