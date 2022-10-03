import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const StoryFeed = dynamic(() => import('../components/Story/StoryFeed'), {
  ssr: false,
});

const Home: NextPage = ({}) => {
  return (
    <>
      <Head>
        <title>avoma</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <StoryFeed />
      </main>
    </>
  );
};

export default Home;
