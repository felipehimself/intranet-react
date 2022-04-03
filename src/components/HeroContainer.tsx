import styled from 'styled-components';
import Hero from './Hero';
import CalendarComponent from './CalendarComponent';
import Destaque from './Destaque';
const HeroContainer = () => {
  return (
    <Wrapper className='container'>
      <Hero />
      <Destaque/>
      <CalendarComponent/>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 5rem;
  justify-content: space-between;

`;
export default HeroContainer;
