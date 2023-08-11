import React from "react";
import './Mobile.css'
import MHeader from "../../componentM/Header";
import MFooter from "../../componentM/Footer";

export default function RGBMobile(){


    const rgbheader=[
        'RGB is an extensible and secure intelligent contract system for bitcoin and lightning network developed by LNP/BP standards association. It adopts the concepts of private ownership and common ownership, and is a Turing -complete and distrustful distributed computing form, which does not need to introduce a non-block decentralization protocol of tokens.',
        `The prototype is based on the concepts of client-
        side validation and single-use-seals proposed by 
        Peter Todd in 2016, and runs on the Layer2 and 
        Layer3 (out of the chain) of the Bitcoin ecosystem. 
        
        Original link:
        https://petertodd.org/2017/scalable-single-use-seal-
        asset-transfer`,
        'The design purpose of RGB is to run scalable, robust and private smart contracts on UTXO blockchain (such as Bitcoin) to realize all possibilities. Through RGB, developers can execute smart contracts such as token issuance, NFT, DeFi, DAO, and more complex categories.'
    ]
    return (
        <div>
            <MHeader activeIndex={'2'} />
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


            <MFooter  activeIndex={'2'}/>
            





        </div>
    )
}
