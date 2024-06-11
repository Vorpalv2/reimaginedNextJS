"use client";
import React, { useState, useEffect } from "react";

interface toastInterface {
  toastClass: string;
  toastMessage: string;
}

function Toast({ toastClass, toastMessage }: toastInterface) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="toast">
      <div
        className={`alert ${toastClass} ${
          !isVisible ? "invisible text-green-400" : ""
        }`}
      >
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}

export default Toast;
