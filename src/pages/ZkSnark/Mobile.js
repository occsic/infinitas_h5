import React, { useState } from "react"
import "./Mobile.css"
import MHeader from "../../componentM/Header"
import MFooter from "../../componentM/Footer"
import about from "../../static/about.png"

export default function ZkSnarkMobile() {
    const [showIndex, setShowIndex] = useState(0)



    return (
        <div>
            <MHeader activeIndex={"2"} />
        
            <MFooter activeIndex={"2"} />
        </div>
    )
}
