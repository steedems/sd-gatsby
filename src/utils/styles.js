/**
 * Created by Stefano Demurtas on 20/01/2018.
 */

// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

const sizes = {
  giant: 1270,
  desktop: 1080,
  tablet: 768,
  phone: 480,
};

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});


const colors = {
  primary: '#dfeaf1',
  primaryLight: '#F2F7F9',
  primaryDark: '#8a959b',
  headerColor: 'rgba(64,64,64,1)',
  bodyColor: 'rgba(64,64,64,.9)',
};

export default {
  media,
  colors,
};
