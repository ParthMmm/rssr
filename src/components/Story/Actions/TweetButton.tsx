import styled from 'styled-components';
import { Icon } from './Bookmark';

const StyledTwitter = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  fill: none;
  stroke-width: 1.5;
  stroke: black;
`;

type Props = {
  path: string;
};
function TweetButton({ path }: Props) {
  // const encodedTitle = encodeURIComponent(title);

  // const url = `http://localhost:3000/story/${title}`;
  return (
    <>
      <a
        // class='twitter-share-button'
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          path
        )}`}
      >
        <StyledTwitter>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
          />
        </StyledTwitter>
      </a>
    </>
  );
}

export default TweetButton;