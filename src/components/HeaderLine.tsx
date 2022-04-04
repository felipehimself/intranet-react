import styled from 'styled-components';
import styles from '../styles/styles';
const HeaderLine = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 2rem;
  width: 100%;
  z-index: 100;
  background-image: linear-gradient(
    to right,
    ${styles.colorSecondary},
    ${styles.colorSecondaryLight}
  );
`;
export default HeaderLine;
