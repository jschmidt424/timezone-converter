import React, { useEffect, useRef } from "react";
import moment from "moment-timezone";

function Hour({ zoneName, offset, gmt }) {
  const getNow = () => {
    return parseInt(moment.tz(zoneName).format("HH"));
  };

  const getCurrentTime = () => {
    return moment.tz(zoneName).format("HH:mm");
  };

  const getToday = () => {
    return moment.tz(zoneName).format("DD MMM");
  };

  const getTomorrow = () => {
    return moment.tz(zoneName).add(1, "days").format("DD MMM");
  };

  const getClass = (i) => {
    return `${i === 0 ? "date" : ""} ${i === getNow() ? "today" : ""}`;
  };

  const getDate = (i) => {
    return i === 0 ? (gmt < 0 ? getTomorrow() : getToday()) : i;
  };

  const getHours = () => {
    let hours = [];
    let number = offset < 0 ? 24 + offset : offset;
    for (let i = 0; i < 24; i++) {
      hours.push(
        <span className={`selectable ${getClass(i)}`}>
          {i === 0 ? getToday() : i}
        </span>
      );
    }
    for (let i = 0; i < number; i++) {
      hours.push(<span class={`selectable ${getClass(i)}`}>{getDate(i)}</span>);
    }
    return hours;
  };

  useEffect(() => {
    console.log(div.current);

    new DragSelect({
      selectables: document.querySelectorAll(`.selectable`),
      callback: () => {
        let selected = document.querySelectorAll(".ds-selected");
        let time = null;
        const returnZero = function (number) {
          if (number.classList.contains("date")) {
            return "00";
          }
          return number.textContent;
        };

        if (selected.length === 0) {
          time = getCurrentTime();
        } else if (selected.length === 1) {
          time = returnZero(selected[0]) + ":00";
        } else {
          time =
            returnZero(selected[0]) +
            ":00 - " +
            returnZero(selected[selected.length - 1]) +
            ":00";
        }
        // timeUpdate(time);
      },
    });
  }, [div]);

  return (
    <div className="hoursList">
      <div class="hoursComp">
        <div class="day" ref={div}>
          {getHours()}
        </div>
      </div>
    </div>
  );
}

export default Hour;
