import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSession } from 'next-auth/react';
import * as nextAuthReact from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Navbar from '../src/components/Navbar';

const queryClient = new QueryClient();

jest.mock('next-auth/react');

describe('Navbar', () => {
  test('username, image, and sign out button to render', async () => {
    useSession.mockReturnValue({
      data: {
        user: {
          name: 'Tester1234',
          image: 'https://avatars.githubusercontent.com/u/22553650?v=4',
        },
      },
      status: 'authenticated',
    });
    render(
      <QueryClientProvider client={queryClient}>
        <Navbar />
      </QueryClientProvider>
    );

    await screen.getByRole('navigation');

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Tester1234')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  test('sign in button to render', async () => {
    useSession.mockReturnValue({
      data: {
        user: null,
      },
      status: 'unauthenticated',
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Navbar />
      </QueryClientProvider>
    );

    await screen.getByRole('navigation');
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
