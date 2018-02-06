/**
 * Created by Stefano Demurtas on 03/02/2018.
 */

import React from 'react';
import PropTypes from 'prop-types';

import {colors} from '../../utils/styles';

import { PaginationDot, PaginationWrapper } from './styleds';

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
