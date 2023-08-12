import React from "react"
import "./Mobile.css"
import MHeader from "../../componentM/Header"
import MFooter from "../../componentM/Footer"
import about from "../../static/about.png"
import { useState } from "react"
import { CheckOutlined } from "@ant-design/icons"
import { Carousel } from "antd"

export default function InfinitasHomeMobile() {
    const [showIndex, setShowIndex] = useState(0)
    const [yearIndex, setYearIndex] = useState(2)

    const standContent = [
        {
            img: "https://static.paraluni.org/images/infiweb/home_icon1.png",
            title: "POW PROTECTION",
            sub: "It ensures that Infinitas assets are protected by the whole-network hash rate in the Bitcoin blockchain, enhancing the security of assets.",
        },
        {
            img: "https://static.paraluni.org/images/infiweb/home_icon2.png",
            title: "ADAPTER TECHNOLOGY",
            sub: "Through Infinitas adapter technology, users can realize the complete status of Bitcoin and enhance their perception of asset status.",
        },
        {
            img: "https://static.paraluni.org/images/infiweb/home_icon3.png",
            title: "PRIVACY PRESERVING+++",
            sub: "A higher level of privacy protection for Infinitas assets has been achieved, and a trustless Bitcoin anchoring mechanism has been introduced to further enhance user privacy.",
        },
        {
            img: "https://static.paraluni.org/images/infiweb/home_icon4.png",
            title: "ENRICHED GLOBAL STATE",
            sub: "Extended Global State, which is critical for building complex applications (such as synthetic assets, algorithmic stablecoins, etc.) on RGB. Make the RGB contract have a global state that can be accessed by virtual machines and clients (such as wallets, etc.).",
        },
        {
            img: "https://static.paraluni.org/images/infiweb/home_icon5.png",
            title: "OPTIMIZING THE LIGHTNING NETWORK",
            sub: "Through improvements to the Lightning Network (such as light block technology, node automatic expansion technology, and offline autonomy), higher transaction throughput is achieved while maintaining low-latency transaction confirmation time.",
        },
    ]
    const solutionsContent = [
        {
            img: "https://static.paraluni.org/images/infiweb/home_bg2.png",
            title: "SLR (SECURITY-LIGHTING-RGB) PROTOCOL",
            sub: "RGB and Lightning Network are re-encapsulated, and a transaction data of the client and a UTXO of Bitcoin are sealed at one time. The smart contracts of the RGB protocol only function in the client-side verification paradigm, keeping asset data in a state outside of the blockchain or Lightning Network.",
        },
        {
            img: "https://static.paraluni.org/images/infiweb/home_bg3.png",
            title: "RZK (RECURSIVE ZERO KNOWLEDGE)",
            sub: "RZK=Z0(...Zn-2(Zn-2,Zn-1)Zn . The verifier does not need to verify the block from scratch, but only needs to download the current block for simple verification. The latest block will include the proof from the founding block to the current block.",
        },
        {
            img: "https://static.paraluni.org/images/infiweb/home_bg4.png",
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
            bgc: "https://static.paraluni.org/images/infiweb/roadmap_bg.png",
            yearData: [{ yejiao: "--", textList: ["DeFi 2.0 project - Paraluni established", "Complete the translation of RGB protocol documents"] }],
        },
        {
            year: "2022",
            bgc: "https://static.paraluni.org/images/infiweb/roadmap_bg.png",
            yearData: [{ yejiao: "--", textList: ["Community established", "BTC ecosystem network project - Infinitas established"] }],
        },
        {
            year: "2023",
            bgc: "https://static.paraluni.org/images/infiweb/roadmap_bg.png",
            yearData: [
                {
                    yejiao: "Q1",
                    textList: [
                        <div>
                            Paraluni TVL reaches <span style={{ fontWeight: 600, fontSize: "22px" }}>$50M+</span>
                        </div>,
                    ],
                },
                {
                    yejiao: "Q2",
                    textList: [
                        "RGB v0.10 released",
                        <div>
                            Community followers reached <span style={{ fontWeight: 600, fontSize: "22px" }}>50K+</span>
                        </div>,
                        "Infinitas seed round launched",
                    ],
                },
                {
                    yejiao: "Q3",
                    textList: [
                        "BTB miners reached 5k+",
                        <div>
                            Community followers reached <span style={{ fontWeight: 600, fontSize: "22px" }}>100K+</span>
                        </div>,
                        "RGB & BTC-Eco related research released",
                        "Join the LNP/BP Association",
                    ],
                },
                {
                    yejiao: "Q4",
                    textList: ["Develop and release the Infinitas testnet", "Cooperation with mainstream wallets", "Develop Infinitas mainnet", "Launched the official version of data explorer"],
                },
            ],
        },
        {
            year: "2024",
            bgc: "https://static.paraluni.org/images/infiweb/roadmap_bg.png",
            yearData: [
                { yejiao: "Q1", textList: ["Launched Infinitas mainnet (BTC减半)", "Building DeFi (DEX) Schemas", "Provide SDKs"] },
                { yejiao: "Q2", textList: ["Total number of ecosystem projects reaches 200+", "Listing on centralized exchange", "Development of DApp integration environment"] },
            ],
        },
    ]

    return (
        <div>
            <MHeader activeIndex={"1"} />
            <div id="home" className="homecontent homecontent-home">
                <div className="homecontent-home-title">BASED ON BITCOIN PROVIDE INFINITELY SCALABLE POWER FOR WEB 3.0</div>
                <div className="homecontent-home-subtitle">TO MEET THE VALUE PURSUIT OF 100 MILLION PEOPLE WHO ARE FASTER, TRUER AND SAFER</div>
                <div className="homecontent-home-start">
                    <div className="homecontent-home-startCont flex-row">
                        <img src={"https://static.paraluni.org/images/infiweb/BTC.png"} width={23} height={23} />
                        EGIN
                    </div>
                </div>
            </div>
            <div id="about" className="homecontent homecontent-about">
                <div className="homecontent-about-title">ABOUT US</div>
                <div className="homecontent-about-subtitle">
                    INFINITAS IS A TURING-COMPLETE BITCOIN APPLICATION ECOSYSTEM WITH INFINITE SCALABILITY. INFINITAS WILL CREATE THE NEXT GENERATION OF BITCOIN LARGE-SCALE APPLICATION SCENARIOS.
                </div>
                <div className="flex-row">
                    <img className="homecontent-about-icon" src={about} />
                    <div className="homecontent-about-subcontent">
                        Combining the mutual support and complement of the Lightning Network and the RGB protocol, Infinitas can achieve a more efficient and scalable Bitcoin ecosystem. Make Bitcoin
                        greater again.
                    </div>
                </div>
                <div className="flex-row">
                    <img className="homecontent-about-icon" src={about} />
                    <div className="homecontent-about-subcontent">
                        Create a fairer decentralized crypto world for miners, verifiers, node service providers, exchanges, and users. In the future, hundreds of millions of economic participants
                        will be active in the ecosystem to create value.
                    </div>
                </div>
            </div>
            <div id="stand" className="homecontent-stand">
                <div className="homecontent-stand-title">WE STAND FOR</div>
                <div className="homecontent-stand-homecontent flex-row">
                    {standContent.map((i, ind) => (
                        <div key={ind} className="standitem">
                            <dvi className="standitem-title">{i.title}</dvi>
                            <dvi className="standitem-sub">{i.sub}</dvi>
                            <img className="standitem-img" src={i.img} />
                        </div>
                    ))}
                </div>
            </div>

            <div id="focus" className="homecontent homecontent-focus">
                <div className="homecontent-focus-title">FOCUS</div>
                <div className="flex-row mb-10">
                    <div className="flex-column flex-1 fl-ai-center mr-10 homecontent-focus-view">
                        <div className="focus-main">16K</div>
                        <div className="tac focus-sub">DAILY ACTIVE WALLET ADDRESSES</div>
                    </div>
                    <div className="flex-column flex-1 fl-ai-center homecontent-focus-view">
                        <div className="focus-main">100K+</div>
                        <div className="tac focus-sub">COMMUNITY FOLLOWERS</div>
                    </div>
                </div>
                <div className="flex-column fl-ai-center homecontent-focus-view">
                    <div className="focus-main">4 YEARS+</div>
                    <div className="focus-sub">RGB RESEARCH</div>
                    <div className="focus-sub">EXPERIENCE</div>
                </div>
            </div>

            <div id="solutions" className="homecontent homecontent-solutions">
                <div className="homecontent-solutions-title">SOLUTIONS</div>
                <Carousel dotPosition={"right"}>
                    {solutionsContent.map((i) => (
                        <div key={i.title} className="solutionsItem">
                            <div className="solutionsItem-title">{i.title}</div>
                            <div className="solutionsItem-line"></div>
                            <div className="flex-row fl-ai-center">
                                <div className="solutionsItem-sub">{i.sub}</div>
                            </div>
                            <img className="solutionsItem-img" src={i.img} />
                        </div>
                    ))}
                </Carousel>
            </div>

            <div id="overall" className="homecontent-overall">
                <div className="homecontent-overall-title">OVERALL</div>
                <div className="homecontent-overall-title">ARCHITECTURE</div>
                <div className="homecontent-overall-main">
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
            <div id="roadmap" className="homecontent">
                <div className="homecontent-roadmap-title">ROADMAP</div>
                <div className="roadmap-main flex-row" id='roadmap'>
                    {roadmapData[yearIndex].yearData.map((i, ind) => (
                        <div className="yearData-view" key={ind}>
                            <img style={{ marginBottom: "20px" }} src="https://static.paraluni.org/images/infiweb/roadmap_1.png" width="24" height="24"></img>
                            {i.textList.map((text, idx) => (
                                <div key={idx} className="flex-row year-text">
                                    <CheckOutlined className="year-icon" style={{ color: "#f44336", marginRight: "10px" }} />
                                    <div>{text}</div>
                                </div>
                            ))}

                            <div className="year_ji">{i.yejiao}</div>
                        </div>
                    ))}
                </div>
                <div className="yearView flex-row">
                    {roadmapData.map((i, ind) => (
                        <div
                            onClick={() => {
                                setYearIndex(ind)
                                document.getElementById('roadmap').scrollLeft = 0
                            }}
                            className={`yearClass ${ind == yearIndex ? "redyear" : ""}`}
                            key={i.year}
                        >
                            {i.year}
                        </div>
                    ))}
                </div>
            </div>

            <MFooter activeIndex={"1"} />
        </div>
    )
}
