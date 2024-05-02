"use client";
import Link from "next/link";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

function SocialXps() {
  return (
    <div>
      <h5 className="text-center font-semibold">Simple task for more Xp`s</h5>
      <ul className="grid gap-5 mt-8">
        {ecosystemTaskList.map((items, ki) => (
          <li key={ki}>
            <Link
              href={"/"}
              className={`flex justify-between items-center ${
                items.completed && "opacity-30"
              }`}
              onClick={(e) => {
                if (items.completed) {
                  e.preventDefault();
                }
              }}
            >
              <div className="flex gap-3">
                <div className="text-2xl p-4 bg-primary dark:bg-[#23262D] dark:text-white text-black rounded-xl">
                  {items.type == "invite" && <HiMiniUserGroup />}
                  {items.type == "twitter" && <FaXTwitter />}
                  {items.type == "discord" && <FaDiscord />}
                  {items.type == "telegram" && <FaTelegramPlane />}
                </div>
                <div>
                  <h4 className="text-base font-semibold">{items.name}</h4>
                  <p className="text-sm text-[#767676] font-semibold">
                    {items.completed ? (
                      "Completed"
                    ) : (
                      <span>+{items.reward} XP</span>
                    )}
                  </p>
                </div>
              </div>
              <div>
                {!items.completed && (
                  <IoIosArrowForward className="text-black dark:text-white" />
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialXps;

const ecosystemTaskList = [
  {
    name: "Invite 10 Friends",
    reward: 10000,
    link: "/",
    type: "invite",
    completed: false,
  },
  {
    name: "Follow On X(Twitter)",
    reward: 2000,
    link: "https://twitter.com/Enetecosystem",
    type: "twitter",
    completed: true,
  },
  {
    name: "Join Telegram Channel",
    reward: 2000,
    link: "https://t.me/enetecosystem",
    type: "telegram",
    completed: false,
  },
  {
    name: "Join Telegram",
    reward: 2000,
    link: "https://t.me/enetworkchannel",
    type: "telegram",
    completed: false,
  },
  {
    name: "Join Discord",
    reward: 2000,
    link: "https://discord.gg/RQqVWPxuwq",
    type: "discord",
    completed: false,
  },
];
