

import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';
import EventItem from './EventItem';
import Search from './Search';

const App = ({ limit }) => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState("")

  const loadCommentsFromServer = (q = "") => {
    $.ajax({
      url: `http://localhost:3000/events?q=${q}`,
      data: { limit, offset, },
      dataType: 'json',
      type: 'GET',
      success: (data) => {
        setData(data.slice(offset, Math.min(offset + 10, data.length)));
        setPageCount( Math.ceil( data.length / limit ) );
      },
      error: (err) => { console.log(err); },
    });
  }

  const handlePageClick = ({ selected }) => { const offset = Math.ceil(selected * 10); setOffset(offset); };

  const updateQuery = (query) => { setOffset(0); setPageCount(1); setQuery(query); }

  useEffect(() => { loadCommentsFromServer(query); }, [offset, query]);

  return (
    <div className="commentBox">
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
      < Search query={query} updateQuery={updateQuery} />
      {data.length ? data.map((event, index) => { return <EventItem key={index} event={event} />}) : <div>No results</div>}
    </div>
  );
}

export default App;