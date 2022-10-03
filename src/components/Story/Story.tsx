import { Item } from '../../lib/types';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import utc from 'dayjs/plugin/utc';
import Link from 'next/link';
import Bookmark from './Actions/Bookmark';
import styled from 'styled-components';
import { device } from '../../styles/device';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 0.25rem;
  border-radius: 0.5rem;
  width: 20rem;
  height: auto;

  @media ${device.md} {
    width: 22rem;
  }
  @media ${device.lg} {
    width: 28rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
`;

const Date = styled.div`
  font-weight: 300;
  color: gray;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;
`;

export const Tag = styled.div`
  border-radius: 0.5rem;
  padding: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const StoryActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 0.5rem;
`;

type Props = {
  item: Item;
  filter: string;
};

function Story({ item, filter }: Props) {
  dayjs.extend(timezone);
  dayjs.extend(utc);
  dayjs.extend(advancedFormat);

  return (
    <>
      <Container>
        {item.image && (
          <ImageWrapper>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item?.image} alt='cover image' loading='lazy' />
          </ImageWrapper>
        )}
        <div>
          <Title>
            <Link
              href={{
                // pathname: `/story/${encodeURIComponent(item.title._text)}`,
                pathname: `/story/[title]`,

                query: { title: item.title._text, filter: filter },
              }}
            >
              <a>{item.title._text}</a>
            </Link>
          </Title>
          <div>{item.author._cdata}</div>
          <Date>
            {dayjs(item.date._text).format('MMMM D, YYYY  hh:mm a z ')}
          </Date>
          <StoryActions>
            <Bookmark story={item} />
          </StoryActions>
        </div>

        <TagContainer>
          {item.tags.slice(0, 3).map((tag) => {
            return <Tag key={tag._cdata}>#{tag._cdata}</Tag>;
          })}
        </TagContainer>
      </Container>
    </>
  );
}

export default Story;
