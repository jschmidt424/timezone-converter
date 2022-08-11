import React, { useState } from "react";
import "./App.css";
import Search from "./components/search";
import TimezoneGroup from "./components/timezoneGroup";
import moment from "moment-timezone";

function App() {
  const [zoneName, setZoneName] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const addZone = (data) => {
    console.log(data);
    const cityName = data.replace(" ", "_");
    setZoneName(
      cityName
        .split("/")
        .map((data) => data[0].toUpperCase() + data.substr(1).toLowerCase())
        .join("/")
    );
    setInputValue("");
  };

  return (
    <div className="App">
      <h2>TIMEZONE CHECK</h2>
      <Search
        addZone={addZone}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <TimezoneGroup zoneName={zoneName} />
    </div>
  );
}

export default App;
