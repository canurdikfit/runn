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
import { BsGlobe } from "react-icons/bs";
import Image from "next/image";
import Event from "@/assets/eventimg.png";
import Link from "next/link";

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
                  <div className="flex gap-3 items-center">
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
                    <div className="text-left">
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

              <DrawerContent className="max-h-[85vh] overflow-y-scroll after:hidden after:h-0 pb-12">
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    {items?.details?.image && (
                      <DrawerTitle className="relative h-52 ">
                        <Image
                          src={items?.details?.image}
                          fill={true}
                          sizes="100%"
                          alt="event"
                        />
                      </DrawerTitle>
                    )}

                    <DrawerDescription className="text-black dark:text-white flex items-center justify-between pt-2">
                      <h2 className="font-semibold text-base">Enetecosystem</h2>{" "}
                      <span className="text-sm text-[#989898]">
                        Reward: {items?.details?.reward} XP
                      </span>
                    </DrawerDescription>
                    <p className="text-left text-black dark:text-[#989898]">
                      {items?.details?.description}
                    </p>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <ul className="grid gap-5">
                      {items?.details?.tasks.map((tasks, idx) => (
                        <li key={idx}>
                          <Link
                            href={"/"}
                            className={`flex justify-between items-center py-2 ${
                              tasks.completed && "opacity-30"
                            }`}
                            onClick={(e) => {
                              if (tasks.completed) {
                                e.preventDefault();
                              }
                            }}
                          >
                            <div className="flex gap-3 items-center">
                              <div className="text-2xl h-14 w-14 flex items-center justify-center bg-primary dark:bg-[#23262D] dark:text-white text-black rounded-xl">
                                {tasks.type == "website" && <BsGlobe />}
                                {tasks.type == "invite" && <HiMiniUserGroup />}
                                {tasks.type == "twitter" && <FaXTwitter />}
                                {tasks.type == "discord" && <FaDiscord />}
                                {tasks.type == "telegram" && (
                                  <FaTelegramPlane />
                                )}
                              </div>
                              <div>
                                <h4 className="text-base font-semibold">
                                  {tasks.task}
                                </h4>
                              </div>
                            </div>
                            <div className="text-xl">
                              {!tasks.completed ? (
                                <IoIosArrowForward className="text-black dark:text-white" />
                              ) : (
                                <FaCircleCheck className="text-black dark:text-white" />
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <button className=" block bg-black dark:bg-white font-medium text-base p-4 rounded-xl dark:text-black text-white">
                        Completed
                      </button>
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
    details: {
      image: Event,
      title: "Enetecosystem",
      reward: 100000,
      description:
        "E•network/Enetecosystem is a web3 company delivering an extensive array of infrastructural products and technology solutions",
      tasks: [
        {
          task: "Visit Website",
          type: "website",
          completed: true,
        },
        {
          task: "Follow On X (Twitter)",
          type: "twitter",
          completed: true,
        },
        {
          task: "Join Telegram",
          type: "telegram",
          completed: false,
        },
        {
          task: "Join Telegram Channel",
          type: "telegram",
          completed: false,
        },
        {
          task: "Join Discord",
          type: "discord",
          completed: false,
        },
      ],
    },
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
