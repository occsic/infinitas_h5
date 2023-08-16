import React, {useRef, useState} from "react";
import './PC.css'
import PCHeader from "../../component/PCHeader";
import {Carousel} from "antd";
import RGBPCMainFeatures from "./Component/RGBPCMainFeatures";
import PCFooter from "../../component/PCFooter";

export default function RGBPC() {
    const designRef = useRef()
    const designImgRef1=useRef()
    const designImgRef2=useRef()
    const [designStatus, setDesignStatus] = useState(0)
    const onDesignCarouselChange = (status) => {
        setDesignStatus(status)
        designRef.current.goTo(status)
    }
    return (
        <div className='home-pc'>
            <PCHeader/>
            <div style={{height: '100px'}}/>
            <div className='flex-center' style={{backgroundColor: '#0f1923', width: '100vw'}}>
                <div className='common-width height-scale flex-column fl-jc-center'>
                    <div className='rgb-fontA'>WHAT IS RGB?</div>
                    <div className='rgb-des' style={{marginTop: '60px'}}>
                        RGB IS AN EXTENSIBLE AND SECURE INTELLIGENT CONTRACT SYSTEM FOR BITCOIN AND LIGHTNING NETWORK
                        DEVELOPED
                        BY LNP/BP STANDARDS ASSOCIATION. IT ADOPTS THE CONCEPTS OF PRIVATE OWNERSHIP AND COMMON
                        OWNERSHIP, AND
                        IS A TURING -COMPLETE AND DISTRUSTFUL DISTRIBUTED COMPUTING FORM, WHICH DOES NOT NEED TO
                        INTRODUCE A
                        NON-BLOCK DECENTRALIZATION PROTOCOL OF TOKENS.

                    </div>
                    <div className='flex-row fl-ai-center fl-jc-between' style={{marginTop: '30px'}}>
                        <div className='rgb-des' style={{flex: 0.48, height: '260px'}}>
                            THE PROTOTYPE IS BASED ON THE CONCEPTS OF CLIENT-
                            SIDE VALIDATION AND SINGLE-USE-SEALS PROPOSED BY
                            PETER TODD IN 2016, AND RUNS ON THE LAYER2 AND
                            LAYER3 (OUT OF THE CHAIN) OF THE BITCOIN ECOSYSTEM.

                            <div style={{marginTop: '30px'}}>
                                ORIGINAL LINK:
                                HTTPS://PETERTODD.ORG/2017/SCALABLE-SINGLE-USE-SEAL-
                                ASSET-TRANSFER
                            </div>
                        </div>
                        <div className='rgb-des' style={{flex: 0.48, height: '260px'}}>
                            THE DESIGN PURPOSE OF RGB IS TO RUN SCALABLE, ROBUST AND PRIVATE
                            SMART CONTRACTS ON UTXO BLOCKCHAIN (SUCH AS BITCOIN) TO REALIZE ALL
                            POSSIBILITIES. THROUGH RGB, DEVELOPERS CAN EXECUTE SMART CONTRACTS SUCH
                            AS TOKEN ISSUANCE, NFT, DEFI, DAO, AND MORE COMPLEX CATEGORIES.
                        </div>
                    </div>
                </div>
            </div>

            {/*design code*/}
            <div className='common-width' style={{backgroundColor: "#ffffff"}}>
                <div className='font-color-42'
                     style={{fontWeight: 800, fontSize: '40px', textAlign: 'center', marginTop: '112px'}}>DESIGN CORE
                </div>
                <div className='flex-row fl-ai-center fl-jc-between' style={{marginTop: '48px'}}>
                    <div style={{width: '50%'}}>
                        <Carousel dots={false} ref={designRef}>
                            <div>
                                <div className='font-color-42 font-size-16' style={{width: '485px'}}>
                                    <span style={{fontSize: '24px'}}>C</span>imilar to the Single-use-seals used to protect
                                    freight containers in the real world, the original meaning of single-use-seal sis a unique
                                    object that can be closed on messages only once. Once it is used, it will be permanently
                                    opened and cannot be closed again. Whenever the status of a smart contract changes on the
                                    RGB network, a bitcoin native UTXO will be created in the owner's wallet. When the owner
                                    submits a transaction on the RGB network, the UTXO is spent/closed. In short, single-use-seal
                                    is an abstract mechanism to prevent double payment.
                                </div>
                                <div className='learn-more' onClick={()=>window.location.href='https://medium.com/@FedericoTenga/understanding-rgb-protocol-7dc7819d3059'}>LEARN MORE</div>
                            </div>
                            <div>
                                <div className='font-color-42 font-size-16' style={{width: '485px'}}>
                                    <span style={{fontSize: '24px'}}>C</span>lient-side validation is a paradigm
                                    proposed by Peter Todd in 2016. Its core idea is that in a distributed system, the
                                    validation of state does not need to be implemented globally by all parties involved
                                    in the decentralization protocol; Instead, only the parties involved in a specific
                                    state transition need to verify. Using this method, the state transition is not
                                    published in the global network, but transformed into a short encrypted commitment
                                    by using a cryptographic hash function, which needs to be a part of a
                                    "Proof-of-Publication" medium and has three main characteristics: receipt proof,
                                    non-publication proof and membership proof. The first Client-side validation system
                                    is the Open Time Stamps protocol, which was also proposed and developed by Peter
                                    Todd in 2014-2016.
                                </div>
                                <div className='learn-more' onClick={()=>window.location.href='https://medium.com/@FedericoTenga/understanding-rgb-protocol-7dc7819d3059'}>LEARN MORE</div>
                            </div>

                        </Carousel>
                        <div className='flex-row fl-ai-center' style={{marginTop: '50px'}}>
                            <div className='flex-column road-time' onClick={() => onDesignCarouselChange(0)}>
                                <div className={designStatus === 0 ? 'road-time-check-aa' : 'road-time-common-aa'}>SINGLE-USE-SEALS</div>
                                <div className={designStatus === 0 ? 'road-line-check-aa' : 'road-line-common-aa'} style={{width: '200px'}}/>
                            </div>
                            <div className='flex-column road-time' style={{marginLeft: '100px'}} onClick={() => onDesignCarouselChange(1)}>
                                <div className={designStatus === 1 ? 'road-time-check-aa' : 'road-time-common-aa'}>CLIENT-SIDE VALIDATION</div>
                                <div className={designStatus === 1 ? 'road-line-check-aa' : 'road-line-common-aa'} style={{width: '200px'}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '50%'}}>
                    <div className='flex-row fl-ai-center' style={{position:'relative'}}>
                        <img ref={designImgRef1} src={'https://static.paraluni.org/images/infiweb/rgb_bg14.svg'} className={`rgb-design-img ${designStatus===0?'rgbd-img-select':'rgbd-img-unselect'}`}/>
                        <img ref={designImgRef2} src={'https://static.paraluni.org/images/infiweb/rgb_bg13.svg'} className={`rgb-design-img ${designStatus===1?'rgbd-img-select':'rgbd-img-unselect'}`}/>
                    </div>
                    </div>
                </div>
                <div style={{height:'170px'}}/>
            </div>

            {/*MAIN FEATURES*/}
            <div className='flex-center bg-color-khaki' style={{width: '100vw'}}>
                <div className='common-width'>
                    <div className='font-color-42' style={{fontWeight: 800, fontSize: '40px', marginTop: '122px'}}>MAIN FEATURES</div>
                    <div className='flex-row fl-jc-between' style={{marginTop:'50px'}}>
                        <RGBPCMainFeatures sort={1} text={'High confidentiality, security, scalability'} img={'https://static.paraluni.org/images/infiweb/rgb_bg3.png'} textWidth={136}/>
                        <RGBPCMainFeatures sort={2} text={'There is no congestion in the bitcoin time chain, because the transaction only keeps homomorphic commitments that need extra storage.'} img={'https://static.paraluni.org/images/infiweb/rgb_bg4.png'} textWidth={172}/>
                        <RGBPCMainFeatures sort={3} text={'High confidentiality, security, scalability'} img={'https://static.paraluni.org/images/infiweb/rgb_bg5.png'} textWidth={171}/>
                        <RGBPCMainFeatures sort={4} text={'High confidentiality, security, scalability'} img={'https://static.paraluni.org/images/infiweb/rgb_bg6.png'} textWidth={169}/>
                        <RGBPCMainFeatures sort={5} text={'High confidentiality, security, scalability'} img={'https://static.paraluni.org/images/infiweb/rgb_bg7.png'} textWidth={150}/>
                    </div>
                    <div className='font-color-42' style={{fontWeight: 800, fontSize: '40px', marginTop: '270px'}}>RGB V0.10</div>
                    <div className='flex-row fl-jc-between' style={{marginTop:'48px'}}>
                        <div className='font-size-16 font-color-42' style={{width:'484px'}}>In April 2023, the LNP/BP Association announced the release of RGB v0.10, another important milestone
                            for the RGB protocol, bringing full support for smart contracts to Bitcoin and the Lightning Network. It is the culmination
                            of long-term cross-industry collaboration and more than four years of extensive development work between these Bitcoin
                            developers, contributors, and companies involved. The v0.10 version of the RGB protocol solves many problems that existed
                            in the old version, including the limitations of smart contract development, access to the consensus layer, limitations of
                            encoding formats, Rust Bitcoin dependency issues, lack of WASM compatibility, global state and context management problems,
                            integration issues with the Lightning Network, inflexibility of the backup process, insufficient support for mobile wallets, etc.
                            These improvements make the RGB protocol stronger, more flexible, and more secure, and lay a solid foundation for future development.</div>
                        <img src={'https://static.paraluni.org/images/infiweb/rgb_bg8.png'} width={612} height={400} />
                    </div>

                    <div className='rgb-download-out' onClick={()=>window.location.href='https://rgb.tech'}>
                        <div className='rgb-download-in flex-center flex-column'>
                            <div className='font-color-white' style={{fontSize:'12px'}}>download and installation</div>
                            <div className='font-color-white' style={{fontSize:'14px',fontWeight:'bold'}}>RGB V0.10</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*RGB IN INFINITAS*/}
            <div className='common-width'>
                <div className='font-color-42' style={{fontWeight: 800, fontSize: '40px', marginTop: '122px'}}>RGB IN INFINITAS</div>
                <div className='flex-row fl-jc-between' style={{marginTop:'48px'}}>
                    <div className='flex-row' >
                        <img src={'https://static.paraluni.org/images/infiweb/rgb_bg9.png'} width={178} height={190}/>
                        <div className='font-size-16 font-color-42' style={{marginLeft:'26px',width:'281px'}}>Infinitas will complete the RGB protocol's compatibility and support for the Lightning Network to create a Turing-complete Bitcoin intelligent application network. At the same time, the concept of Global State is introduced to help more developers build complex applications (such as synthetic assets, algorithmic stable coins, etc.) on RGB.</div>
                    </div>
                    <div className='flex-row'>
                        <img src={'https://static.paraluni.org/images/infiweb/rgb_bg10.png'} width={178} height={190}/>
                        <div className='font-size-16 font-color-42' style={{marginLeft:'26px',width:'281px'}}>Not only that, RGB v0.10 introduces a new smart contract model, and it is written and compiled in Rust, which can support various complex application scenarios. opens up possibilities.</div>
                    </div>
                </div>
                <div className='flex-row fl-jc-between' style={{marginTop:'48px'}}>
                    <div className='flex-row' >
                        <img src={'https://static.paraluni.org/images/infiweb/rgb_bg11.png'} width={178} height={190}/>
                        <div className='font-size-16 font-color-42' style={{marginLeft:'26px',width:'281px'}}>The RGB standard library can run without I/O and file system access. Replacing the complex stack with a single API library and rgb command line tools will enhance the mass adoption of Bitcoin and decentralized finance.</div>
                    </div>
                    <div className='flex-row'>
                        <img src={'https://static.paraluni.org/images/infiweb/rgb_bg12.png'} width={178} height={190}/>
                        <div className='font-size-16 font-color-42' style={{marginLeft:'26px',width:'281px'}}>In other words, Infinitas will make the use of RGB easier, and will cause a phenomenal explosion in Bitcoin applications.</div>
                    </div>
                </div>
                <div style={{height:'125px'}}/>
            </div>

            {/*DETAILED REFERENCE*/}
            <div className='flex-center bg-color-khaki' style={{width: '100vw'}}>
                <div className='common-width'>
                    <div className='font-color-42' style={{fontWeight: 800, fontSize: '40px', marginTop: '162px',textAlign:'center'}}>DETAILED REFERENCE</div>
                    <div className='font-color-42 font-size-16' style={{marginTop:'12px',textAlign:'center',textDecoration:'underline',cursor:'pointer'}} onClick={()=>window.location.href='  https://rgb.tech/blog/release-v0-10/'}>https://rgb.tech/blog/release-v0-10/</div>
                    <div style={{height:'75px'}}/>
                    <iframe width="1200" height="555" src="https://www.youtube.com/embed/VmB5SaaaABI"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen />
                    <div style={{height:'314px'}}/>
                </div>
            </div>

            <PCFooter />

        </div>
    )
}
