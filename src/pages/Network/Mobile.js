import React, { useState } from "react"
import "./Mobile.css"
import MHeader from "../../componentM/Header"
import MFooter from "../../componentM/Footer"
import about from "../../static/about.png"

export default function NetworkMobile() {
    const [showIndex, setShowIndex] = useState(0)

    const workData = [
        {
            img: about,
            title: "The Lightning Network is dependent upon the underlying technology of the blockchain. By using real Bitcoin/blockchain transactions and using its native smart-contract scripting language, it is possible to create a secure network of participants which are able to transact at high volume and high speed.",
        },
        {
            img: about,
            title: "Bidirectional Payment Channels. Two participants create a ledger entry on the blockchain which requires both participants to sign off on any spending of funds. Both parties create transactions which refund the ledger entry to their individual allocation, but do not broadcast them to the blockchain. They can update their individual allocations for the ledger entry by creating many transactions spending from the current ledger entry output. Only the most recent version is valid, which is enforced by blockchain-parsable smart-contract scripting. This entry can be closed out at any time by either party without any trust or custodianship by broadcasting the most recent version to the blockchain.",
            type: "end",
        },
        {
            img: about,
            title: "Lightning Network. By creating a network of these two-party ledger entries, it is possible to find a path across the network similar to routing packets on the internet. The nodes along the path are not trusted, as the payment is enforced using a script which enforces the atomicity (either the entire payment succeeds or fails) via decrementing time-locks.",
        },
        {
            img: about,
            title: "Blockchain as Arbiter. As a result, it is possible to conduct transactions off-blockchain without limitations. Transactions can be made off-chain with confidence of on-blockchain enforceability. This is similar to how one makes many legal contracts with others, but one does not go to court every time a contract is made. By making the transactions and scripts parsable, the smart-contract can be enforced on-blockchain. Only in the event of non-cooperation is the court involved – but with the blockchain, the result is deterministic.",
            type: "end",
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
                <img src={about} className="network-header-img" />
            </div>
            <div className="network-work content">
                <div className="network-text colorF">HOW IT WORKS</div>
                {workData.map((item, index) => (
                    <div key={index} className={`work-item flex-row ${item.type == "end" ? "endImg" : ""}`}>
                        <img className="work-itemImg" src={item.img} />
                        <div className={`colorF work-itemText  ${item.type == "end" ? "mr20" : "ml20"}`} >{item.title}</div>
                    </div>
                ))}
            </div>
            <div className="network-infinitas"></div>
            <div className="network-reference"></div>
            <MFooter activeIndex={"2"} />
        </div>
    )
}
