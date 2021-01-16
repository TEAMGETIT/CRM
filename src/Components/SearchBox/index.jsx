import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './SearchBox.scss';

function SearchBox({ name, placeholder, onSubmit }) {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="d-flex">
      <TextField
        type="text"
        name={name}
        placeholder={placeholder}
        variant="outlined"
        size="small"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="btn__search">Search</button>
    </div>
  );
}

export default SearchBox;
