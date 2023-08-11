import React from "react";
import './PC.css'
import PCHeader from "../../component/PCHeader";
import {Carousel} from "antd";
import PCFooter from "../../component/PCFooter";

export default function ZkSnarkPC() {
    return (
        <div className='home-pc'>
            <PCHeader/>
            <div style={{height:'100px'}} />
            {/*第一部分*/}
            <div className='common-width'>
                <div style={{height:'73px'}}/>
                <div className='flex-row'>
                    <img src={''} width={380} height={357} />
                    <div className='flex-column fl-jc-between' style={{marginLeft:'154px'}}>
                        <div>
                            <div className='network-fontA'>WHAT IS</div>
                            <div className='network-fontA'>ZK-SNARK</div>
                        </div>
                        <div className='network-red-line' style={{marginTop:'54px'}}/>
                        <div className='network-fontB' style={{marginTop:'25px'}}>Zero-Knowledge Proofs (ZKPs) are
                            a cryptographic concept that allows one entity to prove to another
                            that an assertion is true without revealing any information about the
                            content of the assertion. Recursive zero-knowledge proof is a further
                            extension and optimization of zero-knowledge proof, which is used to
                            realize the lightweight and decentralization of blockchain. The basic
                            idea is to compress the state and transaction history of the entire
                            blockchain into a fixed-size proof, called a "Snark", and then embed
                            this proof into each new block.</div>
                    </div>
                </div>
                <div style={{height:'98px'}}/>
            </div>

            {/*第二部分*/}
            <div className='flex-center bg-color-black' style={{width: '100vw'}}>
                <div className='common-width'>
                    <div className='font-color-white' style={{fontWeight: 800, fontSize: '40px', marginTop: '230px'}}>A ZK-SNARK CONSISTS OF THREE</div>
                    <div className='font-color-white' style={{fontWeight: 800, fontSize: '40px'}}>ALGORITHMS G, P, V DEFINED AS FOLLOWS:</div>
                    <div className='font-color-white' style={{fontWeight: 800, fontSize: '40px'}}>FEATURES</div>
                    <div className='flex-row fl-ai-center fl-jc-between' style={{marginTop:'96px'}}>
                        <div className='snark-img-main' style={{width:'713px',height:'451px',backgroundImage:"url(https://swiperjs.com/demos/images/nature-2.jpg)"}}><div style={{marginLeft:'40px',marginBottom:'60px'}}>LIGHTWEIGHT AND FAST SYNC</div></div>
                        <div className='snark-img-main' style={{width:'460px',height:'451px',backgroundImage:"url(https://swiperjs.com/demos/images/nature-2.jpg)"}}>
                            <div style={{marginLeft:'40px',marginBottom:'60px'}}>DECENTRALIZED</div>
                        </div>
                    </div>
                    <div className='flex-row fl-ai-center fl-jc-between' style={{marginTop:'25px'}}>
                        <div className='snark-img-main' style={{width:'383px',height:'444px',backgroundImage:"url(https://swiperjs.com/demos/images/nature-2.jpg)"}}> <div style={{marginLeft:'40px',marginBottom:'60px'}}>PRIVACY PROTECTION</div></div>
                        <div className='snark-img-main' style={{width:'383px',height:'444px',backgroundImage:"url(https://swiperjs.com/demos/images/nature-2.jpg)"}}><div style={{marginLeft:'40px',marginBottom:'60px'}}>SCALABILITY</div></div>
                        <div className='snark-img-main' style={{width:'383px',height:'444px',backgroundImage:"url(https://swiperjs.com/demos/images/nature-2.jpg)"}}><div style={{marginLeft:'40px',marginBottom:'60px'}}>RICH ECOSYSTEM</div></div>
                    </div>
                    <div style={{height:'208px'}}/>
                </div>
            </div>

            {/*第三部分*/}
            <div className='flex-center bg-color-khaki' style={{width: '100vw'}}>
                <div className='common-width'>
                    <div className='font-color-42' style={{fontWeight: 800, fontSize: '40px', marginTop: '173px'}}>ZK-SNARKS IN INFINITAS</div>
                    <div className='flex-row fl-jc-between' style={{marginTop:'48px'}}>
                        <div className='font-color-42 font-size-16' style={{width:'484px'}}>Infinitas integrates zk-SNARK into the BTC blockchain,
                            which can add the building blocks of the verification algorithm to the entire ecosystem in the form of pre-compiled contracts.
                            Run generators off-chain to generate attestation and verification keys. Any prover can then use the proof key to create a proof,
                            also off-chain. A common verification algorithm can be run within a smart contract using proofs, verification keys, and public
                            inputs as input parameters. Finally, the results of the verification algorithm are used to trigger other on-chain activities.</div>
                        <div className='font-color-42 font-size-16' style={{width:'484px'}}>
                            As a highly optimized zero-knowledge proof, zk-SNARKs can compress complex calculation and verification processes into a small,
                            fixed-size proof. By using zk-SNARKs, the verification process of the Infinitas state can be turned into a small proof that can be
                            attached to new blocks. Ensure that the state and transaction history of new blocks are valid and legal without requiring each node
                            to fully verify the entire history in the blockchain network.
                        </div>
                    </div>
                    <div style={{height:'160px'}} />
                </div>
            </div>

            {/*第四部分*/}
            <div className='common-width'>
                <div className='' style={{fontSize:'40px',fontWeight:800,marginTop:'178px',textAlign:'center'}}>DETAILED REFERENCE</div>
                <div style={{height:'128px'}}/>
                <div className='flex-row fl-jc-between fl-ai-center'>
                    <div className='flex-column fl-ai-center'>
                        <img src={''} width={46} height={46}/>
                        <div className='font-color-42' style={{fontSize:'18px',fontWeight:'bold',marginTop:'20px'}}>Mina Protocol</div>
                        <div className='font-color-42' style={{fontSize:'14px',marginTop:'12px'}}>https://minaprotocol.com/blog/what-are-zk-snarks</div>
                        <div className='network-circle font-color-42 flex-center' onClick={()=>window.location.href='https://minaprotocol.com/blog/what-are-zk-snarks'}>READ</div>
                    </div>
                    <div className='flex-column fl-ai-center'>
                        <img src={''} width={46} height={46}/>
                        <div className='font-color-42' style={{fontSize:'18px',fontWeight:'bold',marginTop:'20px'}}>Learn Zcash</div>
                        <div className='font-color-42' style={{fontSize:'14px',marginTop:'12px'}}>https://z.cash/learn/what-are-zk-snarks/</div>
                        <div className='network-circle font-color-42 flex-center' onClick={()=>window.location.href='    https://z.cash/learn/what-are-zk-snarks/'}>READ</div>
                    </div>
                </div>
                <div style={{height:'225px'}}/>
            </div>

            <PCFooter />
        </div>
    )
}
