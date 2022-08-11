import React, { useState } from "react";
import moment from "moment-timezone";
import SuggestionList from "./suggestionList";

function Search({ addZone, inputValue, setInputValue }) {
  const timeZoneDb = Object.keys(moment.tz._zones)
    .map((data) => data.replace("_", "/"))
    .map((data) => data.replace("_", " "));
  console.log(timeZoneDb);

  const [input, setInput] = useState("");
  const [matchValue, setMatchValue] = useState([]);

  const inputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length > 0) {
      findMatches(e.target.value);
    }
  };

  const findMatches = (typeWord) => {
    const regex = new RegExp(typeWord, "gi");
    let matchArray = timeZoneDb
      .filter((timezone) => timezone.match(regex))
      .slice(0, 10);
    setMatchValue(matchArray);
  };

  return (
    <div className="search">
      <input
        type="text"
        name="searchInput"
        className="searchInput"
        value={input}
        onChange={inputChange}
      />
      <input type="submit" name="search" value="search" />
      {inputValue && (
        <SuggestionList
          matchArray={matchValue}
          value={inputValue}
          addZone={addZone}
        />
      )}
    </div>
  );
}

export default Search;
