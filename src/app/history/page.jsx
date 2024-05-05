import React from "react";
import { BiRedo } from "react-icons/bi";
import { IoTelescopeOutline } from "react-icons/io5";

function page() {
  return (
    <main className="pt-20 min-h-screen dark:bg-[#131721] bg-[#f5f5f5]">
      <div className="mt-8 md:py-14 bg-primary dark:bg-dark_primary rounded-t-3xl px-5 md:px-10 lg:px-20 py-6">
        <h4 className="font-semibold mb-4 ">Today</h4>
        <div>
          <ul className="grid gap-2 ">
            {historyActivities.map((history, i) => (
              <li className="p-3 dark:bg-[#23262D] bg-[#f5f5f5] rounded-lg flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 text-3xl ${
                      history.type == "referral" &&
                      "bg-[#E2DEF0] text-[#5F37E6]"
                    } ${
                      history.type == "leaderboard" &&
                      "bg-[#D5EEF0] text-[#14BBCC]"
                    } w-fit rounded-md`}
                  >
                    {history.type == "referral" && <BiRedo />}
                    {history.type == "leaderboard" && <IoTelescopeOutline />}
                  </div>
                  <div className="max-w-48">
                    <h3 className="text-sm font-medium">{history.activity}</h3>
                    <span className="text-xs text-[#989898]">
                      {new Date().toLocaleDateString("en-US", {
                        //   hour: "2-digit",
                        //   minute: "2-digit",
                        dateStyle: "full",
                      })}
                    </span>
                  </div>
                </div>
                {history.type == "referral" && (
                  <h3 className="text-sm font-semibold">{history.value} XP</h3>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default page;

const historyActivities = [
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "referral",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "leaderboard",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "leaderboard",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "referral",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "referral",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "referral",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "leaderboard",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "leaderboard",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "referral",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "leaderboard",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "leaderboard",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "referral",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "referral",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "referral",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "leaderboard",
  },
  {
    activity: "Johcee joined using your referral link",
    value: "1234",
    date: 1212,
    type: "leaderboard",
  },
];
