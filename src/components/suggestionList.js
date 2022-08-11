import React from "react";
import moment from "moment-timezone";
import SuggestionItem from "./suggestionItem";

function SuggestionList(matchArray, value, addZone) {
  let list = "";
  if (matchArray && matchArray.length > 0) {
    list = matchArray.map((data, i) => {
      const regex = new RegExp(value, "gi");
      // let timezoneName = data.replace(
      //   regex,
      //   <span className="highlight">{value}</span>
      // );
      return <SuggestionItem data={data} key={i} addZone={addZone} />;
    });
  }

  return <ul className="suggestionList">{list}</ul>;
}

export default SuggestionList;
