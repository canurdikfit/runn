"use client";
import React from "react";
import { FaTrophy } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { useToast } from "@/components/ui/use-toast";
import { BsCopy } from "react-icons/bs";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from "next/link";

type OverviewContent = {
    users: number
    referrals: number
    rank: number
    referralCode: string
}

const Overview = (props: OverviewContent) => {
    const { toast } = useToast();

    return (
        <div className="overview-container">
            <div className="flex items-center justify-between">
                <div className="bg-white/15 text-white p-2 rounded-md">
                    <FaTrophy />
                </div>
                <Link href='/dashboard/leaderboard'> <div className="flex items-center gap-2 text-[#ABABAB] font-semibold">
                    <HiMiniUserGroup />
                    {props.users}
                </div></Link>
            </div>
            <div className="px-10 mt-2 h-full flex flex-col">
                <div className="grid grid-cols-2">
                    <div>
                        <span className="text-[#ABABAB] text-base">Referrals</span>
                        <h2 className="text-white mt-1">{props.referrals}</h2>
                    </div>
                    <div>
                        <span className="text-[#ABABAB] text-base">Global Rank</span>
                        <h2 className="text-white mt-1">{props.rank}</h2>
                    </div>
                </div>
                <CopyToClipboard
                    text={props.referralCode}
                    onCopy={() => {
                        toast({
                            title: "Referral Code: " + props.referralCode,
                            description: "You have successfully copied your referral code",
                        });
                    }}
                >
                    <button className="mt-auto flex items-center gap-1 text-left text-white text-sm">
                        <span className="shrink-0">Referral Code:</span> {props.referralCode}{" "}
                        <BsCopy />
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default Overview