import styled from 'styled-components';
import styles from '../styles/styles';
import reunioes from '../data/reunioes';
const Reuniões = () => {
  return (
    <Wrapper>
      <h2 className='title'>Reuniões</h2>
      <div className='reuniao-container'>
        {reunioes.map((reuniao, index) => {
          const { data, desc } = reuniao;
          return (
            <div className='reunioes'>
              <div>
                <p className='data'>{data.slice(0, 2)}</p> <span></span>
              </div>
              <div>
                <p className='descricao'>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-column: 3 /5;
  border-radius: ${styles.borderRadiusDefault};
  background-color: #fff;
  box-shadow: ${styles.boxShadow};
  padding: 1rem 2rem;
  position: relative;

  .reuniao-container {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    .reunioes {
    display: flex;
    gap: 1rem;
    align-items: center;

    .data {
      font-size: 1.8rem;
      height: 25px;
      background-color: ${styles.greenColor};
      padding: 0 5px;
      color: #fff;
      border-radius: ${styles.borderRadiusDefault};
    }
  }

  .descricao {
    font-size: 1.5rem;
  }
  }

  
`;
export default Reuniões;
