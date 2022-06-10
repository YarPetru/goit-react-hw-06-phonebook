import { nanoid } from 'nanoid';

const Filter = ({ onInputChange, filter }) => {
  const inputFilterId = nanoid();
  return (
    <label htmlFor={inputFilterId}>
      <input
        id={inputFilterId}
        value={filter}
        type="text"
        name="filter"
        title="Find contacts by name"
        required
        onChange={onInputChange}
      />
    </label>
  );
};
export default Filter;
