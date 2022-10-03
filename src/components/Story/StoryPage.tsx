import { useRouter } from 'next/router';
import { getFeed } from '../../lib/feed';
import { useQuery } from '@tanstack/react-query';
import { Item } from '../../lib/types';
import Loader from '../Loader';
import styled from 'styled-components';
import striptags from 'striptags';
import { device } from '../../styles/device';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import utc from 'dayjs/plugin/utc';
import Bookmark from './Actions/Bookmark';
import { StoryActions, Tag, TagContainer } from './Story';
import MailButton from './Actions/MailButton';
import TweetButton from './Actions/TweetButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 3rem auto 1rem auto;
  width: 80%;

  @media ${device.lg} {
    width: 60%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;

  @media ${device.md} {
    font-size: 3rem;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const allowedTags = [
  'div',
  'a',
  'p',
  'h1',
  'h2',
  'strong',
  'li',
  'ul',
  'em',
  'blockquote',
];

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(advancedFormat);

function StoryPage({}) {
  const { query, asPath } = useRouter();
  const filter = query?.filter as string;
  const title = query?.title as string;

  const path = `${process.env.NEXT_PUBLIC_LOCAL_URL}${asPath}`;

  const { data, isLoading } = useQuery(
    ['feed', filter],
    () => getFeed(filter),
    {
      staleTime: 60 * 1000,
    }
  );

  const story: Item = data?.find((item: Item) => {
    if (item?.title?._text === title) {
      return item;
    }
  });

  if (isLoading || !story) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (story) {
    return (
      <Container>
        <Header>
          <Title>{story.title._text}</Title>
          <div>
            <div>{story.author._cdata}</div>
            <div>
              {dayjs(story.date._text).format('MMMM D, YYYY  hh:mm a z ')}
            </div>
          </div>
        </Header>
        <StoryActions>
          <Bookmark story={story} />
          <MailButton title={story.title._text} path={path} />
          <TweetButton path={path} />
        </StoryActions>

        <div>
          {story.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={story?.image} alt='cover image' loading='lazy' />
          )}
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: striptags(story?.content, allowedTags),
          }}
        />
        {/* <div
            dangerouslySetInnerHTML={{
              __html: story?.content,
            }}
          /> */}
        <TagContainer>
          {story.tags.map((tag) => {
            return <Tag key={tag._cdata}>#{tag._cdata}</Tag>;
          })}
        </TagContainer>
      </Container>
    );
  }
  return null;
}

export default StoryPage;
