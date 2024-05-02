"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import Welcome from "@/assets/welcome.svg";
import Kickstarting from "@/assets/kickstarting.svg";
import Mining from "@/assets/mining.svg";
import WelcomePage from "@/components/onboarding/WelcomePage";

function page() {
  const sliderRef = useRef();


  return (
    <main className="px-5 pt-10 min-h-screen">
      <Swiper
        ref={sliderRef}
        effect={"fade"}
        pagination={{
          type: "bullets",
        }}
        // navigation={true}
        modules={[EffectFade, Pagination, Navigation]}
        className="h-full"
      >
        {welcomePage.map((items, i) => (
          <SwiperSlide className="dark:bg-[#131721] bg-[#f5f5f5]" key={i}>
            <WelcomePage
              heading={items.title}
              description={items.description}
              icon={items.icon}
              idx={welcomePage}
              index={i}
              next={sliderRef}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default page;

const welcomePage = [
  {
    title: "Welcome to  Enetecosystem",
    description:
      "A decentralised blockchain ecosystem, building innovative solutions to embrace the rapidly advancing digital landscape",
    icon: Welcome,
  },
  {
    title: "Kickstarting our MVP program",
    description:
      ' Most Valuable Person of the Month/Year" is an exciting program within our ecosystem designed to recognize and reward community members or individual  who actively contribute to the growth and success of the MVP program',
    icon: Kickstarting,
  },
  {
    title: "Mining and Xp",
    description:
      "There are 2 ways you can earn $EN before launching.Through Mining on this App and earning Xp by performing ecosystem tasks",
    icon: Mining,
  },
  {
    title: "Claim a nickname",
    description:
      "your friends can use this name to join",
    icon: false,
  },
];
