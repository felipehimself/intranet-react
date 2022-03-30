import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
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
    border-radius: 1rem;
    border: none;
    padding: 0.8rem;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.1);

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
