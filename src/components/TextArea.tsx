import React from "react";

function TextArea() {
  return (
    <>
      <label htmlFor="input">Post:</label>
      <textarea
        className="textarea textarea-bordered "
        placeholder="Bio"
      ></textarea>
    </>
  );
}

export default TextArea;
