import styled from 'styled-components';
import styles from '../styles/styles';

const Destaque = () => {
  return (
    <Wrapper>
      <h2>Destaque</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vitae et
        doloremque molestiae velit culpa!
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  grid-column: 3/ 4;
  border-radius: ${styles.borderRadiusDefault};
  background-color: #fff;
  box-shadow: ${styles.boxShadow};
  padding: 1rem 3rem;

  h2 {
    color: ${styles.greenColor};
    margin-top: 1rem;
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
`;
export default Destaque;
