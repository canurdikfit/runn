import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

type NavSystem = {
    page: string
    push: string
}

const ReturnHeader = (props: NavSystem) => {
    return (
        <div className="return-header">
            <Link href={props.push} className="text-xl">
                <FaArrowLeftLong />
            </Link>
            <p className="font-semibold capitalize text-lg">{props.page}</p>
        </div>
    )
}

export default ReturnHeader