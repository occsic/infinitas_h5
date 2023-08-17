import React from "react";
import './PC.css'
import PCHeader from "../../component/PCHeader";
import {Carousel} from "antd";
import RGBPCMainFeatures from "../RGB/Component/RGBPCMainFeatures";
import PCFooter from "../../component/PCFooter";
import pdf from '../../static/pdf.png'
import {openNewWindow} from "../../static/Utils";
export default function NetworkPC() {
    return (
        <div className='home-pc'>
            <PCHeader/>
            <div style={{height:'84px'}}/>
            {/*>WHAT IS LIGHTING NETWORK*/}
            <div className='flex-center bg-color-khaki' style={{width: '100vw',minWidth:'1200px'}}>
                <div className='common-width'>
                    <div style={{height:'73px'}}/>
                    <div className='flex-row fl-ai-center'>
                        <img src={'https://static.paraluni.org/images/infiweb/lighting_bg1.png'} width={380} height={357} />
                        <div className='flex-column fl-jc-between' style={{height:'357px',marginLeft:'154px'}}>
                            <div>
                                <div className='network-fontA'>WHAT IS</div>
                                <div className='network-fontA'>LIGHTING NETWORK</div>
                            </div>
                            <div className='network-red-line'/>
                            <div className='network-fontB'>Lightning is a decentralized network
                                using smart contract functionality
                                in the blockchain to enable instant
                                payments across a network of
                                participants.</div>
                        </div>
                    </div>
                    <div style={{height:'98px'}}/>
                </div>
            </div>


            {/*>HOW IT WORKS*/}
            <div className='flex-center bg-color-black' style={{width: '100vw',minWidth:'1200px'}}>
                <div className='common-width'>
                    <div className='font-color-white' style={{marginTop:'174px',fontWeight:800,fontSize:'40px'}}>HOW IT WORKS</div>
                    <div className='flex-row fl-jc-between'>
                        <div className='flex-column'>
                            <img src={'https://static.paraluni.org/images/infiweb/lighting_bg2.png'} width={485} height={436} style={{marginTop:'88px'}}/>
                            <div className='font-size-16 font-color-white' style={{marginTop:'40px',width:'485px'}}>
                                The Lightning Network is dependent upon the underlying technology of the blockchain.
                                By using real Bitcoin/blockchain transactions and using its native smart-contract
                                scripting language, it is possible to create a secure network of participants which
                                are able to transact at high volume and high speed.
                            </div>
                                <img src={'https://static.paraluni.org/images/infiweb/lighting_bg3.png'} width={485} height={436} style={{marginTop:'250px'}}/>
                                <div className='font-size-16 font-color-white' style={{marginTop:'40px',width:'485px'}}>
                                    Lightning Network. By creating a network of these two-party ledger entries, it is possible
                                    to find a path across the network similar to routing packets on the internet. The nodes along
                                    the path are not trusted, as the payment is enforced using a script which enforces the atomicity
                                    (either the entire payment succeeds or fails) via decrementing time-locks.
                                </div>
                        </div>
                        <div className='flex-column'>
                            <img src={'https://static.paraluni.org/images/infiweb/lighting_bg4.png'} width={485} height={436} style={{marginTop:'206px'}}/>
                            <div className='font-size-16 font-color-white' style={{marginTop:'40px',width:'485px'}}>
                                Bidirectional Payment Channels. Two participants create a ledger entry on the blockchain which
                                requires both participants to sign off on any spending of funds. Both parties create transactions
                                which refund the ledger entry to their individual allocation, but do not broadcast them to the blockchain.
                                They can update their individual allocations for the ledger entry by creating many transactions spending
                                from the current ledger entry output. Only the most recent version is valid, which is enforced by blockchain-parsable
                                smart-contract scripting. This entry can be closed out at any time by either party without any trust or custodianship
                                by broadcasting the most recent version to the blockchain.
                            </div>
                            <img src={'https://static.paraluni.org/images/infiweb/lighting_bg5.png'} width={485} height={436} style={{marginTop:'100px'}}/>
                            <div className='font-size-16 font-color-white' style={{marginTop:'40px',width:'485px'}}>
                                Blockchain as Arbiter. As a result, it is possible to conduct transactions off-blockchain without limitations.
                                Transactions can be made off-chain with confidence of on-blockchain enforceability. This is similar to how one
                                makes many legal contracts with others, but one does not go to court every time a contract is made. By making the
                                transactions and scripts parsable, the smart-contract can be enforced on-blockchain. Only in the event of non-cooperation
                                is the court involved – but with the blockchain, the result is deterministic.
                            </div>
                        </div>
                    </div>
                    <div style={{height:'200px'}}/>
                </div>
            </div>

            {/*LIGHTNING NETWORK IN INFINITAS*/}
            <div className='flex-center bg-color-khaki' style={{width: '100vw',minWidth:'1200px'}}>
                <div className='common-width'>
                    <div className='font-color-42' style={{fontWeight: 800, fontSize: '40px', marginTop: '137px'}}>LIGHTNING NETWORK IN INFINITAS</div>
                    <div className='flex-row fl-jc-between' style={{marginTop:'80px'}}>
                        <RGBPCMainFeatures text={'Infinitas embeds the RGB protocolinto the transactions of the Lightning Network channel, establishes a series of two-way payment channels outside the blockchain, and utilizes the efficient performance of the Lightning Network to allow users to conduct fast and low-cost transactions on these channels'} img={'https://static.paraluni.org/images/infiweb/lighting_bg6.png'} textWidth={257} imgWidth={270}/>
                        <RGBPCMainFeatures text={'Once the Lightning Network channel is established, users can conduct RGB protocol transactions in the channel. This means that users can create and trade RGB tokens, and these transactions are not directly written to the Bitcoin main blockchain, but are carried out within the channel and do not directly affect the Bitcoin main blockchain.'} img={'https://static.paraluni.org/images/infiweb/lighting_bg7.png'} textWidth={257} imgWidth={270}/>
                        <RGBPCMainFeatures text={'The more complex smart contracts supported by Infinitas allow users to perform more types of transaction operations within Lightning Network channels, including conditional payments, multi-party signatures, and more. It provides users with more flexible and diversified trading options.'} img={'https://static.paraluni.org/images/infiweb/lighting_bg8.png'} textWidth={257} imgWidth={270}/>
                        <RGBPCMainFeatures text={'The combination of Infinitas brings more functionality and scalability to the Bitcoin ecosystem, providing users with a better transaction experience and more usage options. At the same time, the transactions in the Lightning Network are carried out in the channel and will not be immediately exposed to the entire Bitcoin network, thus providing higher transaction privacy to a certain extent.'} img={'https://static.paraluni.org/images/infiweb/lighting_bg9.png'} textWidth={257} imgWidth={270}/>
                    </div>
                </div>
            </div>

            <div className='common-width'>
                <div className='' style={{fontSize:'40px',fontWeight:800,marginTop:'178px',textAlign:'center'}}>DETAILED REFERENCE</div>
                <div style={{height:'128px'}}/>
                <div className='flex-row fl-jc-between fl-ai-center'>
                    <div className='flex-column fl-ai-center'>
                        <img src={pdf} width={46} height={46}/>
                        <div className='font-color-42' style={{fontSize:'18px',fontWeight:'bold',marginTop:'20px'}}>The Bitcoin Lightning Network</div>
                        <div className='font-color-42' style={{fontSize:'14px',marginTop:'12px'}}>https://lightning.network/lightning-network-summary.pdf</div>
                        <div className='network-circle font-color-42 flex-center' onClick={()=>openNewWindow('https://lightning.network/lightning-network-summary.pdf')}>READ</div>
                    </div>
                    <div className='flex-column fl-ai-center'>
                        <img src={pdf} width={46} height={46}/>
                        <div className='font-color-42' style={{fontSize:'18px',fontWeight:'bold',marginTop:'20px'}}>The Bitcoin Lightning Network:</div>
                        <div className='font-color-42' style={{fontSize:'18px',fontWeight:'bold'}}>Scalable Off-Chain Instant Payments</div>
                        <div className='font-color-42' style={{fontSize:'14px',marginTop:'12px'}}>https://lightning.network/lightning-network-paper.pdf</div>
                        <div className='network-circle font-color-42 flex-center' onClick={()=>openNewWindow('https://lightning.network/lightning-network-paper.pdf')}>READ</div>
                    </div>
                </div>
                <div style={{height:'225px'}}/>
            </div>

           <PCFooter />

        </div>
    )
}
