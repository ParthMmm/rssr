import { useMemo, useState } from 'react';
import { Item } from '../../../lib/types';
import styled from 'styled-components';
import { useAppPersistStore } from '../../../store/app';
import { useSession } from 'next-auth/react';

type TStyledBookmark = {
  active: boolean;
};

export const Icon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 24 24',
})``;

export const BookmarkButton = styled.button``;

const StyledBookmark = styled(Icon)<TStyledBookmark>`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${(props) => (props.active ? 'black' : 'none')};
  stroke-width: 1.5;
  stroke: black;
`;

function Bookmark({ story }: { story: Item }) {
  const [active, setActive] = useState(false);
  const bookmarks = useAppPersistStore((state) => state.bookmarks);
  const addBookmark = useAppPersistStore((state) => state.addBookmark);
  const removeBookmark = useAppPersistStore((state) => state.removeBookmark);
  const { data: session } = useSession();

  useMemo(
    () => setActive(bookmarks?.includes(story.title._text)),
    [bookmarks, story.title._text]
  );

  const handleClick = () => {
    if (!active) {
      addBookmark(story.title._text);
      setActive((prev) => !prev);
    }
    if (active) {
      removeBookmark(story.title._text);
      setActive((prev) => !prev);
    }
  };

  return (
    <BookmarkButton
      onClick={handleClick}
      disabled={!session?.user}
      aria-label='bookmark'
      data-testid='bookmarkButton'
    >
      <StyledBookmark active={active}>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
        />
      </StyledBookmark>
    </BookmarkButton>
  );
}

export default Bookmark;
