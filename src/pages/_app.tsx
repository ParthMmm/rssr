import { Suspense, useState } from 'react';
import Loader from '../components/Loader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '../components/Layout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import type { AppProps } from 'next/app';

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{
  dehydratedState: unknown;
  session: Session;
}>) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  );
};

export default MyApp;
