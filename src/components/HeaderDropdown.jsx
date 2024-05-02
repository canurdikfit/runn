"use client";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { TbMessage2, TbLogout2 } from "react-icons/tb";
import { BsGlobe, BsTwitterX } from "react-icons/bs";
import {
  MdSecurity,
  MdOutlineLeaderboard,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { useState } from "react";

const HeaderDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <RxDashboard
        className="text-3xl text-dark_primary dark:text-primary"
        onClick={() => setOpen(!open)}
      />
      <ul
        className={`absolute right-0 w-fit min-w-56 rounded-2xl top-12 bg-primary dark:bg-dark_primary px-2 py-6 grid gap-2 transition-all ease-in-out duration-700 ${
          open ? "opacity-100 block scale-100" : "opacity-0 hidden scale-50"
        }`}
      >
        {pushNav.map((items, idx) => (
          <li key={idx}>
            <Link
              href={items.url}
              className="text-black dark:text-white text-base font-medium flex items-center gap-3 p-2 rounded-lg"
            >
              {items.icon}
              <span>{items.title}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/"
            className="text-[#FF4747] text-base font-medium flex items-center gap-3 p-2 rounded-lg"
          >
            <MdOutlineDeleteOutline className="text-2xl" />
            <span>Delete Account</span>
          </Link>
        </li>
        <li className="mt-4">
          <button className="text-black dark:text-white text-base w-full font-medium text-center px-4 py-3 border border-dark_primary dark:border-primary rounded-xl">
            Connect Wallet
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderDropdown;

const pushNav = [
  {
    icon: <TbMessage2 className="text-2xl" />,
    title: "History",
    url: "/",
  },
  {
    icon: <MdOutlineLeaderboard className="text-2xl" />,
    title: "Leaderboard",
    url: "/leaderBoard",
  },
  {
    icon: <MdSecurity className="text-2xl" />,
    title: "KYC",
    url: "/",
  },
  {
    icon: <BsTwitterX className="text-xl" />,
    title: "X-Earn",
    url: "/",
  },
  {
    icon: <BsGlobe className="text-2xl" />,
    title: "Spaces",
    url: "/",
  },
  {
    icon: <TbLogout2 className="text-2xl" />,
    title: "Log Out",
    url: "/",
  },
];
