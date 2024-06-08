"use client";
import React from "react";
import ThemeComponent from "./ThemeComponent";

interface ModalType {
  children: React.ReactNode;
  ModalName: string;
}

function Modal({ children, ModalName }: ModalType) {
  return (
    <div>
      <button
        className="btn"
        // onClick={() => document.getElementById("my_modal_2").showModal()}
        onClick={() => document.getElementById("Modal")!.showModal()}
      >
        {ModalName}
      </button>
      <dialog id="Modal" className="modal">
        <div className="modal-box m-4 p-4">
          {children}
          {/* <form method="dialog" className="modal-backdrop text-black ">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form> */}
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
