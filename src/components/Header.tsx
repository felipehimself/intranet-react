import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { IoSearch, IoNotificationsSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';

const Header = () => {
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const date = new Date();
    const t =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    setDate(t);
  }, []);

  return (
    <Wrapper>
      <IconContext.Provider value={{ className: 'icons-class' }}>
        <div className='container'>
          <div className='header-items'>
            <div className='header-items__input'>
              <input type='text' placeholder='Pesquisar...' />
              <IoSearch />
            </div>
            {/* Será ajustado para tornar dinâmico */}
            <p className='header-items__date'>
              Segunda-feira, 28 de março de 2022, 21h27
            </p>
            <div className='header-items__icons'>
              <IoNotificationsSharp />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  max-width: 1200rem;
  margin: 4rem 5rem auto 30rem;

  .container {
    width: 100%;
  }

  .header-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 5rem;

    &__date {
      font-size: 1.2rem;
    }

    &__input {
      display: flex;
      align-items: center;

      input {
        width: 100%;
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 1rem 1.5rem;
        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .icons-class {
    font-size: 1.8rem;
    margin-left: -3rem;
    color: #adb5bd;
  }
`;
export default Header;
