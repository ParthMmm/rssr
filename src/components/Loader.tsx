import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function Loader({}) {
  return (
    <Container>
      <div>
        <div>loading</div>
      </div>
    </Container>
  );
}

export default Loader;
