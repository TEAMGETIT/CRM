import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './SearchBox.scss';

function SearchBox({ name, placeholder, onSubmit }) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <TextField
        type="text"
        name={name}
        placeholder={placeholder}
        variant="outlined"
        size="small"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBox;
