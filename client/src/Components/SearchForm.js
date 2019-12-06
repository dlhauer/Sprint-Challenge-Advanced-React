import React from 'react';
import useInput from '../Hooks/useInput';

function SearchForm(props) {

  const [name, setName, handleNameChange] = useInput('');
  const [country, setCountry, handleCountryChange] = useInput('');
  const [searches, setSearches, handleSearchesChange] = useInput('');


  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit fired')
    props.handleChange({
      searchText: {
        name: name,
        country: country,
        num_searches: searches
      }
  })
    // console.log(props.state)
  }
  // console.log(props.state.searchText);

  return (
    <form onSubmit={handleSubmit}className='search-form'>
      <input 
        placeholder='name'
        value={name}
        onChange={(e) => handleNameChange(e.target.value)}  
      />
      <input 
        placeholder='country'
        value={country}
        onChange={e => handleCountryChange(e.target.value)}
      />
      <input
        placeholder='search interest'
        value={searches}
        onChange={e => handleSearchesChange(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchForm;