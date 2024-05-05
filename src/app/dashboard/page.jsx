import Overview from "@/components/dashboard/Overview";
import Task from "@/components/dashboard/task/Task";
import StatusBoard from "@/components/dashboard/status/StatusBoard";
import Link from "next/link";
import { HiMiniUserGroup } from "react-icons/hi2";

function page() {
  return (
    <main className="px-5 md:px-10 lg:px-20 pt-24 pb-40 dark:bg-[#131721] bg-[#f5f5f5]">
      <StatusBoard />
      <div className="mt-5">
        <h3 className="font-semibold mb-2">Overview</h3>
        <Overview
          rank={"10"}
          referrals={"16"}
          users={"100"}
          referralCode={"gzrhjtw5"}
        />
      </div>
      <div className="my-8">
        <Link
          href={"/referral"}
          className="bg-primary dark:bg-dark_primary border border-dashed border-[#b3b2b280] flex py-3 px-4 rounded-xl items-center gap-3"
        >
          <div className="bg-[#f5f5f5] dark:bg-[#23262D] p-3 rounded-lg">
            <HiMiniUserGroup className="text-2xl text-black dark:text-white" />
          </div>
          <div>
            <h3 className="text-base">Invite Friends</h3>
            <p className="text-[10px] text-[#989898]">
              The more users you refer , the more $FOUND you earn
            </p>
          </div>
        </Link>
      </div>
      <Task />
    </main>
  );
}

export default page;
