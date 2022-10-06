import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSession } from 'next-auth/react';
import * as nextAuthReact from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Story from '../src/components/Story/Story';
import Bookmark from '../src/components/Story/Actions/Bookmark';
import { act } from '@testing-library/react';

const queryClient = new QueryClient();
jest.mock('next-auth/react');

describe('Story', () => {
  test('expect image to be shown', async () => {
    useSession.mockReturnValue({
      data: {
        user: {
          name: 'tester',
          image: '',
        },
      },
      status: 'authenticated',
    });
    const item = {
      title: {
        _text: 'test title',
      },
      image:
        'https://techcrunch.com/wp-content/uploads/2022/10/GettyImages-1324553313.jpg',
      date: {
        _text: '2021-01-01',
      },
      author: {
        _cdata: 'test author',
      },
      tags: [
        {
          _cdata: 'test tag',
        },
        {
          _cdata: 'test tag 2',
        },
      ],
    };
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <Story item={item} filter={'startups'} />
        </QueryClientProvider>
      );
    });

    await screen.getByRole('img');
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  test('expect image to not be shown with null url', async () => {
    useSession.mockReturnValue({
      data: {
        user: {
          name: 'tester',
          image: '',
        },
      },
      status: 'authenticated',
    });
    const item = {
      title: {
        _text: 'test title',
      },
      image: null,
      date: {
        _text: '2021-01-01',
      },
      author: {
        _cdata: 'test author',
      },
      tags: [
        {
          _cdata: 'test tag',
        },
        {
          _cdata: 'test tag 2',
        },
      ],
    };

    render(
      <QueryClientProvider client={queryClient}>
        <Story item={item} filter={'startups'} />
      </QueryClientProvider>
    );

    const img = screen.queryByRole('img');
    expect(img).not.toBeInTheDocument();
  });
});

describe('Story', () => {
  test('expect bookmark to be disabled', async () => {
    useSession.mockReturnValue({
      data: {
        user: null,
      },
      status: 'unauthenticated',
    });
    const item = {
      title: {
        _text: 'test title',
      },
      image:
        'https://techcrunch.com/wp-content/uploads/2022/10/GettyImages-1324553313.jpg',
      date: {
        _text: '2021-01-01',
      },
      author: {
        _cdata: 'test author',
      },
      tags: [
        {
          _cdata: 'test tag',
        },
        {
          _cdata: 'test tag 2',
        },
      ],
    };

    render(
      <QueryClientProvider client={queryClient}>
        <Bookmark story={item} filter={'startups'} />
      </QueryClientProvider>
    );

    const BookmarkButton = await screen.getByTestId('bookmarkButton');

    expect(BookmarkButton).toHaveProperty('disabled');
    expect(BookmarkButton).toBeDisabled();
  });

  test('expect bookmark button to not be disabled', async () => {
    useSession.mockReturnValue({
      data: {
        user: {
          name: 'tester',
          image: '',
        },
      },
      status: 'authenticated',
    });
    const item = {
      title: {
        _text: 'test title',
      },
      image:
        'https://techcrunch.com/wp-content/uploads/2022/10/GettyImages-1324553313.jpg',
      date: {
        _text: '2021-01-01',
      },
      author: {
        _cdata: 'test author',
      },
      tags: [
        {
          _cdata: 'test tag',
        },
        {
          _cdata: 'test tag 2',
        },
      ],
    };

    render(
      <QueryClientProvider client={queryClient}>
        <Bookmark story={item} />
      </QueryClientProvider>
    );
    const BookmarkButton = await screen.getByTestId('bookmarkButton');

    expect(BookmarkButton).toHaveProperty('disabled', false);
    expect(BookmarkButton).not.toBeDisabled();
  });
});
