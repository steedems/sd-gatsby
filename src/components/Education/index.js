/**
 * Created by Stefano Demurtas on 20/01/2018.
 */

import React from 'react';
import PropType from 'prop-types';

import { EducationWrapper, Head, Title, School } from './styleds';
import WhenAndWhere from '../WhenAndWhere';

function Education({
  title,
  school,
  startDate,
  endDate,
  location,
}) {
  return (
    <EducationWrapper>
      <Head>
        <Title>{title}</Title>
        <School>{school}</School>
      </Head>
      <WhenAndWhere startDate={startDate} endDate={endDate} location={location} />
    </EducationWrapper>
  );
}

Education.propTypes = {
  title: PropType.string,
  school: PropType.string,
  startDate: PropType.string,
  endDate: PropType.string,
  location: PropType.string,
  activities: PropType.array,
  techs: PropType.array,
};

export default Education;
