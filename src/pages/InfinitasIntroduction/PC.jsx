import React from "react";
import './PC.css'
import { Carousel } from 'antd';
import bg1 from './image/pc_bg1.svg'
import bg2 from './image/pc_bg2.svg'
import logo from './image/logo.svg'
import more from  './image/learn_more.svg'
import floor from './image/floor.svg'
import infinitas from './image/infinitas.svg'
import icon1 from './image/pc_icon1.svg'
import icon2 from './image/pc_icon2.svg'
import icon3 from './image/pc_icon3.svg'
import icon4 from './image/pc_icon4.svg'
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
                <div className='flex-row' style={{marginTop:'100px'}}>
                    <div className='flex-column' style={{position:"relative"}}>
                        <div className='flex-row fl-ai-center'>
                            <div className='pcircle' />
                            <div className='pfontB' style={{fontSize:'24px',marginLeft:'15px'}}>2022.12 Infinitas Established</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop:'80px'}}>
                            <div className='pcircle' />
                            <div className='pfontB' style={{fontSize:'24px',marginLeft:'15px'}}>2023.03 Join the RGB protocol group</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop:'80px'}}>
                            <div className='pcircle' />
                            <div className='pfontB' style={{fontSize:'24px',marginLeft:'15px'}}>2023.05 Get seed round investment</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop:'80px'}}>
                            <div className='pcircle' />
                            <div className='pfontB' style={{fontSize:'24px',marginLeft:'15px'}}>2023.06 Start the research and development of Infinitas chain</div>
                        </div>
                        <div className='pline' />
                    </div>
                    <img src={infinitas} />
                </div>
                <div className='flex-row' style={{marginTop:'100px'}}>
                    <img src={infinitas} style={{marginRight:'100px'}}/>
                    <div className='flex-column' style={{position:"relative",height:'fit-content'}}>
                        <div className='flex-row fl-ai-center'>
                            <div className='pcircle' />
                            <div className='pfontB' style={{fontSize:'24px',marginLeft:'15px'}}>2023.12 Infinitas chain test</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop:'80px'}}>
                            <div className='pcircle' />
                            <div className='pfontB' style={{fontSize:'24px',marginLeft:'15px'}}>2024.03 Infinitas chain RGB wallet online</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop:'80px'}}>
                            <div className='pcircle' />
                            <div className='pfontB' style={{fontSize:'24px',marginLeft:'15px'}}>2024.06 Infinitas chain running</div>
                        </div>
                        <div className='pline' />
                    </div>
                </div>
            </div>
            {/*第四部分*/}
            <div className='pfour flex-column fl-ai-center' style={{justifyContent:'space-around'}}>
                <div className='pfontD' style={{fontSize:'130px',marginTop:'150px'}}>Why is RGB</div>
                <div className='pfontD' style={{fontSize:'50px'}}>a historical step in blockchain evolution?</div>
                <div className='flex-row fl-ai-center' style={{width:'100%',justifyContent:'space-around'}}>
                    <div  className='ptextA'>
                        <div style={{marginLeft:'106px',marginTop:'104px',color:'#fff',fontSize:'18px',lineHeight:'1.65'}}>
                            · Security: Bitcoin blockchain is used as its security commitment layer, and the security of BTC is the security of RGB
                        </div>
                    </div>
                    <img src={icon1}/>
                </div>
            </div>
            {/*//第五部分*/}
            <div className='pfive'>
                <div className='flex-row fl-ai-center' style={{width:'100%',justifyContent:'space-around'}}>
                    <img src={icon2}/>
                    <div  className='ptextB'>
                        <div style={{marginLeft:'86px',marginTop:'84px',color:'#fff',fontSize:'18px',lineHeight:'1.65'}}>
                            · Scalability with unlimited performance:
                             The blockchain-based capacity expansion story is over;
                            RGB can make more efficient use of blockchain because the vast majority of data is kept down the chain, thanks to the "client-side validation" mode and batch processing capabilities
                        </div>
                    </div>
                </div>
                <div className='flex-row fl-ai-center' style={{width:'100%',justifyContent:'space-around'}}>
                    <div  className='ptextC'>
                        <div style={{marginLeft:'86px',marginTop:'84px',color:'#fff',fontSize:'18px',lineHeight:'1.65'}}>
                            · Not only that, RGB is compatible with lightning networks, and RGB inherits the infinite performance scalability of lightning networks;
                            RGB supports and is compatible with any future scalability scheme for Bitcoin
                        </div>
                    </div>
                    <img src={icon3}/>
                </div>
                <div className='flex-row fl-ai-center' style={{width:'100%',justifyContent:'space-around'}}>
                    <img src={icon4}/>
                    <div  className='ptextD'>
                        <div style={{marginLeft:'86px',marginTop:'84px',color:'#fff',fontSize:'18px',lineHeight:'1.65'}}>
                            · Better privacy:
                             Blockchain observers cannot see transaction data other than their own, and on Ethereum, as long as they know the user's address, they can trace all the transaction history of that user;
                             Users are always responsible for choosing when and what data or status can be disclosed about their privacy.
                             Standing on the shoulders of giants: Shaping ecology based on the global Bitcoin consensus
                        </div>
                    </div>
                </div>
                <div style={{height:'71px'}}/>
            </div>
        </div>
    )
}
