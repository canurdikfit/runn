"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaCircleCheck } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Event from "@/assets/eventimg.png";

export default function Boost() {
  return (
    <div>
      <ul className="grid gap-5 ">
        {ecosystemTaskList.map((items, ki) => (
          <li key={ki}>
            <Drawer>
              <DrawerTrigger asChild>
                <button
                  className={`flex justify-between items-center py-2 ${
                    items.completed && "opacity-30"
                  } w-full`}
                  onClick={(e) => {
                    if (items.completed) {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="flex gap-3">
                    <div className="text-2xl h-14 w-14 flex items-center justify-center bg-primary dark:bg-[#23262D] dark:text-white text-black rounded-xl">
                      {items.type == "invite" && !items.completed && (
                        <HiMiniUserGroup />
                      )}
                      {items.type == "twitter" && !items.completed && (
                        <FaXTwitter />
                      )}
                      {items.type == "discord" && !items.completed && (
                        <FaDiscord />
                      )}
                      {items.type == "telegram" && !items.completed && (
                        <FaTelegramPlane />
                      )}
                      {items.completed && <FaCircleCheck />}
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
                </button>
              </DrawerTrigger>

              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle className="relative h-52 ">
                      <Image src={Event} fill={true} sizes="100%" alt="event" />
                    </DrawerTitle>
                    <DrawerDescription className="text-black dark:text-white">
                      Enetecosystem
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0"></div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <button variant="outline">Cancel</button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
