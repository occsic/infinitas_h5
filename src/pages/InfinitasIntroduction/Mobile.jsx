import React from "react";
import './Mobile.css'
import { Carousel } from 'antd';
import bg1 from './image/pc_bg1.svg'
import bg2 from './image/pc_bg2.svg'
import bg11 from './image/pc_bg11.png'
import bg12 from './image/pc_bg12.png'
import bg13 from './image/pc_bg13.png'
import bg14 from './image/pc_bg14.png'
import logo from './image/logo.svg'
import more from  './image/learn_more.svg'
import floor from './image/floor.svg'
import infinitas from './image/infinitas.svg'
import icon1 from './image/pc_icon1.svg'
import icon2 from './image/pc_icon2.svg'
import icon3 from './image/pc_icon3.svg'
import icon4 from './image/pc_icon4.svg'
import {Popover} from "antd";
import {
    MenuOutlined
} from '@ant-design/icons';
export default function InfinitasIntroductionMobile(){
    return (
        <div className='flex-column' style={{backgroundColor:'#1d1f2b'}}>
            {/*第一部分*/}
            <div className='mheader'>
                <img src={logo} width={194} style={{marginLeft:'15px'}}/>
                <MenuOutlined  style={{color:'#ffffff',fontSize:'24px',marginRight:'15px'}}/>
            </div>
            <Carousel autoplay={false} dots={false}>
                <div>
                    <div style={{position:'relative'}}>
                        <img src={bg1} width={'100%'} height={459} style={{objectFit:'cover'}} />
                        <div className='mtop-body flex-column fl-ai-center fl-jc-center'>
                            <div className='mfontA' style={{textAlign:'center'}}>
                                On top of Bitcoin, integrated lightning network, blockchain ecology with infinite scalability
                            </div>
                            <div className='mfontB' style={{textAlign:'center',marginTop:'25px'}}>On the bitcoin public chain, integrated lightning network, with infinite scalability of the blockchain ecosystem</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{position:'relative'}}>
                        <img src={bg2} width={'100%'} height={459} style={{objectFit:'cover'}}/>
                        <div className='top-body flex-column fl-jc-center'>
                            <div className='pfontC'>Beyond</div>
                            <div className='pfontD'>Go a step further into the metaverse</div>
                        </div>
                    </div>
                </div>
            </Carousel>

            {/*第二部分*/}
            <div className='flex-column fl-ai-center'>
                <div className='mfontA' style={{fontSize:'30px',marginTop:'40px'}}>How to understand</div>
                <div className='flex-row fl-ai-center' style={{marginTop:'-40px'}}>
                    <div className='mfontA'>RGB</div>
                    <img src={more} width={150}/>
                </div>
                <div className='mfontB' style={{width:'266px',marginTop:'-40px',fontSize:'14px'}}>On top of Bitcoin, integrated lightning network, with unlimited scalability of the smart contract protocol</div>
                <img src={floor} width={250}/>
              <div className='flex-column'>
                  <div className='flex-row fl-ai-center' style={{marginTop:'-30px'}}>
                      <div className='mcircle' />
                      <div className='mfontA' style={{fontSize:'14px',marginLeft:'10px'}}>RGB protocol network (Ecological layer)</div>
                  </div>
                  <div className='flex-row fl-ai-center' style={{marginTop:'30px'}}>
                      <div className='mcircle' />
                      <div className='mfontA' style={{fontSize:'14px',marginLeft:'10px'}}>Lightning Network (Payment Channel)</div>
                  </div>
                  <div className='flex-row fl-ai-center' style={{marginTop:'30px'}}>
                      <div className='mcircle' />
                      <div className='mfontA' style={{fontSize:'14px',marginLeft:'10px'}}>BTC blockchain (Security Commitment Layer)</div>
                  </div>
              </div>
                <div className='mfontA' style={{fontSize:'30px',marginTop:'50px'}}>What’s new at <span className='pfontF'>Infinitas</span></div>
                <img src={infinitas} width={140} style={{marginTop:'25px'}}/>
                    <div className='flex-column' style={{position:"relative",paddingLeft:'60px',width:'100%',marginTop:'40px'}}>
                        <div className='flex-row fl-ai-center'>
                            <div className='pcircle' />
                            <div className='mfontB' style={{marginLeft:'10px'}}>2022.12 Infinitas Established</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop:'30px'}}>
                            <div className='pcircle' />
                            <div className='mfontB' style={{marginLeft:'10px'}}>2023.03 Join the RGB protocol group</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop:'30px'}}>
                            <div className='pcircle' />
                            <div className='mfontB' style={{marginLeft:'10px'}}>2023.05 Get seed round investment</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop:'30px'}}>
                            <div className='pcircle' />
                            <div className='mfontB' style={{marginLeft:'10px'}}>2023.06 Start the research and development of Infinitas chain</div>
                        </div>
                        <div className='pline' style={{left:'67px'}}/>
                    </div>
                <div className='flex-column' style={{position:"relative",paddingLeft:'60px',marginTop:'60px',width:'100%'}}>
                    <div className='flex-row fl-ai-center'>
                        <div className='pcircle' />
                        <div className='mfontB' style={{marginLeft:'10px'}}>2023.12 Infinitas chain test</div>
                    </div>
                    <div className='flex-row fl-ai-center' style={{marginTop:'30px'}}>
                        <div className='pcircle' />
                        <div className='mfontB' style={{marginLeft:'10px'}}>2024.03 Infinitas chain RGB wallet online</div>
                    </div>
                    <div className='flex-row fl-ai-center' style={{marginTop:'30px'}}>
                        <div className='pcircle' />
                        <div className='mfontB' style={{marginLeft:'10px'}}>2024.06 Infinitas chain running</div>
                    </div>
                    <div className='pline' style={{left:'67px'}}/>
                </div>
            </div>

        </div>
    )
}
