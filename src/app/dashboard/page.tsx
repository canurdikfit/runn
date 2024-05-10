import Header from '@/components/Header'
import Overview from '@/components/dashboard/Overview'
import Status from '@/components/dashboard/Status'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiCoinStack } from "react-icons/bi";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { TiFlash } from "react-icons/ti";
import Link from 'next/link'
import React from 'react'
import { HiMiniUserGroup } from 'react-icons/hi2'
import TwitterProfile from '@/components/dashboard/TwitterProfile';
import Tasks from '@/components/dashboard/task/Tasks';
import Events from '@/components/dashboard/task/Events';
import Boost from '@/components/dashboard/task/Boost';

const Dashboard = () => {
    return (
        <main className='container pt-20 pb-10'>
            <Header />
            <Status />
            <Overview
                rank={10}
                referrals={16}
                users={100}
                referralCode={"gzrhjtw5"} />
            <div className="my-8">
                <Link
                    href={"/dashboard/referral"}
                    className="referral-container"
                >
                    <div className="bg-[#f5f5f5] dark:bg-[#23262D] p-3 rounded-lg">
                        <HiMiniUserGroup className="text-2xl text-black dark:text-white" />
                    </div>
                    <div>
                        <h3>Invite Friends</h3>
                        <p className="text-[10px] text-[#989898]">
                            The more users you refer , the more $FOUND you earn
                        </p>
                    </div>
                </Link>
            </div>
            <Tabs defaultValue="socialXps" className="drop-shadow-sm">
                <div className="tasktab-container">
                    <TabsList className="tasktab-container-tabcontroller">
                        <TabsTrigger
                            value="socialXps"
                            className="tasktab-container-tabcontroller-tab data-[state=active]:bg-[#131721] data-[state=active]:text-white data-[state=active]:dark:text-white"
                        >
                            <BiCoinStack className="shrink-0 text-lg" />
                            Tasks
                        </TabsTrigger>
                        <TabsTrigger
                            value="events"
                            className="tasktab-container-tabcontroller-tab data-[state=active]:bg-[#131721] data-[state=active]:text-white data-[state=active]:dark:text-white"
                        >
                            <RiArrowRightDoubleLine className="shrink-0 text-lg" />
                            Events
                        </TabsTrigger>
                        <TabsTrigger
                            value="boost"
                            className="tasktab-container-tabcontroller-tab data-[state=active]:bg-[#131721] data-[state=active]:text-white data-[state=active]:dark:text-white"
                        >
                            <TiFlash className="shrink-0 text-lg" />
                            Boosts
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent
                    value="socialXps"
                    className="tasktab-container-content"
                >
                    <Tasks />
                </TabsContent>
                <TabsContent
                    value="events"
                    className="tasktab-container-content"
                >
                    <Events />
                </TabsContent>
                <TabsContent
                    value="boost"
                    className="tasktab-container-content"
                >
                    <Boost />
                </TabsContent>
            </Tabs>
            <TwitterProfile />
        </main>
    )
}

export default Dashboard