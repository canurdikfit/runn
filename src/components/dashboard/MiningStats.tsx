import React from 'react'
import { Button } from '../ui/button'

type Mining = {
    mined: number
    mining: number
    time: string
    rate: number
}

const MiningStats = (props: Mining) => {
    return (
        <div className="mining-stats">
            <h3>
                $FOUND Mined:{" "}
                <span>{props.mined}</span>
            </h3>
            <p>Mining: {props.mining}</p>
            <p>{props.time}</p>
            <div>
                <div className="tag">
                    Mining rate : <span>{props.rate} FOUND/hr</span>
                </div>
                <Button className="tag">
                    Claim {props.mined} $FOUND
                </Button>
            </div>
        </div>)
}

export default MiningStats;