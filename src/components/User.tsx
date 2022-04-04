import styled from 'styled-components';
import styles from '../styles/styles';
import { IoMail } from 'react-icons/io5';

const User = () => {
  return (
    <Wrapper>
      <div className='user-header'>
        <img
          src='https://randomuser.me/api/portraits/men/31.jpg'
          alt='usuario'
          className='user-header__img'
        />
        <div className='user-header__details'>
          <p>João Gomes</p>
          <span>Gerente de Vendas</span>
        </div>
        <IoMail size={18} className='user-header__icon' />
      </div>

      <div className='user-info'>
        <div className='user-info__title'>
          <p>Data admissão:</p>
          <p>Projetos ativos:</p>
          <p>Reporta-se a:</p>
        </div>
        <div className='user-info__details'>
          <span>01/04/2022</span>
          <span>5</span>
          <span>Gerência Comercial</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: ${styles.borderRadiusDefault};
  box-shadow: ${styles.boxShadow};
  padding: 2rem 2.2rem;
  position: relative;

  .user-header {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 1.5rem;

    &::after {
      content: '';
      display: block;
      background-color: #01cc4e;
      height: 1.3rem;
      width: 1.3rem;
      border-radius: 100%;
      position: absolute;
      left: 4.5rem;
      bottom: 5px;
    }

    &__img {
      display: block;
      height: 6rem;
      border-radius: 100%;
      border: 4px solid #dee2e6a2;
    }

    &__icon {
        position: absolute;
        top: -1.5rem;
        right: 0;
        color: ${styles.greenColor};
        cursor: pointer;
    }

    &__details {
      margin-left: 2rem;
      
      p {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${styles.greenColor};
      }

      span {
        font-size: 1.1rem;
      }
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    &__title {
      font-size: 1.1rem;
      font-weight: bold;
      color: #343a40;
    }

    span {
      display: block;
      font-size: 1.1rem;
      color: #747677;
    }
  }
`;
export default User;
