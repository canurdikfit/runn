import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MiningPort from "./MiningPort";
import SocialPort from "./SocialPort";
import Image from "next/image";
import Spiral from "@/assets/spiral.svg";
import { BiCoinStack } from "react-icons/bi";

export default function StatusBoard() {
  return (
    <>
      <Tabs defaultValue="mining" className="drop-shadow-sm">
        <TabsList className="grid w-full grid-cols-2 p-0">
          <TabsTrigger
            value="mining"
            className="rounded-t-2xl data-[state=active]:bg-gradient-to-t data-[state=active]:from-[#cecece] data-[state=active]:dark:from-dark_primary font-semibold"
          >
            Mining
          </TabsTrigger>
          <TabsTrigger
            value="social"
            className="rounded-t-2xl data-[state=active]:bg-gradient-to-t data-[state=active]:from-[#cecece] data-[state=active]:dark:from-dark_primary font-semibold"
          >
            Social Xps
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="mining"
          className="relative h-48 z-10 -top-1.5 rounded-2xl bg-primary dark:bg-dark_primary px-5 pt-6 pb-3"
        >
          <MiningPort
            mined={"49.500,71"}
            mining={"6"}
            time={"19hrs  23m  12s"}
            rate={"0.25"}
          />
          <Image
            src={Spiral}
            fill={true}
            sizes="100%"
            alt="background z-0"
            className="object-cover dark:invert opacity-5"
          />
        </TabsContent>
        <TabsContent
          value="social"
          className="relative h-48 z-10 -top-1.5 rounded-2xl bg-primary dark:bg-dark_primary px-5 py-3"
        >
          <SocialPort
            earned={"35,545,700"}
            claimed={"35.500.000"}
            referral={"500.000"}
            surf={"45.700"}
            multiplier={"10"}
          />
          <Image
            src={Spiral}
            fill={true}
            sizes="100%"
            alt="background z-0"
            className="object-cover dark:invert opacity-5"
          />
        </TabsContent>
      </Tabs>
      <div className="fixed bottom-3 z-50 bg-primary dark:bg-dark_primary py-4 text-center inset-x-3 rounded-xl md:rounded-full max-w-md mx-auto grid gap-2 text-white">
        <button className="flex items-center gap-2 py-4 px-7 rounded-full bg-black text-white mx-auto">
          Start Mining <BiCoinStack className="shrink-0 text-lg" />
        </button>
        {"19hrs  23m  12s"}
      </div>
    </>
  );
}
