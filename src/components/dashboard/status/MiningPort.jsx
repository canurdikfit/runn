import React from 'react'

function MiningPort({mining, mined, time, rate}) {
  return (
    <div className="text-center font-bold text-[#989898] flex flex-col justify-between h-full">
    <h3 className="text-center text-[#989898] text-base">
      $FOUND Mined:{" "}
      <span className="dark:text-white text-black">{mined}</span>
    </h3>
    <p className="text-sm">Mining: {mining}</p>
    <p className="text-black dark:text-white text-xs">{time}</p>
    <div className="grid grid-cols-2 items-center gap-3">
      <div className="w-full p-2 rounded-lg bg-black text-white text-xs">
        Mining rate : <span>{rate} FOUND/hr</span>
      </div>
      <button className="w-full p-2 rounded-lg bg-black text-white border dark:border-dark_primary border-primmary text-xs">
        Claim {mined} $FOUND
      </button>
    </div>
  </div>
  )
}

export default MiningPort