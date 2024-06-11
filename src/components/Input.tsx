import React from "react";

function Input() {
  return (
    <>
      <label htmlFor="input">Title:</label>
      <input
        name="input"
        type="text"
        placeholder="Type here"
        className="input input-bordered input-primary w-full max-w-xs"
      />
    </>
  );
}

export default Input;
