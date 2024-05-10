import React from 'react'

type SocialInfo = {
    earned: number
    claimed: number
    referral: number
    surf: number
    multiplier: number
}

const SocialStats = (props: SocialInfo) => {
    return (
        <div className="text-center font-bold text-[#989898] relative z-10 flex flex-col justify-between h-full pb-3">
            <h3 className="text-center text-[#989898] text-base">
                Total Social XP Earned:{" "}
                <span className="dark:text-white text-black">{props.earned}</span>
            </h3>
            <p className="text-[15px] font-bold">
                Claimed Xp:{" "}
                <span className="dark:text-white text-black">{props.claimed}</span>
            </p>
            <p className="text-[15px] font-bold">
                Referral Xp:{" "}
                <span className="dark:text-white text-black">{props.referral}</span>
            </p>
            <p className="text-[15px] font-bold">
                Surf Xp: <span className="dark:text-white text-black"> {props.surf}</span>
            </p>
            <p className="text-[15px] font-bold">
                Multiplier:{" "}
                <span className="dark:text-white text-black">{props.multiplier}% </span>
            </p>
        </div>
    )
}

export default SocialStats