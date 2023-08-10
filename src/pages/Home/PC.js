import React from "react";
import './PC.css'
import PCHeader from "../../component/PCHeader";
import about from '../../static/about.png'
import HomePCStandFor from "./Component/HomePCStandFor";
import HomePCFocus from "./Component/HomePCFocus";
import {Carousel} from "antd";
import HomePCSolutions from "./Component/HomePCSolutions";

export default function InfinitasHomePC() {

    return (
        <div className='home-pc'>

            {/*头部*/}
            <div className='flex-center' style={{backgroundColor: '#0f1923', width: '100vw'}}>
                <PCHeader/>
            </div>

            {/*第一部分*/}
            <div className='flex-center' style={{backgroundColor: '#0f1923', width: '100vw'}}>
                <div className='height-900 common-width'>
                    <div className='hpo-fontA'>BASED ON BITCOIN PROVIDE INFINITELY SCALABLE POWER FOR WEB 3.0</div>
                    <div className='hpo-fontB'>TO MEET THE VALUE PURSUIT OF 100 MILLION PEOPLE WHO ARE FASTER, TRUER AND
                        SAFER.
                    </div>
                    <div className='hpo-start-border'>
                        <div className='hpo-start flex-center'>START</div>
                    </div>
                </div>
            </div>


            {/*about us*/}
            <div className='height-900 common-width flex-column fl-jc-center' style={{backgroundColor: "#ffffff"}}>
                <div className='hp-fontC'>ABOUT US</div>
                <div className='hp-fontD'>INFINITAS IS A TURING-COMPLETE BITCOIN application ecosystem with infinite
                    scalability. Infinitas will create the next generation of bitcoin large-scale application scenarios.
                </div>
                <div className='flex-column fl-ai-end' style={{marginTop: '120px'}}>
                    <div className='flex-row'>
                        <img width={30} height={30} src={about}/>
                        <div style={{fontSize: '16px', width: '587px', marginLeft: '14px'}}>
                            Combining the mutual support and complement of the Lightning Network and the RGB protocol,
                            Infinitas can achieve a more efficient and scalable Bitcoin ecosystem. Make Bitcoin greater
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
            <div className='flex-center' style={{backgroundColor: '#ece8e1', width: '100vw'}}>
                <div className='common-width flex-column fl-jc-center' style={{height: '1033px'}}>
                    <div className='stand-fontA'>WE STAND FOR</div>
                    <div className='flex-row fl-jc-between' style={{marginTop: '40px'}}>
                        <HomePCStandFor
                            title={'POW PROTECTION'}
                            width={305}
                            textWidth={256}
                            describe={'It ensures that Infinitas assets are protected by the whole- network hash rate in the Bitcoin blockchain, enhancing the security of assets.'}/>
                        <HomePCStandFor
                            title={'ADAPTER TECHNOLOGY'}
                            width={305}
                            textWidth={256}
                            describe={'Through Infinitas adapter technology, users can realize the complete status of Bitcoin and enhance their perception of asset status.'}/>
                        <HomePCStandFor
                            title={'PRIVACY PRESERVING+++'}
                            width={305}
                            textWidth={256}
                            describe={'A higher level of privacy protection for Infinitas assets has been achieved, and a trustless Bitcoin anchoring mechanism has been introduced to further enhance user privacy.'}/>
                    </div>
                    <div className='flex-row fl-jc-between' style={{marginTop: '48px'}}>
                        <HomePCStandFor
                            title={'ENRICHED GLOBAL STATE'}
                            width={484}
                            textWidth={357}
                            describe={'Extended Global State, which is critical for building complex applications (such as synthetic assets, algorithmic stablecoins, etc.) on RGB. Make the RGB contract have a global state that can be accessed by virtual machines and clients (such as wallets, etc.).'}/>
                        <HomePCStandFor
                            title={'OPTIMIZING THE LIGHTNING NETWORK'}
                            textWidth={409}
                            describe={'Through improvements to the Lightning Network (such as light block technology, node automatic expansion technology, and offline autonomy), higher transaction throughput is achieved while maintaining low-latency transaction confirmation time.'}/>
                    </div>
                </div>
            </div>

            {/*FOUCS*/}
            <div className='flex-center' style={{backgroundColor: '#0f1923', width: '100vw'}}>
                <div className='height-900 common-width'>
                    <div className='font-color-white'
                         style={{fontSize: '40px', marginTop: '120px', fontWeight: 800}}>FOCUS
                    </div>
                    <div className='flex-row fl-ai-center fl-jc-between' style={{marginTop: '111px'}}>
                        <HomePCFocus width={281} text={'DAILY ACTIVE WALLET ADDRESSES'} title={'16K'} textWidth={244}/>
                        <HomePCFocus width={281} text={'COMMUNITY FOLLOWERS'} title={'100k+'} textWidth={150}/>
                        <HomePCFocus width={376} text={'DAILY ACTIVE WALLET ADDRESSES'} title={'4 YEARS+'} textWidth={244}/>
                    </div>
                </div>
            </div>

            {/*solutions*/}
            <div className='height-900 common-width flex-column fl-jc-center' style={{backgroundColor: "#ffffff"}}>
                <div className='font-color-42 ' style={{fontSize:'40px',fontWeight:800}}>SOLUTIONS</div>
                <Carousel dotPosition={'left'}>
                    <HomePCSolutions title={'SLR (SECURITY-LIGHTING-RGB) PROTOCOL'} text={' RGB and Lightning Network are re-encapsulated, and a transaction data of the client and a UTXO of Bitcoin are sealed at one time. The smart contracts of the RGB protocol only function in the client-side verification paradigm, keeping asset data in a state outside of the blockchain or Lightning Network.'} />
                    <HomePCSolutions title={'SLR (SECURITY-LIGHTING-RGB) PROTOCOL'} text={' RGB and Lightning Network are re-encapsulated, and a transaction data of the client and a UTXO of Bitcoin are sealed at one time. The smart contracts of the RGB protocol only function in the client-side verification paradigm, keeping asset data in a state outside of the blockchain or Lightning Network.'} />
                    <HomePCSolutions title={'SLR (SECURITY-LIGHTING-RGB) PROTOCOL'} text={' RGB and Lightning Network are re-encapsulated, and a transaction data of the client and a UTXO of Bitcoin are sealed at one time. The smart contracts of the RGB protocol only function in the client-side verification paradigm, keeping asset data in a state outside of the blockchain or Lightning Network.'} />
                </Carousel>
            </div>

            {/*OVERALL ARCHITECTURE*/}
            <div className='flex-center' style={{backgroundColor: '#ece8e1', width: '100vw'}}>
                <div className='common-width' style={{height:'1222px'}}>
                    <div className='stand-fontA'>OVERALL ARCHITECTURE</div>
                </div>
            </div>

        </div>
    )
}

