import React from "react";

function Timezone({ zoneName, offset }) {
  console.log(zoneName, offset);
  const getCity = () => {
    return `${this.currentTimezone}`.split("/").pop().replace("_", " ");
  };
  const getNow = () => {};
  const getToday = () => {};
  const getCountry = () => {};
  const getAbbr = () => {};
  const getOffset = () => {};
  const remove = () => {};
  const timeUpdate = () => {};
  return (
    <div className="timezoneList">
      <div className="timezoneComp"></div>
    </div>
  );
}

export default Timezone;
