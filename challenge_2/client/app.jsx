import React, { useState, useEffect } from 'react';
import { ajax } from 'jquery';
import moment from 'moment';
import HistoricalChart from './HistoricalChart';

const App = () => {
  const [data, setData] = useState([]);
  const [timespan, setTimespan] = useState(3600);

  const filteredData = (input) => {
    const minDate =  moment().subtract(input, "months").format("YYYY-MM-DD");
    const filtered = data.filter((el) => el.date.toString() > minDate);
    return filtered;
  }

  const getHistoricalData = () => {
    ajax({
      method: "GET",
      url: "hisoricalData",
      contentType: "application/json",
      success: (data) => { setData(data); },
      error: (err) => { console.log(err); }
    });
  }

  useEffect(() => { getHistoricalData(); }, []);

  const handleChange = (event) => { setTimespan(event.target.value); }

  return (
    <div>
      <h1>Powered by CoinDesk</h1>
      <HistoricalChart data={filteredData(timespan)} />
        <label>
          Select a time interval to filter results
          <select value={timespan} onChange={handleChange}>
            <option value={3600}>All</option>
            <option value={12 * 5}>5 years</option>
            <option value={12 * 2}>2 years</option>
            <option value={12}>1 year</option>/option>
            <option value={1}>1 month</option>
          </select>
        </label>
    </div>
  );
}

export default App;