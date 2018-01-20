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
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
