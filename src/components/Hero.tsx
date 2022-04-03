import styled from 'styled-components';
import styles from '../styles/styles';
const Hero = () => {
  return (
    <Wrapper>
      <div className='title-container'>
        <span className='title-container__welcome'>Bem-vindo,</span>
        <span className='title-container__user'> João</span>
        <p className='title-container__msg'>
          Administre suas tarefas, reuniões, projetos e muito mais em um único
          dashboard.
        </p>
      </div>
      <div className='image-container'>
        <img
        loading='lazy'
          src={`https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?t=st=1648683521~exp=1648684121~hmac=280e35da2d0ae2a0f38ad1855490a3fbc925edfcea40c2b6311d48999c07c0f5&w=996`}
          alt=''
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-column: 1 / 3;
  border-radius: ${styles.borderRadiusDefault};
  background-color: #fff;
  box-shadow: ${styles.boxShadow};
  padding: 1rem 3rem;
  display: flex;
  gap: 1.5rem;

  .title-container {
    width: 50%;
    align-self: center;
    margin-top: -2.5rem;
    &__welcome {
      font-size: 2.5rem;
      font-weight: bold;
      color: ${styles.greenColor};
    }

    &__user {
      font-size: 2.5rem;
      color: ${styles.greenColor};
    }

    &__msg {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
  }

  .image-container {
    width: 50%;

    img {
      display: block;
      width: 100%;
    }
  }
`;
export default Hero;
