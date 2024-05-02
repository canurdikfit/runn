import React from "react";

function SocialPort({ earned, claimed, referral, surf, multiplier }) {
  return (
    <div className="text-center font-bold text-[#989898] flex flex-col justify-between h-full pb-3">
      <h3 className="text-center text-[#989898] text-base">
        Total Social XP Earned:{" "}
        <span className="dark:text-white text-black">{earned}</span>
      </h3>
      <p className="text-[15px] font-bold">
        Claimed Xp:{" "}
        <span className="dark:text-white text-black">{claimed}</span>
      </p>
      <p className="text-[15px] font-bold">
        Referral Xp:{" "}
        <span className="dark:text-white text-black">{referral}</span>
      </p>
      <p className="text-[15px] font-bold">
        Surf Xp: <span className="dark:text-white text-black"> {surf}</span>
      </p>
      <p className="text-[15px] font-bold">
        Multiplier:{" "}
        <span className="dark:text-white text-black">{multiplier}% </span>
      </p>
    </div>
  );
}

export default SocialPort;
