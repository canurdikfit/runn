import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MiningPort from "./MiningPort";
import SocialPort from "./SocialPort";

export default function StatusBoard() {
  return (
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
        className="h-48 z-10 relative -top-1.5 rounded-2xl bg-primary dark:bg-dark_primary px-5 pt-6 pb-3"
      >
        <MiningPort
          mined={"49.500,71"}
          mining={"6"}
          time={"19hrs  23m  12s"}
          rate={"0.25"}
        />
      </TabsContent>
      <TabsContent
        value="social"
        className="h-48 z-10 relative -top-1.5 rounded-2xl bg-primary dark:bg-dark_primary px-5 py-3"
      >
        <SocialPort earned={'35,545,700'} claimed={'35.500.000'} referral={'500.000'} surf={'45.700'} multiplier={'10'}/>
      </TabsContent>
    </Tabs>
  );
}
