import React from "react"
import "./Mobile.css"
import MHeader from "../../componentM/Header"
import about from "../../static/about.png"
import { useState } from "react"

export default function InfinitasHomeMobile() {
    const [showIndex, setShowIndex] = useState(0)
    const [yearIndex, setYearIndex] = useState(1)

    const standContent = [
        { img: about, title: "POW PROTECTION", sub: "It ensures that Infinitas assets are protected by the whole-network hash rate in the Bitcoin blockchain, enhancing the security of assets." },
        { img: about, title: "ADAPTER TECHNOLOGY", sub: "Through Infinitas adapter technology, users can realize the complete status of Bitcoin and enhance their perception of asset status." },
        {
            img: about,
            title: "PRIVACY PRESERVING+++",
            sub: "A higher level of privacy protection for Infinitas assets has been achieved, and a trustless Bitcoin anchoring mechanism has been introduced to further enhance user privacy.",
        },
        {
            img: about,
            title: "ENRICHED GLOBAL STATE",
            sub: "Extended Global State, which is critical for building complex applications (such as synthetic assets, algorithmic stablecoins, etc.) on RGB. Make the RGB contract have a global state that can be accessed by virtual machines and clients (such as wallets, etc.).",
        },
        {
            img: about,
            title: "OPTIMIZING THE LIGHTNING NETWORK",
            sub: "Through improvements to the Lightning Network (such as light block technology, node automatic expansion technology, and offline autonomy), higher transaction throughput is achieved while maintaining low-latency transaction confirmation time.",
        },
    ]
    const solutionsContent = [
        {
            img: about,
            title: "SLR (SECURITY-LIGHTING-RGB) PROTOCOL",
            sub: "RGB and Lightning Network are re-encapsulated, and a transaction data of the client and a UTXO of Bitcoin are sealed at one time. The smart contracts of the RGB protocol only function in the client-side verification paradigm, keeping asset data in a state outside of the blockchain or Lightning Network.",
        },
        {
            img: about,
            title: "RZK (RECURSIVE ZERO KNOWLEDGE)",
            sub: "RZK=Z0(...Zn-2(Zn-2,Zn-1)Zn . The verifier does not need to verify the block from scratch, but only needs to download the current block for simple verification. The latest block will include the proof from the founding block to the current block.",
        },
        {
            img: about,
            title: "FATLINE PROTOCOL",
            sub: "Fatline Protocol is a lightweight communication + storage protocol between RGB clients. It is compatible with the Nostr protocol to achieve efficient communication between nodes. The communication speed can reach more than 10 times that of Storm+Bifrost.",
        },
    ]

    const overallContent = [
        { title: "APPLICATION LAYER", subList1: ["DeFi", "NFT Marketplace", "Decentralized Identity"], subList2: ["Gaming", "Infrastructure", "Others"] },
        {
            title: "PRODUCT LAYER",
            subList1: ["Contract Development Test Suites DApps Development Tools", "DApps Integrated Development Environment Other Extension Tools"],
            subList2: ["Ecosystem Entrance: Wallet", "Data Tools: Data Explorer"],
        },

        { title: "SCHEMAS LAYER", subList1: ["Synthetic Assets Schemas", "GameFi Schemas", "Other Schemas"], subList2: ["DEX Schemas", "Staking Schemas", "Lending Schemas"] },
        { title: "NETWORK LAYER", subList1: ["Infinitas Testnet", "Infinitas Mainnet"] },
        { title: "PROTOCOL LAYER", subList1: ["Lightning Network Node", "RGB Node", "Communication/Storage Node"] },
        { title: "DATA LAYER", subList1: ["LNP/BP Association", "Open Source Toolchain", "Fundamental Document Repository"] },
    ]

    const roadmapData = [
        {
            year: "2021",
            bgc: about,
            yearData: [
                { yejiao: "Q1", textList: ["2021Q1", "20"] },
                { yejiao: "Q2", textList: ["2021Q2", "20"] },
                { yejiao: "Q3", textList: ["2021Q3", "20"] },
                { yejiao: "Q4", textList: ["2021Q4", "20"] },
            ],
        },
        {
            year: "2022",
            bgc: about,
            yearData: [
                { yejiao: "Q1", textList: ["Paraluni TVL reaches $50M+"] },
                { yejiao: "Q2", textList: ["RGB v0.10 released", "Community followers reached 50K+", "Infinitas seed round launched"] },
                { yejiao: "Q3", textList: ["2021Q3", "20"] },
                { yejiao: "Q4", textList: ["2021Q4", "20"] },
            ],
        },
        {
            year: "2023",
            bgc: about,
            yearData: [
                { yejiao: "Q1", textList: ["2021Q1", "20"] },
                { yejiao: "Q2", textList: ["2021Q2", "20"] },
                { yejiao: "Q3", textList: ["2021Q3", "20"] },
                { yejiao: "Q4", textList: ["2021Q4", "20"] },
            ],
        },
        {
            year: "2024",
            bgc: about,
            yearData: [
                { yejiao: "Q1", textList: ["2021Q1", "20"] },
                { yejiao: "Q2", textList: ["2021Q2", "20"] },
                { yejiao: "Q3", textList: ["2021Q3", "20"] },
                { yejiao: "Q4", textList: ["2021Q4", "20"] },
            ],
        },
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

            <div id="focus" className="content content-focus">
                <div className="content-focus-title">FOCUS</div>
                <div className="flex-row mb-10">
                    <div className="flex-column flex-1 fl-ai-center mr-10 content-focus-view">
                        <div className="focus-main">16K</div>
                        <div className="tac focus-sub">DAILY ACTIVE WALLET ADDRESSES</div>
                    </div>
                    <div className="flex-column flex-1 fl-ai-center content-focus-view">
                        <div className="focus-main">100K+</div>
                        <div className="tac focus-sub">COMMUNITY FOLLOWERS</div>
                    </div>
                </div>
                <div className="flex-column fl-ai-center content-focus-view">
                    <div className="focus-main">4 YEARS+</div>
                    <div className="focus-sub">RGB RESEARCH</div>
                    <div className="focus-sub">EXPERIENCE</div>
                </div>
            </div>

            <div id="solutions" className="content content-solutions">
                <div className="content-solutions-title">SOLUTIONS</div>

                <div className="solutionsItem">
                    <div className="solutionsItem-title">{solutionsContent[showIndex].title}</div>
                    <div className="solutionsItem-line"></div>
                    <div className="flex-row fl-ai-center">
                        <div className="solutionsItem-sub">{solutionsContent[showIndex].sub}</div>
                        <div className="solutionsItem-ver flex-column">
                            {solutionsContent.map((i, ind) => (
                                <div
                                    onClick={() => {
                                        setShowIndex(ind)
                                    }}
                                    className={`ver ${showIndex == ind ? "red" : ""}`}
                                    key={ind}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <img className="solutionsItem-img" src={solutionsContent[showIndex].img} />
                </div>
            </div>

            <div id="overall" className="content-overall">
                <div className="content-overall-title">OVERALL</div>
                <div className="content-overall-title">ARCHITECTURE</div>
                <div className="content-overall-main">
                    {overallContent.map((allItem, index) => (
                        <div key={index} className="overallList flex-row">
                            <div className={`overallList-title flex-column fl-jc-center ${index >= 3 ? "w120" : ""}`}>{allItem.title}</div>
                            <div>
                                <div className="overallList-subList1">
                                    {allItem.subList1.map((subitem, ind) => (
                                        <div className="overallsub-item" key={ind}>
                                            {subitem}
                                        </div>
                                    ))}
                                </div>
                                {allItem.subList2 ? (
                                    <div className="overallList-subList1 mt-10">
                                        {allItem.subList2.map((subitem, ind) => (
                                            <div className="overallsub-item" key={ind}>
                                                {subitem}
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="roadmap" className="content">
                <div className="content-roadmap-title">ROADMAP</div>
                <div className="roadmap-main flex-row">
                    {roadmapData[yearIndex].yearData.map((i, ind) => (
                        <div className="yearData-view" style={{ background: `url(${roadmapData[yearIndex].bgc}) no-repeat`, backgroundSize: "cover" }} key={ind}>
                            {i.textList.map((text, idx) => (
                                <div key={idx} className="flex-row year-text">
                                    <img className="year-icon" src={about} />
                                    <div>{text}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="yearView flex-row">
                    {roadmapData.map((i, ind) => (
                        <div
                            onClick={() => {
                                setYearIndex(ind)
                            }}
                            className={`yearClass ${ind == yearIndex ? "redyear" : ""}`}
                            key={i.year}
                        >
                            {i.year}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
