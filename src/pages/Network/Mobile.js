import React, { useState } from "react"
import "./Mobile.css"
import MHeader from "../../componentM/Header"
import MFooter from "../../componentM/Footer"
import pdf from '../../static/pdf.png'

export default function NetworkMobile() {
    const [showIndex, setShowIndex] = useState(0)

    const workData = [
        {
            img: 'https://static.paraluni.org/images/infiweb/lighting_bg2.png',
            title: "The Lightning Network is dependent upon the underlying technology of the blockchain. By using real Bitcoin/blockchain transactions and using its native smart-contract scripting language, it is possible to create a secure network of participants which are able to transact at high volume and high speed.",
        },
        {
            img: 'https://static.paraluni.org/images/infiweb/lighting_bg3.png',
            title: "Bidirectional Payment Channels. Two participants create a ledger entry on the blockchain which requires both participants to sign off on any spending of funds. Both parties create transactions which refund the ledger entry to their individual allocation, but do not broadcast them to the blockchain. They can update their individual allocations for the ledger entry by creating many transactions spending from the current ledger entry output. Only the most recent version is valid, which is enforced by blockchain-parsable smart-contract scripting. This entry can be closed out at any time by either party without any trust or custodianship by broadcasting the most recent version to the blockchain.",
            type: "end",
        },
        {
            img: 'https://static.paraluni.org/images/infiweb/lighting_bg4.png',
            title: "Lightning Network. By creating a network of these two-party ledger entries, it is possible to find a path across the network similar to routing packets on the internet. The nodes along the path are not trusted, as the payment is enforced using a script which enforces the atomicity (either the entire payment succeeds or fails) via decrementing time-locks.",
        },
        {
            img: 'https://static.paraluni.org/images/infiweb/lighting_bg5.png',
            title: "Blockchain as Arbiter. As a result, it is possible to conduct transactions off-blockchain without limitations. Transactions can be made off-chain with confidence of on-blockchain enforceability. This is similar to how one makes many legal contracts with others, but one does not go to court every time a contract is made. By making the transactions and scripts parsable, the smart-contract can be enforced on-blockchain. Only in the event of non-cooperation is the court involved – but with the blockchain, the result is deterministic.",
            type: "end",
        },
    ]
    const infinitasData = [
        {
            img: 'https://static.paraluni.org/images/infiweb/lighting_bg6.png',
            sub: "BiHelix embeds the RGB protocol into the transactions of the Lightning Network channel, establishes a series of two-way payment channels outside the blockchain, and utilizes the efficient performance of the Lightning Network to allow users to conduct fast and low-cost transactions on these channels.",
        },
        {
            img: 'https://static.paraluni.org/images/infiweb/lighting_bg7.png',
            sub: "Once the Lightning Network channel is established, users can conduct RGB protocol transactions in the channel. This means that users can create and trade RGB tokens, and these transactions are not directly written to the Bitcoin main blockchain, but are carried out within the channel and do not directly affect the Bitcoin main blockchain.",
        },
        {
            img: 'https://static.paraluni.org/images/infiweb/lighting_bg8.png',
            sub: "The more complex smart contracts supported by BiHelix allow users to perform more types of transaction operations within Lightning Network channels, including conditional payments, multi-party signatures, and more. It provides users with more flexible and diversified trading options.",
        },
        {
            img: 'https://static.paraluni.org/images/infiweb/lighting_bg9.png',
            sub: "The combination of BiHelix brings more functionality and scalability to the Bitcoin ecosystem, providing users with a better transaction experience and more usage options. At the same time, the transactions in the Lightning Network are carried out in the channel and will not be immediately exposed to the entire Bitcoin network, thus providing higher transaction privacy to a certain extent.",
        },
    ]

    const referenceData = [
        {
            img: pdf,
            title: "The Bitcoin Lightning Network",
            link: "https://lightning.network/lightning-network-summary.pdf",
            button: "GO",
        },
        {
            img: pdf,
            title: "The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments",
            link: "https://lightning.network/lightning-network-paper.pdf",
            button: "GO",
        },
    ]

    return (
        <div>
            <MHeader activeIndex={"2"} />
            <div className="network-header content flex-column">
                <div className="network-text colorB">WHAT IS</div>
                <div className="network-text network-mar12 colorB">LIGHTNING NETWORK?</div>
                <div className="network-line"></div>
                <div className="network-sub colorB">
                    Lightning is a decentralized network using smart contract functionality in the blockchain to enable instant payments across a network of participants.
                </div>
                <img src={'https://static.paraluni.org/images/infiweb/lighting_bg1.png'} className="network-header-img" />
            </div>
            <div className="network-work content">
                <div className="network-text colorF">HOW IT WORKS</div>
                {workData.map((item, index) => (
                    <div key={index} className={`work-item flex-row ${item.type == "end" ? "endImg" : ""}`}>
                        <img className="work-itemImg" src={item.img} />
                        <div className={`colorF work-itemText  ${item.type == "end" ? "mr20" : "ml20"}`}>{item.title}</div>
                    </div>
                ))}
            </div>
            <div className="network-infinitas content">
                <div className="network-text colorB">LIGHTNING NETWORK IN BIHELIX</div>
                <div className="network-main-c flex-row">
                    {infinitasData.map((item) => (
                        <div className="flex-shrink network-main-cI" key={item.title}>
                            <div className="network-main-cI-sub">{item.sub}</div>
                            <img className="network-main-cI-img" src={item.img} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="network-reference content">
                <div className="network-text colorB">DETAILED REFERENCE</div>
                {referenceData.map((item, inx) => (
                    <div key={inx} className="reference-item flex-column fl-ai-center">
                        <img className="reference-item-img" src={item.img} />
                        <div className="reference-item-title">{item.title}</div>
                        <div className="reference-item-link">{item.link}</div>
                        <div className="reference-item-btn" onClick={() => window.open(item.link)}>
                            {item.button}
                        </div>
                    </div>
                ))}
            </div>
            <MFooter activeIndex={"2"} />
        </div>
    )
}
