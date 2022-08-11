import React, { useState } from "react";
import "./App.css";
import Search from "./components/search";
import Timezone from "./components/timezone";

function App() {
  const [city, setCity] = useState("");
  const selectCity = (selectedCity) => {
    setCity(selectedCity);
  };
  return (
    <div className="App">
      <h2>TIMEZONE CHECK</h2>
      <Search onSelect={selectCity} />
      <Timezone addZone={function (e) {}} />
    </div>
  );
}

export default App;
