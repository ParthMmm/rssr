import styled from 'styled-components';
import { Icon } from './Bookmark';

const StyledMail = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  fill: none;
  stroke-width: 1.5;
  stroke: black;
`;

type Props = {
  title: string;
  path: string;
};

function MailButton({ title, path }: Props) {
  // const encodedTitle = encodeURIComponent(title);

  // const url = `http://localhost:3000/story/${encodedTitle}`;

  return (
    <>
      <a
        href={`mailto:yourmail@domain.com?subject=${title}&body=${encodeURIComponent(
          path
        )}`}
      >
        <StyledMail>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
          />
        </StyledMail>
      </a>
    </>
  );
}

export default MailButton;
