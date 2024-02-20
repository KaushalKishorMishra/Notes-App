import React from "react"
import { MdFactCheck } from "react-icons/md"

interface ActiveListProps {
    state?: boolean
    title?: string
    dataContent?: string
}


const ActiveList: React.FC<ActiveListProps> = ({ state, title, dataContent }) => {
    return (
        <li className={`step ${state ? "step-success" : ""}`} data-content={`${dataContent}`}>
            {title}
        </li>
    )
}

export default ActiveList