"use client";

import React, { useState } from "react";

function ThemeComponent() {
  const [theme, setTheme] = useState("light");

  function clickHandler(event: any) {
    setTheme(event.target.value);
  }

  return (
    <>
      <h1>Current Theme: {theme}</h1>
      <label htmlFor="themeSwitcher">Select a Theme:</label>
      <select
        name="themeSwitcher"
        onChange={clickHandler}
        value={theme}
        className="select w-full max-w-xs"
      >
        <option value={"light"}>Light</option>
        <option value={"dark"}>Dark</option>
        <option value={"cyberpunk"}>Cyberpunk</option>
        <option value={"coffee"}>Coffee</option>
      </select>
    </>
  );
}

export default ThemeComponent;
