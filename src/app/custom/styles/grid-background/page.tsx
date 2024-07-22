import React from "react";

function GridBackground() {
  return (
    <>
      <div className="absolute inset-0 z-1 h-screen max-w-full mx-10 grid grid-cols-12 text-[#000000] grid-flow-col gap-4 border-dotted bg-[#E1DFDD] p-8 rounded-lg">
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
        <div className="gap-4 border-r border-l border-zinc-400 border-dashed"></div>
      </div>
      <div className="relative z-99 text-[24vh] font-bold">
        <h1 className="text-right pr-[16rem]  h-[28vh]">
          <span className="bg-blue-800 text-white rounded-lg px-4 ">Al</span>
          an
        </h1>
        <h1 className="text-middle pl-[16rem] h-[28vh]">Bouteiller</h1>
      </div>
    </>
  );
}

export default GridBackground;
