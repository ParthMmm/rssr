import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getFeed } from '../../lib/feed';
import { Item } from '../../lib/types';
import { device } from '../../styles/device';
import Loader from '../Loader';
import Story from './Story';
import Filter from '../Filter';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  margin: 24px auto;
  width: 100%;

  justify-items: center;

  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
  }
`;

function StoryFeed({}) {
  const [filter, setFilter] = useState('startups');

  const { data, isLoading } = useQuery(
    ['feed', filter],
    () => getFeed(filter),
    {
      staleTime: 60 * 1000,
    }
  );

  return (
    <>
      <Container>
        <Filter filter={filter} setFilter={setFilter} />
        {isLoading ? (
          <Loader />
        ) : (
          <Grid>
            {data?.map((item: Item) => {
              return (
                <Story
                  item={item}
                  key={item?.id?._text}
                  filter={filter}
                ></Story>
              );
            })}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default StoryFeed;
