import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiCoinStack } from "react-icons/bi";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { TiFlash } from "react-icons/ti";
import SocialXps from "./SocialXps";
import Events from "./Events";
import Boost from "./Boost";

function Task() {
  return (
    <Tabs defaultValue="socialXps" className="drop-shadow-sm">
      <div className="p-2.5 dark:bg-dark_primary bg-primary mb-5 rounded-xl">
        <TabsList className="grid w-full grid-cols-3 p-0 h-full dark:bg-[#23262D] rounded-xl bg-[#EBEBEB]">
          <TabsTrigger
            value="socialXps"
            className="rounded-xl font-semibold text-[#ABABAB] dark:text-[#ABABAB] text-sm data-[state=active]:bg-[#131721] data-[state=active]:text-white data-[state=active]:dark:text-white"
          >
            <BiCoinStack className="shrink-0 text-lg" />
            Mining
          </TabsTrigger>
          <TabsTrigger
            value="events"
            className="rounded-xl font-semibold text-[#ABABAB] dark:text-[#ABABAB] text-sm data-[state=active]:bg-[#131721] data-[state=active]:text-white data-[state=active]:dark:text-white"
          >
            <RiArrowRightDoubleLine className="shrink-0 text-lg" />
            Social Xps
          </TabsTrigger>
          <TabsTrigger
            value="boost"
            className="rounded-xl font-semibold text-[#ABABAB] dark:text-[#ABABAB] text-sm data-[state=active]:bg-[#131721] data-[state=active]:text-white data-[state=active]:dark:text-white"
          >
            <TiFlash className="shrink-0 text-lg" />
            Social Xps
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent
        value="socialXps"
        className="rounded-2xl bg-white dark:bg-dark_primary drop-shadow-sm px-5 py-6 min-h-[500px]"
      >
        <SocialXps />
      </TabsContent>
      <TabsContent
        value="events"
        className="rounded-2xl bg-white dark:bg-dark_primary drop-shadow-sm px-5 py-6 min-h-[500px]"
      >
        <Events />
      </TabsContent>
      <TabsContent
        value="boost"
        className="rounded-2xl bg-white dark:bg-dark_primary drop-shadow-sm px-5 py-6 min-h-[500px]"
      >
        <Boost />
      </TabsContent>
    </Tabs>
  );
}

export default Task;
