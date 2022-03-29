import styled from 'styled-components';
import styles from '../styles/styles';
const HeaderLine = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  height: 2rem;
  background-image: linear-gradient(
    to right,
    ${styles.colorTertiaryDark},
    ${styles.colorTertiaryLight}
  );
`;
export default HeaderLine;
