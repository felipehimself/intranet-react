import styled from 'styled-components';
import User from './User';
const UserContainer = () => {
  return (
    <Wrapper className='container'>
      <User />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
`;
export default UserContainer;
