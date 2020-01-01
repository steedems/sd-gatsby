/**
 * Created by Stefano Demurtas on 20/01/2018.
 */

import Typography from 'typography';
import fairyGates from 'typography-theme-fairy-gates';

import { colors } from './styles';

import '../assets/font-awesome/style.css';

fairyGates.overrideThemeStyles = () => ({
  a: {
    textDecoration: 'none',
    textShadow: 'none',
    backgroundImage: 'none',
    color: 'inherit',
  },
});

const theme = Object.assign({}, fairyGates, {
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  scaleRatio: 1.65,
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
  headerColor: colors.headerColor,
  bodyColor: colors.bodyColor,
  headerWeight: '400',
  bodyWeight: 400,
  boldWeight: 700,
  a: {
    textDecoration: 'none',
    textShadow: 'none',
    backgroundImage: 'none',
  },
});

export default new Typography(theme);
