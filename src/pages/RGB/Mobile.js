import React, { useState } from "react"
import "./Mobile.css"
import MHeader from "../../componentM/Header"
import MFooter from "../../componentM/Footer"
import about from "../../static/about.png"

export default function RGBMobile() {
    const [showIndex, setShowIndex] = useState(0)

    const rgbheader = [
        "RGB is an extensible and secure intelligent contract system for bitcoin and lightning network developed by LNP/BP standards association. It adopts the concepts of private ownership and common ownership, and is a Turing -complete and distrustful distributed computing form, which does not need to introduce a non-block decentralization protocol of tokens.",
        `The prototype is based on the concepts of client-
        side validation and single-use-seals proposed by 
        Peter Todd in 2016, and runs on the Layer2 and 
        Layer3 (out of the chain) of the Bitcoin ecosystem. 
        
        Original link:
        https://petertodd.org/2017/scalable-single-use-seal-
        asset-transfer`,
        "The design purpose of RGB is to run scalable, robust and private smart contracts on UTXO blockchain (such as Bitcoin) to realize all possibilities. Through RGB, developers can execute smart contracts such as token issuance, NFT, DeFi, DAO, and more complex categories.",
    ]

    const solutionsContent = [
        {
            img: about,
            title: "SINGLE-USE-SEALS",
            sub: "Similar to the Single-use-seals used to protect freight containers in the real world, the original meaning of single-use-seal sis a unique object that can be closed on messages only once. Once it is used, it will be permanently opened and cannot be closed again. Whenever the status of a smart contract changes on the RGB network, a bitcoin native UTXO will be created in the owner's wallet. When the owner submits a transaction on the RGB network, the UTXO is spent/closed. In short, single-use-seal is an abstract mechanism to prevent double payment.",
        },
        {
            img: about,
            title: "CLIENT-SIDE VALIDATION",
            sub: `Client-side validation is a paradigm proposed by Peter Todd in 2016. Its core idea is that in a distributed system, the validation of state does not need to be implemented globally by all parties involved in the decentralization protocol; Instead, only the parties involved in a specific state transition need to verify. Using this method, the state transition is not published in the global network, but transformed into a short encrypted commitment by using a cryptographic hash function, which needs to be a part of a "Proof-of-Publication" medium and has three main characteristics: receipt proof, non-publication proof and membership proof. The first Client-side validation system is the Open Time Stamps protocol, which was also proposed and developed by Peter Todd in 2014-2016.`,
        },
    ]

    const mainData = [
        { title: "1", img: about, sub: "High confidentiality, security, scalability" },
        { title: "2", img: about, sub: "There is no congestion in the bitcoin time chain, because the transaction only keeps homomorphic commitments that need extra storage." },
        { title: "3", img: about, sub: "It can be upgraded in the future without hard fork." },
        { title: "4", img: about, sub: "It is more resistant to censorship than Bitcoin: miners can't see the flow of assets in the transaction." },
        { title: "5", img: about, sub: "There is no concept of block and chain." },
    ]

    return (
        <div>
            <MHeader activeIndex={"2"} />
            <div className="rgb-header">
                <div className="rgb-title">WHAT IS RGB?</div>
                <div className="rgb-content flex-row">
                    {rgbheader.map((i, ind) => (
                        <div key={ind} className="rgb-contentItem flex-shrink">
                            {i}
                        </div>
                    ))}
                </div>
            </div>
            <div className="rgb-desing">
                <div className="desing-title">SOLUTIONS</div>

                <div className="desingItem">
                    <div className="desingItem-title">{solutionsContent[showIndex].title}</div>
                    <div className="desingItem-line"></div>
                    <div className="flex-row">
                        <div className="desingItem-sub">{solutionsContent[showIndex].sub}</div>
                        <div className="desingItem-ver flex-column">
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
                    <img className="desingItem-img" src={solutionsContent[showIndex].img} />
                </div>
            </div>
            <div className="rgb-main content">
                <div className="rgb-main-title">MAIN FEATURES</div>
                <div className="rgb-main-c flex-row">
                    {mainData.map((item) => (
                        <div className="flex-shrink rgb-main-cI" key={item.title}>
                            <div className="rgb-main-cI-title">{item.title}</div>
                            <div className="rgb-main-cI-sub">{item.sub}</div>
                            <img className="rgb-main-cI-img" src={item.img} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="content">
                <div className="rgb-code-title">RGB V0.10</div>
                <div className="rgb-code-content">
                    In April 2023, the LNP/BP Association announced the release of RGB v0.10, another important milestone for the RGB protocol, bringing full support for smart contracts to Bitcoin and
                    the Lightning Network. It is the culmination of long-term cross-industry collaboration and more than four years of extensive development work between these Bitcoin developers,
                    contributors, and companies involved. The v0.10 version of the RGB protocol solves many problems that existed in the old version, including the limitations of smart contract
                    development, access to the consensus layer, limitations of encoding formats, Rust Bitcoin dependency issues, lack of WASM compatibility, global state and context management
                    problems, integration issues with the Lightning Network, inflexibility of the backup process, insufficient support for mobile wallets, etc. These improvements make the RGB protocol
                    stronger, more flexible, and more secure, and lay a solid foundation for future development.
                </div>
                <div className="rgb-code-view">
                    <a className="rgb-code-btn" href="https://github.com/RGB-WG">RGB SOURCE CODE</a>
                </div>
                <div className="rgb-code-down">
                    <a className="rgb-code-viewbtn" href="https://rgb.tech">
                        <div className="rgb-code-viewSub">download and installation</div>
                        <div className="rgb-code-viewdown">RGB V0.10</div>
                    </a>
                </div>
            </div>
            <div className="content">
                <div className="infinitas-title">RGB IN INFINITAS</div>
            </div>

            <MFooter activeIndex={"2"} />
        </div>
    )
}
