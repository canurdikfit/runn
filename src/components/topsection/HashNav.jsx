import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

function HashNav({ page }) {
  return (
    <div className="flex items-center gap-5 fixed z-50 left-0 px-5 inset-x-0 top-0 pt-10 pb-5 dark:bg-[#131721] bg-[#f5f5f5]">
      <Link href={"/dashboard"} className="text-xl text-black dark:text-white">
        {" "}
        <FaArrowLeftLong />
      </Link>
      <p className="font-semibold text-black dark:text-white capitalize text-lg">{page}</p>
    </div>
  );
}

export default HashNav;
