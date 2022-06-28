import React from "react";
import "./SearchPage.css";
import Button from "@mui/material/Button";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays | 26 august to 30 august | 2 guest</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult 
        img='https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg'
        location='Private room in the center of London'
        title='Stay at this spacious House'
        description='1 guest | 1 bedroom | 1 bed | Wifi | Free parking | Washing'
        star={4.73}
        price='$30 / night'
        total='$890 total'
      />
      <SearchResult 
        img='https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg'
        location='Private room in the center of London'
        title='Stay at this spacious House'
        description='1 guest | 1 bedroom | 1 bed | Wifi | Free parking | Washing'
        star={4.73}
        price='$30 / night'
        total='$890 total'
      />
      <SearchResult 
        img='https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg'
        location='Private room in the center of London'
        title='Stay at this spacious House'
        description='1 guest | 1 bedroom | 1 bed | Wifi | Free parking | Washing'
        star={4.73}
        price='$30 / night'
        total='$890 total'
      />
    </div>
  );
}

export default SearchPage;
