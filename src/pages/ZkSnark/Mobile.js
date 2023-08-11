import React, { useState } from "react"
import "./Mobile.css"
import MHeader from "../../componentM/Header"
import MFooter from "../../componentM/Footer"
import about from "../../static/about.png"

export default function ZkSnarkMobile() {
    const [showIndex, setShowIndex] = useState(0)
    const SNARK = [
        {
            img: about,
            sub: "The key generator G takes a secret parameter lambda and a program C, and generates two publicly available keys, a proving key pk, and a verification key vk. These keys are public parameters that only need to be generated once for a given program C.",
        },
        {
            img: about,
            sub: "The prover P takes as input the proving key pk, a public input x and a private witness w. The algorithm generates a proof prf = P(pk, x, w) that the prover knows a witness w and that the witness satisfies the program.",
        },
        {
            img: about,
            sub: "The verifier V computes V(vk, x, prf) which returns true if the proof is correct, and false otherwise. Thus this function returns true if the prover knows a witness w satisfying C(x,w) == true.",
        },
        {
            img: about,
            sub: "Note here the secret parameter lambda used in the generator. This parameter sometimes makes it tricky to use zk-SNARKs in real-world applications. The reason for this is that anyone who knows this parameter can generate fake proofs. Specifically, given any program C and public input x a person who knows lambda can generate a proof fake_prf such that V(vk, x, fake_prf) evaluates to true without knowledge of the secret w.",
        },
        {
            img: about,
            sub: "Thus actually running the generator requires a very secure process to make sure no-one learns about and saves the parameter anywhere. This was the reason for the extremely elaborate ceremony the Zcash team conducted in order to generate the proving key and verification key, while making sure the “toxic waste” parameter lambda was destroyed in the process.",
        },
    ]
    return (
        <div>
            <MHeader activeIndex={"2"} />
            <div className="zk-header content">
                <div className="flex-row flex-jc-between">
                    <div className="zk-text colorB">WHAT IS ZK-SNARK?</div>
                    <img className="zk-header-img" src={about} />
                </div>
                <div className="zk-header-line"></div>
                <div className="zk-sub-title">
                    Zero-Knowledge Proofs (ZKPs) are a cryptographic concept that allows one entity to prove to another that an assertion is true without revealing any information about the content of
                    the assertion. Recursive zero-knowledge proof is a further extension and optimization of zero-knowledge proof, which is used to realize the lightweight and decentralization of
                    blockchain. The basic idea is to compress the state and transaction history of the entire blockchain into a fixed-size proof, called a "Snark", and then embed this proof into each
                    new block.
                </div>
            </div>
            <div className="zk-main content">
                <div className="zk-text colorF">A ZK-SNARK CONSISTS OF THREE ALGORITHMS G, P, V DEFINED AS FOLLOWS</div>
                <div className="zkmainItem">
                    <div className="flex-row z">
                        <div>
                            <img className="zkmainItem-img" src={SNARK[showIndex].img} />
                            <div className="zkmainItem-sub">{SNARK[showIndex].sub}</div>
                        </div>
                        <div className="zkmainItem-ver flex-column">
                            {SNARK.map((i, ind) => (
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
                </div>
            </div>
            <div>
                <div></div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="zk-dec content">
                <div className="zk-text colorB">ZK-SNARKS</div>
                <div className="zk-text zk-mb-24 colorB">IN INFINITAS</div>
                <div className="zk-dec-text">
                    Infinitas integrates zk-SNARK into the BTC blockchain, which can add the building blocks of the verification algorithm to the entire ecosystem in the form of pre-compiled
                    contracts. Run generators off-chain to generate attestation and verification keys. Any prover can then use the proof key to create a proof, also off-chain. A common verification
                    algorithm can be run within a smart contract using proofs, verification keys, and public inputs as input parameters. Finally, the results of the verification algorithm are used to
                    trigger other on-chain activities.
                </div>
                <div className="zk-dec-text">
                    As a highly optimized zero-knowledge proof, zk-SNARKs can compress complex calculation and verification processes into a small, fixed-size proof. By using zk-SNARKs, the
                    verification process of the Infinitas state can be turned into a small proof that can be attached to new blocks. Ensure that the state and transaction history of new blocks are
                    valid and legal without requiring each node to fully verify the entire history in the blockchain network.
                </div>
            </div>
            <div className="zk-em"></div>
            <div className=""></div>

            <MFooter activeIndex={"2"} />
        </div>
    )
}
