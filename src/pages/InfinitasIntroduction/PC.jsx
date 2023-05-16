import React from "react";
import './PC.css'
import { Carousel } from 'antd';
import bg1 from './image/pc_bg1.svg'
import bg2 from './image/pc_bg2.svg'
import logo from './image/logo.svg'
export default function InfinitasIntroductionPC(){
    return (
        <div className='flex-column'>
            {/*第一部分*/}
            <div className='pheader'>
                    <img src={logo} width={194}/>
                <div className='flex-row fl-ai-center'>
                    <div className='pfontE'>RGB</div>
                    <div className='pfontE'>Ecosystem</div>
                    <div className='pfontE'>Network</div>
                    <div className='pfontE'>Developers</div>
                    <div className='pfontE'>Community</div>
                    <div className='pheader-contact flex-center'>Contact  Us</div>
                </div>
            </div>
            <Carousel autoplay={false} dots={false}>
                <div>
                   <div style={{position:'relative'}}>
                       <img src={bg1} width={'100%'} height={900} style={{objectFit:'cover'}} />
                       <div className='top-body flex-column fl-ai-center fl-jc-center'>
                           <div className='pfontA'>On top of Bitcoin, integrated lightning network, blockchain ecology with infinite scalability</div>
                           <div className='pfontB' style={{marginTop:'30px'}}>On the bitcoin public chain, integrated lightning network, with infinite </div>
                           <div className='pfontB'>scalability of the blockchain ecosystem</div>
                       </div>
                   </div>
                </div>

                <div>
                    <div style={{position:'relative'}}>
                        <img src={bg2} width={'100%'} height={900} style={{objectFit:'cover'}}/>
                        <div className='top-body flex-column fl-jc-center'>
                            <div className='pfontC'>Beyond</div>
                            <div className='pfontD'>Go a step further into the metaverse</div>
                        </div>
                    </div>
                </div>
            </Carousel>

            <div className='ptwo'>

            </div>

        </div>
    )
}
