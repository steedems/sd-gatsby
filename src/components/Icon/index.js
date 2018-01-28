/**
 * Created by Stefano Demurtas on 16/01/2018.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconWrapper = styled.div`

  font-size: ${props => props.size}rem;
  margin: 12px;
  cursor: pointer;

`;

function Icon({ size, name, onClick, className }) {
  return (
    <IconWrapper onClick={onClick} size={size} className={className}><i className={name} /></IconWrapper>
  );
}

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Icon;
