/**
 * Created by Stefano Demurtas on 20/01/2018.
 */

import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

import { scale } from '../../utils/typography';
import { media } from '../../utils/styles';

const ExperienceWrapper = styled.div`


  padding: 48px 0;

`;
const Head = styled.div`

  display: flex;
  align-items: flex-end;
  padding-bottom: 8px;
  ${media.phone`
    flex-direction: column;
    align-items: flex-start;
  `}

  

`;
const Title = styled.h2`

  margin: 0;
  ${{ ...scale(1.25) }}
  margin-right: 24px;

`;
const Company = styled.div`

  ${{ ...scale(0.7) }}

`;
const SubTitle = styled.div`
  display: flex;
  padding-bottom: 24px;
  
  
`;
const Date = styled.div`
  
  font-style: italic;
  padding-right: 12px;

`;

const Location = styled.div``;
const Techs = styled.div`display: flex;`;
const Tech = styled.div`
  padding-right: 12px;
  float: left;
`;
const TechsList = styled.div``;
const Activities = styled.div`
  padding-bottom: 24px;
`;

function Experience({
  title,
  company,
  startDate,
  endDate,
  location,
  activities,
  techs,
}) {
  return (
    <ExperienceWrapper>
      <Head>
        <Title>{title}</Title>
        <Company>{company}</Company>
      </Head>
      <Location>{location}</Location>
      <SubTitle>
        <Date>{startDate}</Date>
        <Date>-</Date>
        <Date>{endDate || 'Present'}</Date>
      </SubTitle>
      {activities &&
      <Activities>
        Main activities:
        {activities.map(activity => (<div key={activity}>- {activity}</div>))}
      </Activities>}
      {techs &&
        <Techs>
          <TechsList>{techs.map(tech => (<Tech key={tech}>{tech}</Tech>))}</TechsList>
        </Techs>}
    </ExperienceWrapper>
  );
}

Experience.propTypes = {
  title: PropType.string,
  company: PropType.string,
  startDate: PropType.string,
  endDate: PropType.string,
  location: PropType.string,
  activities: PropType.array,
  techs: PropType.array,
};

export default Experience;
