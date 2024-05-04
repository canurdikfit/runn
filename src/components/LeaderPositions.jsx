import Image from "next/image";
import React from "react";
import Person from "@/assets/user.png";
import { FaCrown } from "react-icons/fa";

function LeaderPositions() {
  return (
    <>
      <div className="my-3 ">
        <ul className="grid gap-3">
          {rankings.map(
            (ranking, idx) =>
              idx <= 2 && (
                <li
                  key={idx}
                  className={`grid items-center ${idx == 0 && "grid-cols-3"} ${
                    idx == 1 && "grid-cols-2"
                  } ${idx == 2 && "grid-cols-5"} gap-3`}
                >
                  <div
                    className={`flex items-center justify-between ${
                      idx == 0 && "col-span-2 bg-[#268f9b]"
                    } ${idx == 1 && "bg-[#5F37E6]"} ${idx == 2 && "bg-black"} ${
                      idx == 2 && "col-span-2"
                    } p-2 pl-3 rounded-r-3xl`}
                  >
                    <div className="flex items-center">
                      {" "}
                      <span className="font-bold text-sm text-white flex items-center gap-2">
                        {" "}
                        {idx + 1}
                        <FaCrown  className={`text-base ${idx == 0 && 'text-[#F79E1B]'} ${idx == 1 && 'text-[#C0C0C0]'} ${idx == 2 && 'text-[#9c6630]'}`}/>
                      </span>
                      <span className="ml-3 font-semibold text-sm text-white">
                        {Number(ranking.rank).toLocaleString("en-US")}
                      </span>
                    </div>
                    <Image
                      src={Person}
                      width={45}
                      height={45}
                      className="rounded-full border-2 border-white "
                    />
                  </div>
                  <div className={`${idx == 2 && "col-span-3"}`}>
                    <h2 className="text-black dark:text-white font-semibold">
                      {ranking.title}
                    </h2>
                    <p className="text-[#767676] text-sm">
                      {Number(ranking.value).toLocaleString("en-US")} XP
                    </p>
                  </div>
                </li>
              )
          )}
        </ul>
        <li className="py-6 px-5 flex items-center justify-between text-[#939393] font-medium text-sm">
          <p>User</p>
          <p>Global Rank</p>
        </li>
        <ul className="px-5 grid gap-3">
          {rankings.map(
            (ranking, idx) =>
              idx >= 3 && (
                <li
                  key={idx}
                  className="flex items-center justify-between py-2"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={Person}
                      width={45}
                      height={45}
                      className="rounded-full border-2 border-white "
                    />
                    <div>
                      <h2 className="text-black dark:text-white font-semibold mb-1">
                        @{ranking.title}
                      </h2>
                      <span className="font-bold text-sm px-2 py-1 rounded-md bg-primary dark:bg-dark_primary text-black dark:text-white">
                        {" "}
                        {idx + 1}
                      </span>
                    </div>
                  </div>
                  <div className="text-end">
                    <h4 className="font-bold">
                      {" "}
                      {Number(ranking.rank).toLocaleString("en-US")}
                    </h4>
                    <p className="text-[#767676] text-sm">
                      {Number(ranking.value).toLocaleString("en-US")} XP
                    </p>
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="fixed bottom-5 bg-primary dark:bg-dark_primary inset-x-5 p-2 max-h-20 h-full flex items-center justify-between rounded-xl text-xs text-black dark:text-white font-semibold">
        <div className="flex items-center gap-3 flex-nowrap">
          <Image
            src={Person}
            width={45}
            height={45}
            className="rounded-full border-2 border-white "
          />
          <div className="flex items-center gap-3">
            <div className="grid gap-1.5">
              <h3>Referrals</h3> <h3>XP</h3>
            </div>
            <div className="grid gap-1.5">
              <h3>50,000</h3> <h3>5,0000,000 Xp</h3>
            </div>
          </div>
        </div>
        <div className="grid gap-1">
          <div className="grid grid-cols-2 text-center">
            <h3>Position</h3> <h3>Members</h3>
          </div>
          <div className="flex text-center bg-white gap-1 dark:bg-black p-2 rounded-lg">
            <h3>3,450,891</h3>
            <span className="h-full bg-black dark:bg-white w-[1px]"></span>
            <h3>10,500,675</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaderPositions;

const rankings = [
  {
    title: "Amazinglanky",
    rank: "10000",
    value: "5678890",
  },
  {
    title: "Amazinglanky",
    rank: "10000",
    value: "5678890",
  },
  {
    title: "Amazinglanky",
    rank: "10000",
    value: "5678890",
  },
  {
    title: "Amazinglanky",
    rank: "10000",
    value: "5678890",
  },
  {
    title: "Amazinglanky",
    rank: "10000",
    value: "5678890",
  },
  {
    title: "Amazinglanky",
    rank: "10000",
    value: "5678890",
  },
  {
    title: "Amazinglanky",
    rank: "10000",
    value: "5678890",
  },
  {
    title: "Amazinglanky",
    rank: "10000",
    value: "5678890",
  },
  {
    title: "Amazinglanky",
    rank: "10000",
    value: "5678890",
  },
  {
    title: "Amazinglanky",
    rank: "10000",
    value: "5678890",
  },
];
