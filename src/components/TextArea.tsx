import React from "react";

function TextArea() {
  return (
    <>
      <label htmlFor="bio">Post:</label>
      <textarea
        row={40}
        name="bio"
        className="textarea textarea-bordered "
        placeholder="Bio"
      ></textarea>
    </>
  );
}

export default TextArea;
