import ReturnHeader from '@/components/ReturnHeader'
import TrackPositions from '@/components/TrackPositions'
import Image from 'next/image'
import React from 'react'

const Leaderboard = () => {
    return (
        <main className='pt-20 pb-32'>
            <ReturnHeader page='leaderboard' push='/dashboard' />
            <div className="container">
                <div className="leader-banner">
                    <div className="header-container-img">
                        <Image src='/profile.png' height={35} width={35} alt="profile" />
                    </div>
                    <h3 className="font-normal text-xs">
                        You are doing better than 80% of <br />
                        others
                    </h3>
                </div>
            </div>
            <TrackPositions />
        </main>
    )
}

export default Leaderboard