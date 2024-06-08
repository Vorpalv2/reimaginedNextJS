import React from "react";

function ThemeComponent() {
  return (
    <ul className="menu bg-base-200 w-56 rounded-box">
      <li>
        {/* <details open> */}
        <summary>Select Theme : {"3"}</summary>
        <ul>
          <li>
            <div className="form-control">
              <label className="label cursor-pointer gap-4">
                <span className="label-text">Aqua</span>
                <input
                  type="radio"
                  name="theme-radios"
                  className="radio theme-controller"
                  value="aqua"
                />
              </label>
            </div>
          </li>
          <li>
            <div className="form-control">
              <label className="label cursor-pointer gap-4">
                <span className="label-text">Cyberpunk</span>
                <input
                  type="radio"
                  name="theme-radios"
                  className="radio theme-controller"
                  value="cyberpunk"
                />
              </label>
            </div>
          </li>
          <li>
            <div className="form-control">
              <label className="label cursor-pointer gap-4">
                <span className="label-text">Valentine</span>
                <input
                  type="radio"
                  name="theme-radios"
                  className="radio theme-controller"
                  value="valentine"
                />
              </label>
            </div>
          </li>
          {/* <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
        </ul>
        {/* </details> */}
      </li>
    </ul>
  );
}

export default ThemeComponent;
