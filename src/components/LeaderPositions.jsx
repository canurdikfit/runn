import Image from "next/image";
import React from "react";
import Person from "@/assets/user.png";

function LeaderPositions() {
  return (
    <div className="mt-3">
      <ul className="grid gap-3">
        {leaderScores.map(
          (items, idx) =>
            idx <= 2 && (
              <li
                key={idx}
                className={`grid items-center ${idx == 0 && "grid-cols-3"} ${
                  idx == 1 && "grid-cols-2"
                } ${idx == 2 && "grid-cols-5"} gap-3`}
              >
                <div
                  className={`flex items-center justify-between ${
                    idx == 0 && "col-span-2 bg-[#15BDCF]"
                  } ${idx == 1 && "bg-[#5F37E6]"} ${
                    idx == 2 && "bg-black"
                  } ${idx == 2 && "col-span-2"} p-2 pl-3 rounded-r-3xl`}
                >
                  <div>
                    {" "}
                    <span className="font-bold text-sm text-white">
                      {" "}
                      {idx + 1}
                    </span>
                    <span className="ml-3 font-semibold text-sm text-white">
                      {items.rank}
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
                    {items.title}
                  </h2>
                  <p className="text-[#767676] text-sm">{items.value} XP</p>
                </div>
              </li>
            )
        )}
      </ul>
      <li className="py-6 px-5 flex items-center justify-between text-[#939393] font-medium text-sm">
        <p>User</p>
        <p>Global Rank</p>
      </li>
      <ul className="px-5">
        {leaderScores.map(
          (items, idx) =>
            idx >= 3 && (
              <li key={idx}>
                {idx}
                {items.rank}
                {items.value}
                {items.title}
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default LeaderPositions;

const leaderScores = [
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
