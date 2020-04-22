import React from 'react';

const Search = ({ query, updateQuery }) => {
  return (
    <div>
      <input value={query} onChange={(e) => {updateQuery(e.target.value)}}></input>
      {query ? <span>Showing Results for {query}</span> : <span>Showing All Results</span>}
    </div>
  )
}

export default Search;