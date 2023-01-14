import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="search"
        value={searchTerm}
        placeholder="Search for a restaurant"
        onChange={handleChange}
      ></input>
    </form>
  );
};
