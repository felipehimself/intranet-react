import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import styles from '../styles/styles';
const CalendarComponent = () => {
  return (
    <Wrapper>
      <Calendar className={['calendar']} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-self: right;

  .calendar {
    max-width: 23rem;
    border-radius: 5px;
    border: none;
    padding: 0.8rem;
    box-shadow: ${styles.boxShadow};

  }

  .react-calendar__navigation__label {
    font-size: 1rem;
  }

  .react-calendar__month-view__days__day {
    font-size: 1.1rem;
    line-height: 8px;
  }
`;
export default CalendarComponent;
