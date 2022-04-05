import styled from 'styled-components';
import Noticias from './Noticias';
import Reuniões from './Reuniões';
const GeneralContainer = () => {
  return (
    <Wrapper className='global-container'>
      <Noticias />
      <Reuniões/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 21.3rem;
  gap: 5rem;
`;
export default GeneralContainer;
