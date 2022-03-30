import { keyframes } from 'styled-components';

const styles = {
  colorPrimaryDark: '#845EC2',
  colorPrimaryLight: '#D65DB1',
  colorSecondaryDark: '#FF6F91',
  colorSecondaryLight: '#FF9671',
  colorTertiaryDark: '#FFC75F',
  colorTertiaryLight: '#F9F871',
  boxShadow: '1px 3px 3px rgba(0, 0, 0, 0.1)'

};

const shakeAnimation = keyframes`
 0% { transform: translateX(5px) rotate(45deg); }

  100% { transform: translateX(-5px) rotate(-45deg); }
`;

export { shakeAnimation };

export default styles;
