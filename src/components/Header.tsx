import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import styles, { shakeAnimation } from '../styles/styles';
import { IoSearch, IoNotificationsSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import {
  getCurrentFullDate,
  formatTime,
  formatDayOfTheWeek,
} from '../utils/utils';
import { ICurrentFullDate } from '../interfaces/interfaces';
import employees from '../data/employees';
const Header = () => {
  const [date, setDate] = useState<ICurrentFullDate | null>();
  const [formatedTime, setFormatedTime] = useState<string>('');
  const [formatedDayOfTheWeek, setFormatedDayOfTheWeek] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    setIsLoading(true);
    inputRef.current.focus();
    setDate(getCurrentFullDate());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setFormatedTime(formatTime(date?.horario!));
    setFormatedDayOfTheWeek(formatDayOfTheWeek(date?.diaSemana!));
  }, [isLoading, date]);

  return (
    <Wrapper>
      <IconContext.Provider value={{ className: 'icons-class' }}>
        <div className='container'>
          <div className='header-items'>
            <div className='header-items__input-container'>
              <input ref={inputRef} type='text' placeholder='Pesquisar...' />
              <IoSearch className='icon-search' />
            </div>
            <p className='header-items__date'>
              {`${formatedDayOfTheWeek}, ${date?.dia} de ${date?.mes} de ${date?.ano}, ${formatedTime} `}
            </p>
            <div className='header-items__people'>
              <IoNotificationsSharp className='icon-notification' />
              <div className='people-container'>
                {employees?.map((employe, index) => {
                  const { image } = employe;
                  return <img key={index} src={image} alt='person' />;
                })}
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  max-width: 1200rem;
  margin: 4rem 5rem auto 25rem;

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
      text-align: center;
    }

    &__input-container {
      display: flex;
      align-items: center;

      input {
        width: 100%;
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 1rem 1.5rem;
        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.1);
        border-bottom: 2px solid transparent;
        transition: all 0.5s ease;

        &:focus {
          border-bottom: 2px solid ${styles.colorSecondaryLight};
        }
      }
    }

    &__people {
      justify-self: center;
      display: flex;
      align-items: center;
      gap: 4rem;
      img {
        width: 40px;
        border-radius: 100%;
        border: 3px solid #fff;
      }

      img:not(:first-child){
        margin-left: -10px;
        
      }
    }
  }

  .icons-class {
    font-size: 1.8rem;
    color: ${styles.colorSecondaryLight};
  }

  .icon-search {
    margin-left: -3rem;
  }

  .icon-notification:hover {
    animation: ${shakeAnimation} 0.3s;
  }
`;

export default Header;
