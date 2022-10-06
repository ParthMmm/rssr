import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import StoryFeed from '../src/components/Story/StoryFeed';

const queryClient = new QueryClient();

describe('StoryFeed', () => {
  test('loader on first render', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <StoryFeed />
      </QueryClientProvider>
    );

    await screen.findByText('loading');

    expect(screen.getByText('loading')).toBeInTheDocument();
  });
});
