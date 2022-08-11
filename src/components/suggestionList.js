import React from "react";
import SuggestionItem from "./suggestionItem";

function SuggestionList({ matchArray, value, addZone }) {
  let list = "";

  if (matchArray && matchArray.length > 0) {
    list = matchArray.map((data, i) => {
      return <SuggestionItem data={data} key={i} addZone={addZone} />;
    });
  }

  return <ul className="suggestionList">{list}</ul>;
}

export default SuggestionList;
