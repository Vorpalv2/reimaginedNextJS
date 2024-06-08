"use client";
import React, { ReactNode } from "react";

function Modal({ children }: any) {
  return (
    <div>
      <button
        className="btn"
        // onClick={() => document.getElementById("my_modal_2").showModal()}
        onClick={() => document.getElementById("loginModal")!.showModal()}
      >
        Login
      </button>
      <dialog id="loginModal" className="modal">
        <div className="modal-box">
          {/* <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p> */}
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default Modal;