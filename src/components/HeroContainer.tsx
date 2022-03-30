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
  /* border: 1px solid red; */
  margin: 4rem 3rem auto 25rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;

`;
export default HeroContainer;
