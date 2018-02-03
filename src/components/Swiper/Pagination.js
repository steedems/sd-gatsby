/**
 * Created by Stefano Demurtas on 03/02/2018.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {colors} from '../../utils/styles';


const PaginationWrapper = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

`;
const DOT_SIZE = '4px';
const DOT_ACTIVE = '8px';
const PaginationDot = styled.div`

  height: ${props => (props.active ? DOT_ACTIVE : DOT_SIZE)};
  width: ${props => (props.active ? DOT_ACTIVE : DOT_SIZE)};
  transition: all .3s ease-in-out;
  margin: 4px;
  border-radius: 50%;
  background: ${props => (props.active ? colors.highlight : colors.primaryDark)};

`;


class Pagination extends React.PureComponent {
  render() {
    const { index, dots } = this.props;

    const children = [];

    for (let i = 0; i < dots; i += 1) {
      children.push(<PaginationDot key={i} index={i} active={i === index} />);
    }

    return (
      <PaginationWrapper>{children}</PaginationWrapper>
    );
  }
}

Pagination.propTypes = {
  dots: PropTypes.number.isRequired,
  index: PropTypes.number,
};

Pagination.defaultProps = {
  index: 0,
};

export default Pagination;
