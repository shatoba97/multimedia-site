import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import { SearchRowType } from './SearchRow.type';

const SearchRow: FC<SearchRowType> = ({ searchChange }) => {
  const [searchValue, setSearchValue] = useState('');
  const searchChangeFn = () => {
    searchChange(searchValue);
  };

  return (
    <div className='input-group'>
      <div className='form-outline'>
        <input
          type='search'
          id='form1'
          value={searchValue}
          className='form-control'
          placeholder='Search'
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
      <button
        id='search-button'
        type='button'
        className='btn btn-primary'
        onClick={searchChangeFn}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchRow;
