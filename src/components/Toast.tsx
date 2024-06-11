import React from "react";

interface toastInterface {
  toastClass: string;
  toastMessage: string;
}

// function addHiddenClass() {
//   setTimeout(() => {
//     console.log("welcome");
//     return "invisible text-green-400";
//   }, 4000);
// }

function Toast({ toastClass, toastMessage }: toastInterface) {
  return (
    <div className="toast">
      <div className={`alert ${toastClass}`}>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}

export default Toast;
