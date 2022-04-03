import styled from 'styled-components';
import styles from '../styles/styles';
const User = () => {
  return (
    <Wrapper>
      <div className='user'>
        <img
          src='https://randomuser.me/api/portraits/men/31.jpg'
          alt='usuario'
          className='user__img'
        />
        <div className='user__details'>
          <p>João Gomes</p>
          <span>Gerente de Vendas</span>
        </div>
      </div>

      <div className='user-info'>
        {/* <table>
          <tr>
            <td>Data admissão:</td>
            <td>01/04/2022</td>
          </tr>
          <tr>
            <td>Projetos ativos:</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Reporta-se a:</td>
            <td>Gerência</td>
          </tr>
        </table> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: ${styles.borderRadiusDefault};
  padding: 1rem 2rem;
  position: relative;

  .user {
    position: relative;
    display: flex;
    align-items: center;

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

    &__details {
      margin-left: 2rem;
      p {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
      }

      span {
        font-size: 1.1rem;
      }
    }
  }
`;
export default User;
