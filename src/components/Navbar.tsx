import styled from 'styled-components';
import { useSession, signIn, signOut } from 'next-auth/react';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid black;
  border-radius: 0.5rem;
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 100vh;
  padding: 0 1.25rem;
`;

const InnerNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`;

const ProfileImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

const Button = styled.button`
  border: 2px solid black;
  border-radius: 0.5rem;
  padding: 0.25rem;
`;

function Navbar({}) {
  const { data: session } = useSession();

  const AuthButton = () => {
    if (session?.user) {
      return (
        <ProfileContainer>
          {session?.user?.image && (
            <ProfileImage
              src={session?.user?.image}
              loading='lazy'
              alt='profile Image'
            />
          )}

          {session?.user?.name}
          <Button
            onClick={() => {
              signOut();
              localStorage.removeItem('rssr.store');
            }}
          >
            Sign out
          </Button>
        </ProfileContainer>
      );
    }
    return (
      <>
        <Button onClick={() => signIn()}>Sign in</Button>
      </>
    );
  };
  return (
    <nav>
      <Container>
        <InnerContainer>
          <InnerNav>
            <Title>
              <a href={'/'}>rssr</a>
            </Title>

            <div>{AuthButton()}</div>
          </InnerNav>
        </InnerContainer>
      </Container>
    </nav>
  );
}

export default Navbar;
