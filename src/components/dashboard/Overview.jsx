import React from "react";
import { FaTrophy } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";

function Overview({ users, referrals, rank, referralCode }) {
  return (
    <div className="h-40 bg-gradient-to-br px-4 py-3 from-black rounded-2xl to-black/60 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="bg-white/15 p-2 rounded-md">
          <FaTrophy />
        </div>
        <div className="flex items-center gap-2 text-[#ABABAB] font-semibold">
          <HiMiniUserGroup />
          {users}
        </div>
      </div>
      <div className="px-10 mt-2 h-full flex flex-col">
        <div className="grid grid-cols-2">
          <div>
            <span className="text-[#ABABAB] text-base">Referrals</span>
            <h2 className="font-bold text-white text-2xl mt-1">{referrals}</h2>
          </div>
          <div>
            <span className="text-[#ABABAB] text-base">Global Rank</span>
            <h2 className="font-bold text-white text-2xl mt-1">{rank}</h2>
          </div>
        </div>
        <button className="mt-auto inline-block text-left text-sm">
          Referral Code: {referralCode}
        </button>
      </div>
    </div>
  );
}

export default Overview;
