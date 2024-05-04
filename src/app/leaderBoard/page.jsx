import Link from "next/link";
import React from "react";
import Profile from "@/assets/profile.png";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import LeaderPositions from "@/components/LeaderPositions";

export default function page() {
  return (
    <main className="pt-10 min-h-screen dark:bg-[#131721] bg-[#f5f5f5]">
      <div className="px-5">
        <div className="flex items-center gap-5">
          <Link href={"/onboarding"} className="text-xl">
            {" "}
            <FaArrowLeftLong />
          </Link>
          <p className="font-semibold text-black dark:text-white">
            Leaderboard
          </p>
        </div>

        <div className="flex items-center gap-4 bg-primary dark:bg-dark_primary my-7 p-2 rounded-xl">
          <div className="h-14 w-14 rounded-lg bg-[#14BBCC] flex items-center justify-center">
            <Image src={Profile} height={35} width={35} alt="profile" />
          </div>
          <h3 className="text-base font-normal text-[#969696]">
            You are doing better than 80% of <br />
            others
          </h3>
        </div>
      </div>
      <LeaderPositions />
    </main>
  );
}
