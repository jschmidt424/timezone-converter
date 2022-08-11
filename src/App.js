import React, { useState } from "react";
import "./App.css";
import Search from "./components/search";
import Timezone from "./components/timezone";

function App() {
  const addZone = (data) => {
    console.log(data);
    const cityName = data.replace(" ", "_");
    const zoneName = cityName
      .split("/")
      .map((data) => data[0].toUpperCase() + data.substr(1).toLowerCase())
      .join("/");
  };

  return (
    <div className="App">
      <h2>TIMEZONE CHECK</h2>
      <Search addZone={addZone} />
      <Timezone addZone={function (e) {}} />
    </div>
  );
}

export default App;
