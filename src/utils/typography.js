/**
 * Created by Stefano Demurtas on 20/01/2018.
 */

import Typography from 'typography';
import fairyGates from 'typography-theme-fairy-gates';

const theme = Object.assign({}, fairyGates, {
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Work Sans',
      styles: [
        '600',
      ],
    },
    {
      name: 'Quattrocento Sans',
      styles: [
        '400',
        '400i',
        '700',
      ],
    },
  ],
  headerFontFamily: [
    'Work Sans',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Quattrocento Sans',
    'serif',
  ],
  headerColor: 'rgba(64,64,64,1)',
  bodyColor: 'rgba(64,64,64,.9)',
  headerWeight: '400',
  bodyWeight: 400,
  boldWeight: 700,
});

const typography = new Typography(theme);

export default typography;
