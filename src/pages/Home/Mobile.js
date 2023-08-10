import React from "react"
import "./Mobile.css"
import MHeader from "../../componentM/Header"
import about from "../../static/about.png"

export default function InfinitasHomeMobile() {
    const standContent = [
        { img: about, title: "POW PROTECTION", sub: "It ensures that Infinitas assets are protected by the whole-network hash rate in the Bitcoin blockchain, enhancing the security of assets." },
        { img: about, title: "POW PROTECTION", sub: "It ensures that Infinitas assets are protected by the whole-network hash rate in the Bitcoin blockchain, enhancing the security of assets." },
        { img: about, title: "POW PROTECTION", sub: "It ensures that Infinitas assets are protected by the whole-network hash rate in the Bitcoin blockchain, enhancing the security of assets." },
    ]

    return (
        <div>
            <MHeader />
            <div id="home" className="content content-home">
                <div className="content-home-title">BASED ON BITCOIN PROVIDE INFINITELY SCALABLE POWER FOR WEB 3.0</div>
                <div className="content-home-subtitle">TO MEET THE VALUE PURSUIT OF 100 MILLION PEOPLE WHO ARE FASTER, TRUER AND SAFER</div>
                <div className="content-home-start">
                    <div className="content-home-startCont">START</div>
                </div>
            </div>
            <div id="about" className="content content-about">
                <div className="content-about-title">ABOUT US</div>
                <div className="content-about-subtitle">
                    INFINITAS IS A TURING-COMPLETE BITCOIN APPLICATION ECOSYSTEM WITH INFINITE SCALABILITY. INFINITAS WILL CREATE THE NEXT GENERATION OF BITCOIN LARGE-SCALE APPLICATION SCENARIOS.
                </div>
                <div className="flex-row">
                    <img className="content-about-icon" src={about} />
                    <div className="content-about-subcontent">
                        Combining the mutual support and complement of the Lightning Network and the RGB protocol, Infinitas can achieve a more efficient and scalable Bitcoin ecosystem. Make Bitcoin
                        greater again.
                    </div>
                </div>
                <div className="flex-row">
                    <img className="content-about-icon" src={about} />
                    <div className="content-about-subcontent">
                        Create a fairer decentralized crypto world for miners, verifiers, node service providers, exchanges, and users. In the future, hundreds of millions of economic participants
                        will be active in the ecosystem to create value.
                    </div>
                </div>
            </div>
            <div id="stand" className="content-stand">
                <div className="content-stand-title">WE STAND FOR</div>
                <div className="content-stand-content flex-row">
                    {standContent.map((i, ind) => (
                        <div key={ind} className="standitem">
                            <dvi className="standitem-title">{i.title}</dvi>
                            <dvi className="standitem-sub">{i.sub}</dvi>
                            <img className="standitem-img" src={i.img} />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}
