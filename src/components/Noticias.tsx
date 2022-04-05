import styles from '../styles/styles';
import styled from 'styled-components';
import noticiasData from '../data/noticias';
import { useState } from 'react';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

const Noticias = () => {
  const [noticias, setNoticias] = useState<string[]>(noticiasData);
  const [index, setIndex] = useState<number>(0);

  const moveToRight = ()=>{
    setIndex((prev)=>((prev+1) === noticias.length? 0 : prev+1))
  }

  const moveToLeft = ()=>{
   setIndex((prev)=> ((prev-1) < 0? noticias.length -1 : prev-1))
  }

  return (
    <Wrapper>
      <h2 className='title'>Notícias</h2>
      <div className='noticias-container'>
        <p className='noticias-container__noticia'>{noticias[index]}</p>
        <IoChevronBack className='icon icon-left' size={22} onClick={moveToLeft} />
        <IoChevronForward className='icon icon-right' size={22} onClick={moveToRight} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  grid-column: 1 / 3;
  border-radius: ${styles.borderRadiusDefault};
  background-color: #fff;
  box-shadow: ${styles.boxShadow};
  padding: 1rem 3rem;
  position: relative;

   .noticias-container {
    margin-top: 1.3rem;

    &__noticia {
      font-size: 1.2rem;
      padding: 0 1rem;
    }
  }

  .icon {
    color: ${styles.greenColor};
    cursor: pointer;

    &-right {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
    }

    &-left {
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
    }
  }
`;
export default Noticias;
