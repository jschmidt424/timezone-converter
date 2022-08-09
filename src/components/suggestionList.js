import React from "react";

function SuggestionList(props) {
  let list = "";

  console.log(props.matchArray);

  if (props.matchArray && props.matchArray.length > 0) {
    list = props.matchArray.map((data, i) => {
      const regex = new RegExp(props.value, "gi");
      let timezoneName = data.replace(
        regex,
        `<span className="highlight">${props.value}</span>`
      );
      return `
                <li className= "suggestionItem" data-zone="${data}" key = "${i}">
                <span className="listTimezone">${timezoneName}</span></li>
            `;
    });
  }

  return <>{list}</>;
}

export default SuggestionList;
