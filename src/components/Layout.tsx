import { ReactNode } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const Container = styled.div`
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

function Layout({ children }: Props) {
  return (
    <>
      <Container>
        <Navbar />
        {children}
      </Container>
    </>
  );
}

export default Layout;
