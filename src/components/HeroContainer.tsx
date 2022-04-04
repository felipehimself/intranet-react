import styled from 'styled-components';
import Hero from './Hero';
import CalendarComponent from './CalendarComponent';
import Destaque from './Destaque';
import User from './User';
const HeroContainer = () => {
  return (
    <Wrapper className='global-container'>
      <Hero />
      <User/>
      <CalendarComponent/>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 21.3rem;
  gap: 5rem;
  justify-content: space-between;

`;
export default HeroContainer;
