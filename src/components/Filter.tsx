import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const filterOptions = ['startups', 'gadgets', 'greentech'];

type Props = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const SelectContainer = styled.div`
  display: flex;
  margin: 0.5rem;
`;

function Filter({ filter, setFilter }: Props) {
  return (
    <SelectContainer>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {filterOptions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
}

export default Filter;
