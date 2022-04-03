import { keyframes } from 'styled-components';

const styles = {
  // colorSecondary: '#845EC2',
  // colorPrimaryLight: '#D65DB1',
  // colorSecondaryDark: '#FF6F91',

  colorPrimary: '#FF9671',
  colorSecondary: '#FFC75F',
  colorSecondaryLight: '#F9F871',
  greenColor: '#1c6873',
  greenColorHover: '#1c6773d1',
  boxShadow: '1px 3px 3px rgba(0, 0, 0, 0.1)',
  borderRadiusDefault: '0.5rem',
  textColor: '#868e96',
};

const shakeAnimation = keyframes`
 0% { transform: translateX(5px) rotate(45deg); }

  100% { transform: translateX(-5px) rotate(-45deg); }
`;

export { shakeAnimation };

export default styles;
