import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <input
      className="searchInput"
      value={searchTerm}
      placeholder="Search for a restaurant"
      onChange={handleChange}
    ></input>
  );
};
