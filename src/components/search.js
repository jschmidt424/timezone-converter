import React, { useState } from "react";
import moment from "moment-timezone";

function Search(props) {
  const timeZoneDb = Object.keys(moment.tz._zones)
    .map((data) => data.replace("_", "/"))
    .map((data) => data.replace("_", " "));
  console.log(timeZoneDb);

  const [input, setInput] = useState("");

  const inputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length > 0) {
      findMatches(e.target.value);
    }
  };

  let matchArray = [];

  const findMatches = (typeWord) => {
    const regex = new RegExp(typeWord, "gi");
    matchArray = timeZoneDb
      .filter((timezone) => timezone.match(regex))
      .slice(0, 10);
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
      <ul className="suggestionList"></ul>
    </div>
  );
}

export default Search;
