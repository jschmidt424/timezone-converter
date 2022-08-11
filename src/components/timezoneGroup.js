import React from "react";
import Timezone from "./timezone";
import Hour from "./hour";
import moment from "moment-timezone";

function TimezoneGroup(zoneName) {
  let defaultOffset = 0;

  const setDefault = (zoneName = moment.tz.guess()) => {
    defaultOffset = moment.tz(zoneName).utcOffset() / 60;
    console.log(defaultOffset);
  };
  setDefault();
  const getGMT = (zoneName) => {
    return moment.tz(zoneName).utcOffset() / 60;
  };
  const getOffset = (zoneName) => {
    let displayOffset = defaultOffset - getGMT(zoneName);
    let difference =
      displayOffset < 1
        ? `${displayOffset}`.replace("-", "+")
        : "-" + displayOffset;
    return difference;
  };
  console.log(getOffset());
  console.log(zoneName);

  return (
    <>
      <Timezone zoneName={zoneName} offset={getOffset()} />
      <Hour />
    </>
  );
}

export default TimezoneGroup;
