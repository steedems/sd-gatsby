/**
 * Created by Stefano Demurtas on 31/01/2018.
 */

/* eslint-disable react/no-array-index-key*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SwiperJS from 'swiper/dist/js/swiper';
import 'swiper/dist/css/swiper.min.css';

import Pagination from './Pagination';

const SliderContainer = styled.div`

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

`;
const SliderWrapper = styled.div``;

class Slider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.initialSlide,
    };
    this.swiperRef = this.swiperRef.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  swiperRef(ref) {
    const {
      spaceBetween,
      slidesPerView,
      centeredSlides,
      slideToClickedSlide,
      loop,
      swiperRef,
      initialSlide,
    } = this.props;

    const swiperOptions = {
      spaceBetween,
      slidesPerView,
      centeredSlides,
      slideToClickedSlide,
      loop,
      initialSlide,
      on: {
        slideChange: this.handleChangeIndex,
      },
    };

    this.swiper = ref ? new SwiperJS(ref, swiperOptions) : null;
    if (swiperRef) swiperRef(this.swiper);
  }

  handleChangeIndex() {
    if (!this.swiper) return;
    const { activeIndex } = this.swiper;
    const { onSlideChange } = this.props;
    this.setState({
      index: activeIndex,
    });
    if (onSlideChange) onSlideChange(activeIndex);
  }

  render() {
    const { children } = this.props;
    const { index } = this.state;

    const shouldSlide = Array.isArray(children) && children.length > 1;

    return (
      <SliderContainer
        className="swiper-container"
        innerRef={shouldSlide ? this.swiperRef : null}
      >
        {shouldSlide ? (
          <SliderWrapper className="swiper-wrapper" index={index}>
            {children.map((child, i) => <div key={i} className="swiper-slide">{child}</div>)}
          </SliderWrapper>
        ) : (
          children
        )}
        {shouldSlide && <Pagination dots={children.length} index={index} />}
      </SliderContainer>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  initialSlide: PropTypes.number,
  slidesPerView: PropTypes.number,
  swiperRef: PropTypes.func,
  onSlideChange: PropTypes.func,
  spaceBetween: PropTypes.number,
  centeredSlides: PropTypes.bool,
  slideToClickedSlide: PropTypes.bool,
  loop: PropTypes.bool,
};

Slider.defaultProps = {
  spaceBetween: 10,
  initialSlide: 0,
  slidesPerView: 1,
};

export default Slider;
