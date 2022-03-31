import styled from 'styled-components';
import Hero from './Hero';
import CalendarComponent from './CalendarComponent';
const HeroContainer = () => {
  return (
    <Wrapper>
      <Hero />
      <CalendarComponent/>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  max-width: 150rem;
  margin: 4rem 3rem auto 25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 5rem;
  justify-content: space-between;

`;
export default HeroContainer;
