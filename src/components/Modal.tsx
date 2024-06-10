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
        <div className="modal-box p-2 m-2">
          {children}
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-white top-2">
              ✕
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
