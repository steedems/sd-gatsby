/**
 * Created by Stefano Demurtas on 20/01/2018.
 */

import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import {rhythm, scale} from '../../utils/typography';
import { media } from '../../utils/styles';

const EducationWrapper = styled.div`

  padding: 24px 0 48px 0;

`;
const Head = styled.div`

  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  ${media.phone`
    flex-direction: column;
    align-items: flex-start;
  `}

  

`;
const Title = styled.h2`

  margin: 0;
  margin-right: 24px;
  font-size: ${rhythm(1)};
  line-height: ${rhythm(1)};
  padding-bottom: 12px;

`;
const School = styled.div`

  font-size: ${rhythm(0.75)};
  line-height: ${rhythm(0.75)};

`;
const SubTitle = styled.div`
  display: flex;  
`;
const Date = styled.div`
  
  font-style: italic;
  padding-right: 12px;

`;

const Location = styled.div``;

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
      <Location>{location}</Location>
      <SubTitle>
        <Date>{startDate}</Date>
        <Date>-</Date>
        <Date>{endDate || 'Present'}</Date>
      </SubTitle>
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
