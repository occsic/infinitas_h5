import React, {useEffect, useRef, useState} from "react";
import './PC.css'
import PCHeader from "../../component/PCHeader";
import about from '../../static/about.png'
import HomePCStandFor from "./Component/HomePCStandFor";
import HomePCFocus from "./Component/HomePCFocus";
import {Carousel} from "antd";
import HomePCSolutions from "./Component/HomePCSolutions";
import HomeOverallComponent from "./Component/HomeOverallComponent";
import HomePCRoadmap from "./Component/HomePCRoadmap";
import PCFooter from "../../component/PCFooter";
import {useSearchParams} from "react-router-dom";

export default function InfinitasHomePC() {
    const [searchParams] = useSearchParams()
    const scrollId=searchParams.get('id')
    const roadmapRef = useRef()
    const [roadMapStatus, setRoadMapStatus] = useState(2);//0.2021 1.2022 2.2023 3.2024
    const onRoadMapCarouselChange = status => {
        setRoadMapStatus(status)
        roadmapRef.current.goTo(status)
    }
    const roadmapList = [
        [[{
            text: 'DeFi 2.0 project - Paraluni established',
            anchor: ''
        }, {text: 'Complete the translation of RGB protocol documents', anchor: ''}]],
        [
            [{
                text: 'Community established',
                anchor: ''
            }, {text: 'BTC ecosystem network project - BiHelix established', anchor: ''}],
        ],
        [
            [{text: 'Paraluni TVL reaches', anchor: '$50M+'}],
            [{text: 'RGB v0.10 released', anchor: ''}, {
                text: 'Community followers reached ',
                anchor: '50K+'
            }, {text: 'BiHelix seed round launched', anchor: ''}],
            [{text: 'BTB miners reached ', anchor: '5K+'}, {
                text: 'Community followers reached',
                anchor: '100K+'
            }, {text: 'RGB & BTC-Eco related research released', anchor: ''}, {
                text: 'Join the LNP/BP Association',
                anchor: '',
                noSlice: true
            }],
            [{
                text: 'Develop and release the BiHelix testnet',
                anchor: '',
                noSlice: true
            }, {
                text: 'Cooperation with mainstream wallets',
                anchor: '',
                noSlice: true
            }, {
                text: 'Develop BiHelix mainnet',
                anchor: '',
                noSlice: true
            }, {text: 'Launched the official version of data explorer', anchor: '', noSlice: true}]
        ],
        [
            [{
                text: 'Launched BiHelix mainnet ',
                anchor: 'BTC Halve',
                noSlice: true
            }, {text: 'Building DeFi (DEX) Schemas ', anchor: '', noSlice: true}, {
                text: 'Provide SDKs',
                anchor: '',
                noSlice: true
            }],
            [{
                text: 'Total number of ecosystem projects reaches',
                anchor: '200+',
                noSlice: true
            }, {
                text: 'Listing on centralized exchange',
                anchor: '',
                noSlice: true
            }, {text: 'Development of DApp integration environment', anchor: '', noSlice: true}],
        ]
    ]

    useEffect(()=>{
       if(scrollId){
           document.getElementById(scrollId).scrollIntoView()
       }
    },[scrollId])

    useEffect(()=>{
        if(roadmapRef.current){
            roadmapRef.current.goTo(2)
        }

    },[roadmapRef])
    return (
        <div className='home-pc'>

            {/*头部*/}

            <PCHeader />
            <div style={{height: '84px'}}/>

            {/*第一部分*/}
            <div className='flex-center' style={{backgroundImage: 'url(https://static.paraluni.org/images/infiweb/home_bg1.png)', width: '100vw',minWidth:'1200px',backgroundSize:"100% 100%"}}>
                <div className='height-scale common-width flex-column fl-jc-center'>
                    <div className='hpo-fontA'>BASED ON BITCOIN PROVIDE INFINITELY SCALABLE POWER FOR WEB 3.0</div>
                    <div className='hpo-fontB'>TO MEET THE VALUE PURSUIT OF 100 MILLION PEOPLE WHO ARE FASTER, TRUER AND
                        SAFER.
                    </div>
                    <div className='hpo-start-border' onClick={()=> window.scrollTo(0,900)}>
                        <div className='hpo-start flex-center'>
                            <img style={{marginRight:'5px'}} src={'https://static.paraluni.org/images/infiweb/BTC.png'} width={23} height={23}/>
                            EGIN</div>
                    </div>
                </div>
            </div>


            {/*about us*/}
            <div className='height-900 common-width flex-column fl-jc-center' style={{backgroundColor: "#ffffff"}} id={'about'}>
                <div className='hp-fontC'>ABOUT US</div>
                <div className='hp-fontD'>BIHELIX IS A TURING-COMPLETE BITCOIN APPLICATION ECOSYSTEM WITH INFINITE SCALABILITY. BIHELIX WILL CREATE THE NEXT GENERATION OF BITCOIN LARGE-SCALE APPLICATION SCENARIOS.
                </div>
                <div className='flex-column fl-ai-end' style={{marginTop: '120px'}}>
                    <div className='flex-row'>
                        <img width={30} height={30} src={about}/>
                        <div style={{fontSize: '16px', width: '587px', marginLeft: '14px'}}>
                            Combining the mutual support and complement of the Lightning Network and the RGB protocol,
                            BiHelix can achieve a more efficient and scalable Bitcoin ecosystem. Make Bitcoin greater
                            again.
                        </div>
                    </div>
                    <div className='flex-row' style={{marginTop: '65px'}}>
                        <img width={30} height={30} src={about}/>
                        <div style={{fontSize: '16px', width: '587px', marginLeft: '14px'}}>
                            Create a fairer decentralized crypto world for miners, verifiers, node service providers,
                            exchanges, and users. In the future, hundreds of millions of economic participants will be
                            active in the ecosystem to create value.
                        </div>
                    </div>
                </div>
            </div>


            {/*we stand for*/}
            <div className='flex-center' style={{backgroundColor: '#ece8e1', width: '100vw',minWidth:'1200px'}} id={'stand'}>
                <div className='common-width flex-column fl-jc-center' style={{height: '1033px'}}>
                    <div className='stand-fontA'>WE STAND FOR</div>
                    <div className='flex-row fl-jc-between' style={{marginTop: '40px'}}>
                        <HomePCStandFor
                            title={'POW PROTECTION'}
                            width={351}
                            textWidth={255}
                            describe={'It ensures that BiHelix assets are protected by the whole- network hash rate in the Bitcoin blockchain, enhancing the security of assets.'}
                            img={'https://static.paraluni.org/images/infiweb/home_icon1.png'}
                        />
                        <HomePCStandFor
                            title={'ADAPTER TECHNOLOGY'}
                            width={331}
                            textWidth={252}
                            describe={'Through BiHelix adapter technology, users can realize the complete status of Bitcoin and enhance their perception of asset status.'}
                            img={'https://static.paraluni.org/images/infiweb/home_icon2.png'}
                        />
                        <HomePCStandFor
                            title={'PRIVACY PRESERVING+++'}
                            width={455}
                            textWidth={353}
                            describe={'A higher level of privacy protection for BiHelix assets has been achieved, and a trustless Bitcoin anchoring mechanism has been introduced to further enhance user privacy.'}
                            img={'https://static.paraluni.org/images/infiweb/home_icon3.png'}
                        />
                    </div>
                    <div className='flex-row fl-jc-between' style={{marginTop: '30px'}}>
                        <HomePCStandFor
                            title={'ENRICHED GLOBAL STATE'}
                            width={612}
                            textWidth={485}
                            describe={'Extended Global State, which is critical for building complex applications (such as synthetic assets, algorithmic stablecoins, etc.) on RGB. Make the RGB contract have a global state that can be accessed by virtual machines and clients (such as wallets, etc.).'}
                            img={'https://static.paraluni.org/images/infiweb/home_icon4.png'}
                        />
                        <HomePCStandFor
                            width={556}
                            title={'OPTIMIZING THE LIGHTNING NETWORK'}
                            textWidth={454}
                            describe={'Through improvements to the Lightning Network (such as light block technology, node automatic expansion technology, and offline autonomy), higher transaction throughput is achieved while maintaining low-latency transaction confirmation time.'}
                            img={'https://static.paraluni.org/images/infiweb/home_icon5.png'}
                        />
                    </div>
                </div>
            </div>

            {/*FOUCS*/}
            {/*<div className='flex-center' style={{backgroundColor: '#0f1923', width: '100vw',minWidth:'1200px'}} id={'focus'}>*/}
            {/*    <div className='height-900 common-width'>*/}
            {/*        <div className='font-color-white'*/}
            {/*             style={{fontSize: '40px', marginTop: '120px', fontWeight: 800}}>FOCUS*/}
            {/*        </div>*/}
            {/*        <div className='flex-row fl-ai-center fl-jc-between' style={{marginTop: '111px'}}>*/}
            {/*            <HomePCFocus width={281} text={'DAILY ACTIVE WALLET ADDRESSES'} title={'16K'} textWidth={244}/>*/}
            {/*            <HomePCFocus width={281} text={'COMMUNITY FOLLOWERS'} title={'100K+'} textWidth={150}/>*/}
            {/*            <HomePCFocus width={376} text={'DAILY ACTIVE WALLET ADDRESSES'} title={'4 YEARS+'}*/}
            {/*                         textWidth={244}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*solutions*/}
            <div className='height-900 common-width flex-column fl-jc-center solutions'
                 style={{backgroundColor: "#ffffff"}} id={'solutions'}>
                <div className='font-color-42 ' style={{fontSize: '40px', fontWeight: 800}}>SOLUTIONS</div>
                <Carousel dotPosition={'left'} autoplay>
                    <HomePCSolutions title={'SLR (SECURITY-LIGHTING-RGB) PROTOCOL'}
                                     text={'RGB and Lightning Network are re-encapsulated, and a transaction data of the client and a UTXO of Bitcoin are sealed at one time. The smart contracts of the RGB protocol only function in the client-side verification paradigm, keeping asset data in a state outside of the blockchain or Lightning Network.'}
                                     img={'https://static.paraluni.org/images/infiweb/home_bg2.png'}
                    />
                    <HomePCSolutions title={'FATLINE PROTOCOL'}
                                     text={'Fatline Protocol is a lightweight communication + storage protocol between RGB clients. It is compatible with the Nostr protocol to achieve efficient communication between nodes. The communication speed can reach more than 10 times that of Storm+Bifrost.'}
                                     img={'https://static.paraluni.org/images/infiweb/home_bg3.png'}/>
                    <HomePCSolutions title={'RZK (Recursive Zero Knowledge)'}
                                     text={'RZK=Z0(...Zn-2(Zn-2,Zn-1)Zn . The verifier does not need to verify the block from scratch, but only needs to download the current block for simple verification. The latest block will include the proof from the founding block to the current block.'}
                                     img={'https://static.paraluni.org/images/infiweb/home_bg4.png'}/>

                </Carousel>
            </div>

            {/*OVERALL ARCHITECTURE*/}
            <div className='flex-center' style={{backgroundColor: '#ece8e1', width: '100vw',minWidth:'1200px'}} id={'overall'}>
                <div className='common-width' style={{height: '1456px'}}>
                    <div className='stand-fontA' style={{marginTop: '150px'}}>OVERALL ARCHITECTURE</div>

                    <div className='flex-row' style={{marginTop: '48px'}}>
                        <HomeOverallComponent width={222} height={140} bgColor={'#000000'} fontSize={'20'}
                                              fontWeight={800} text={'APPLICATION LAYER'} color={'#FFFFFF'}
                                              textWidth={118}/>
                        <div className='flex-column fl-jc-between flex-1' style={{marginLeft:'25px'}}>
                            <div className='flex-row fl-jc-between'>
                                <HomeOverallComponent width={290} height={60} left={25} text={'DeFi'}/>
                                <HomeOverallComponent width={290} height={60} left={25} text={'NFT Marketplace'}/>
                                <HomeOverallComponent width={290} height={60} left={25}
                                                      text={'Decentralized Identity'}/>
                            </div>
                            <div className='flex-row fl-jc-between'>
                                <HomeOverallComponent width={290} height={60} left={25} text={'Gaming'}/>
                                <HomeOverallComponent width={290} height={60} left={25} text={'Infrastructure'}/>
                                <HomeOverallComponent width={290} height={60} left={25} text={'Others'}/>
                            </div>
                        </div>
                    </div>

                    <div className='flex-row' style={{marginTop: '24px'}}>
                        <HomeOverallComponent width={222} height={157} bgColor={'#000000'} fontSize={'20'}
                                              fontWeight={800} text={'PRODUCT LAYER'} color={'#FFFFFF'}
                                              textWidth={86}/>
                        <div className='flex-column fl-jc-between flex-1' style={{marginLeft:'25px'}}>
                            <div className='flex-row fl-jc-between'>
                                <HomeOverallComponent width={446} height={77} left={25}
                                                      text={'Contract Development Test Suites DApps Development Tools'}
                                                      textWidth={230}/>
                                <HomeOverallComponent width={446} height={77} left={25}
                                                      text={'DApps Integrated Development Environment Other Extension Tools'}
                                                      textWidth={306}/>
                            </div>
                            <div className='flex-row fl-jc-between'>
                                <HomeOverallComponent width={289} height={60} left={25}
                                                      text={'Ecosystem Entrance: Wallet'}/>
                                <HomeOverallComponent width={289} height={60} left={25}
                                                      text={'Data Tools: Data Explorer'}/>
                                <HomeOverallComponent width={289} height={60} left={25}
                                                      text={'Other Extension Tools'}/>
                            </div>
                        </div>
                    </div>

                    <div className='flex-row' style={{marginTop: '24px'}}>
                        <HomeOverallComponent width={222} height={140} bgColor={'#000000'} fontSize={'20'}
                                              fontWeight={800} text={'SCHEMAS LAYER'} color={'#FFFFFF'}
                                              textWidth={86}/>
                        <div className='flex-column fl-jc-between flex-1' style={{marginLeft:'25px'}}>
                            <div className='flex-row fl-jc-between'>
                                <HomeOverallComponent width={290} height={60} left={25}
                                                      text={'Synthetic Assets Schemas'}/>
                                <HomeOverallComponent width={290} height={60} left={25} text={'GameFi Schemas'}/>
                                <HomeOverallComponent width={290} height={60} left={25} text={'Other Schemas'}/>
                            </div>
                            <div className='flex-row fl-jc-between'>
                                <HomeOverallComponent width={290} height={60} left={25} text={'DEX Schemas'}/>
                                <HomeOverallComponent width={290} height={60} left={25} text={'Staking Schemas'}/>
                                <HomeOverallComponent width={290} height={60} left={25} text={'Lending Schemas'}/>
                            </div>
                        </div>
                    </div>

                    <div className='flex-row' style={{marginTop: '24px'}}>
                        <HomeOverallComponent width={222} height={140} bgColor={'#000000'} fontSize={'20'}
                                              fontWeight={800} text={'NETWORK LAYER'} color={'#FFFFFF'} textWidth={90}/>
                        <div className='flex-row flex-1 fl-jc-between' style={{marginLeft:'25px'}}>
                            <HomeOverallComponent width={447} height={140} left={25} text={'BiHelix Testnet'}/>
                            <HomeOverallComponent width={447} height={140} left={25} text={'BiHelix Mainnet'}/>
                        </div>
                    </div>

                    <div className='flex-row' style={{marginTop: '24px'}}>
                        <HomeOverallComponent width={222} height={140} bgColor={'#000000'} fontSize={'20'}
                                              fontWeight={800} text={'PROTOCOL LAYER'} color={'#FFFFFF'} textWidth={90}/>
                        <div className='flex-row flex-1 fl-jc-between' style={{marginLeft:'25px'}}>
                            <HomeOverallComponent width={290} height={140} left={25} text={'Lightning Network Node'}/>
                            <HomeOverallComponent width={290} height={140} left={25} text={'RGB Node'}/>
                            <HomeOverallComponent width={290} height={140} left={25}
                                                  text={'Communication/Storage Node'}/>
                        </div>
                    </div>

                    <div className='flex-row' style={{marginTop: '24px'}}>
                        <HomeOverallComponent width={222} height={140} bgColor={'#000000'} fontSize={'20'}
                                              fontWeight={800} text={'DATA LAYER'} color={'#FFFFFF'} textWidth={90}/>
                        <div className='flex-row flex-1 fl-jc-between' style={{marginLeft:'25px'}}>
                            <HomeOverallComponent width={290} height={140} left={25} text={'LNP/BP Association'}/>
                            <HomeOverallComponent width={290} height={140} left={25} text={'Open Source Toolchain'}/>
                            <HomeOverallComponent width={290} height={140} left={25}
                                                  text={'Fundamental Document Repository'}/>
                        </div>
                    </div>
                </div>
            </div>

            {/*ROADMAP*/}
            {/*<div className='flex-center' style={{backgroundColor: '#0f1923', width: '100vw',minWidth:'1200px'}} id={'overall'}>*/}
            {/*    <div className='common-width' style={{height: '1080px'}} id={'roadmap'}>*/}
            {/*        <div className='font-color-white' style={{fontSize: '40px', marginTop: '139px', fontWeight: 800}}>ROADMAP*/}
            {/*        </div>*/}
            {/*        <div style={{height: '48px'}}/>*/}
            {/*        <Carousel dotPosition={'bottom'} ref={roadmapRef} dots={false}>*/}
            {/*            <HomePCRoadmap list={roadmapList[0]}/>*/}
            {/*            <HomePCRoadmap list={roadmapList[1]}/>*/}
            {/*            <HomePCRoadmap list={roadmapList[2]}/>*/}
            {/*            <HomePCRoadmap list={roadmapList[3]}/>*/}
            {/*        </Carousel>*/}


            {/*        <div className='flex-row fl-jc-between' style={{marginTop: '100px'}}>*/}
            {/*            <div className='flex-column road-time' onClick={() => onRoadMapCarouselChange(0)}>*/}
            {/*                <div className={roadMapStatus === 0 ? 'road-time-check' : 'road-time-common'}>2021</div>*/}
            {/*                <div className={roadMapStatus === 0 ? 'road-line-check' : 'road-line-common'}/>*/}
            {/*            </div>*/}
            {/*            <div className='flex-column road-time' onClick={() => onRoadMapCarouselChange(1)}>*/}
            {/*                <div className={roadMapStatus === 1 ? 'road-time-check' : 'road-time-common'}>2022</div>*/}
            {/*                <div className={roadMapStatus === 1 ? 'road-line-check' : 'road-line-common'}/>*/}
            {/*            </div>*/}
            {/*            <div className='flex-column road-time' onClick={() => onRoadMapCarouselChange(2)}>*/}
            {/*                <div className={roadMapStatus === 2 ? 'road-time-check' : 'road-time-common'}>2023</div>*/}
            {/*                <div className={roadMapStatus === 2 ? 'road-line-check' : 'road-line-common'}/>*/}
            {/*            </div>*/}
            {/*            <div className='flex-column road-time' onClick={() => onRoadMapCarouselChange(3)}>*/}
            {/*                <div className={roadMapStatus === 3 ? 'road-time-check' : 'road-time-common'}>2024</div>*/}
            {/*                <div className={roadMapStatus === 3 ? 'road-line-check' : 'road-line-common'}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <PCFooter
                click1={()=> document.getElementById('about').scrollIntoView()}
                click2={()=> document.getElementById('stand').scrollIntoView()}
                // click3={()=> document.getElementById('focus').scrollIntoView()}
                click4={()=> document.getElementById('solutions').scrollIntoView()}
                click5={()=> document.getElementById('overall').scrollIntoView()}
                // click6={()=> document.getElementById('roadmap').scrollIntoView()}
            />

        </div>
    )
}

