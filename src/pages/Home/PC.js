import React from "react";
import './PC.css'
import PCHeader from "../../component/PCHeader";
import about from '../../static/about.png'

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
                <div className='height-900 common-width flex-column fl-jc-center'>
                    <div className='stand-fontA'>WE STAND FOR</div>
                </div>
            </div>

        </div>
    )
}
