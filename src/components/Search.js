import React, { useState } from 'react'
import "./Search.css"
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Button } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

//Date picker component
const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  const handelSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate)
  }

  return (
    <div className='search'>
        <DateRangePicker ranges={
        [selectionRange]} 
        onChange={handelSelect} />
        <h2>
            Number of guests
            <PeopleIcon />
        </h2>
        <input min={0}
        defaultValue={2}
        type="number" />
        <Button>Search Airbnb</Button>
    </div>
  )
}

export default Search
