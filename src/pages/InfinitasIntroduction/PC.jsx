import React from "react";
import './PC.css'
import { Carousel } from 'antd';
import bg1 from './image/pc_bg1.svg'
import bg2 from './image/pc_bg2.svg'
import logo from './image/logo.svg'
import more from  './image/learn_more.svg'
import floor from './image/floor.svg'
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

            {/*第二部分*/}
            <div className='ptwo flex-column fl-ai-center'>
                <div className='flex-row fl-ai-center fl-jc-between' style={{width:'80%'}}>
                    <div className='flex-column' style={{flex:0.5}}>
                        <div className='pfontC' style={{fontSize:'64px'}}>How to understand</div>
                        <div className='pfontC' style={{fontSize:'142px'}}>RGB</div>
                        <div className='pfontB' style={{maxWidth:'555px'}}>On top of Bitcoin, integrated lightning network, with unlimited scalability of the smart contract protocol</div>
                    </div>
                        <div style={{flex:0.5}} className='flex-row fl-jc-center'>
                            <img src={more} />
                        </div>
                </div>
                <div className='flex-row fl-ai-center fl-jc-between' style={{width:'80%'}}>
                    <div  style={{flex:0.5}}>
                        <img src={floor}/>
                    </div>

                    <div className='flex-column' style={{flex:0.5}}>
                        <div className='flex-row fl-ai-center'>
                            <div className='pcircle'/>
                            <div className='pfontC' style={{fontSize:'24px',marginLeft:'10px'}}>RGB protocol network (Ecological layer)</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop:'100px'}}>
                            <div className='pcircle'/>
                            <div className='pfontC ' style={{fontSize:'24px',marginLeft:'10px'}}>Lightning Network (Payment Channel)</div>
                        </div>
                        <div className='flex-row fl-ai-center'  style={{marginTop:'100px'}}>
                            <div className='pcircle'/>
                            <div className='pfontC' style={{fontSize:'24px',margi1nLeft:'10px'}}>BTC blockchain (Security Commitment Layer)</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*第三部分*/}
            <div className='pthree flex-column fl-ai-center' >
                <div className='pfontD' style={{marginTop:'20px'}}>What’s new at  <span className='pfontF' style={{fontSize:'120px'}}>Infinitas</span></div>
            </div>
        </div>
    )
}
