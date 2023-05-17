import React, {useState} from "react";
import './Mobile.css'
import { Carousel } from 'antd';
import bg1 from './image/pc_bg1.svg'
import bg2 from './image/pc_bg2.svg'
import bg11 from './image/pc_bg11.png'
import logo from './image/logo.png'
import more from  './image/learn_more.svg'
import floor from './image/floor.svg'
import infinitas from './image/infinitas.svg'
import icon1 from './image/pc_icon1.svg'
import icon2 from './image/pc_icon2.svg'
import icon3 from './image/pc_icon3.svg'
import icon4 from './image/pc_icon4.svg'
import {
    MenuOutlined,
    RightOutlined
} from '@ant-design/icons';
import group1 from "./image/group1.png";
import group2 from "./image/group2.png";
import group3 from "./image/group3.png";
import group4 from "./image/group4.png";
import group5 from "./image/group5.png";
import { Drawer,Menu } from 'antd';
export default function InfinitasIntroductionMobile(){
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        switch (e.key){
            case 'rgbprotocol':
                window.open('https://rgb.info/')
                break
            case 'work':
                window.open('https://docs.rgb.info/')
                break
            case 'resources':
                window.open('https://rgb.info/resources/')
                break
        }
        setCurrent(e.key);
    };
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const items=[
        {
            label: 'RGB',
            key: 'rgb',
            children:[
                {
                    label:'RGB Protocol',
                    key:'rgbprotocol'
                },
                {
                    label:'How it works',
                    key:'work'
                },
                {
                    label:'Resources',
                    key:'resources'
                },
            ]
        },
        {
            label: 'Ecosystem',
            key: 'ecosystem',
        },
        {
            label: 'Network',
            key: 'network',
        },
        {
            label: 'Developers',
            key: 'developers',
        },
        {
            label: 'Community',
            key: 'community',
        },
    ]
    return (
        <div className='flex-column' style={{backgroundColor:'#1d1f2b'}}>
            {/*第一部分*/}
            <div className='mheader'>
                <img src={logo} width={194} style={{marginLeft:'15px'}}/>
                <MenuOutlined onClick={showDrawer}  style={{color:'#ffffff',fontSize:'24px',marginRight:'15px',cursor:'pointer'}}/>
            </div>
            <Carousel autoplay={true} dots={false}>
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
                            <div className='mfontA' style={{fontSize:'48px'}}>Beyond</div>
                            <div className='mfontA' style={{fontSize:'24px'}}>Go a step further into the metaverse</div>
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
                    <div className='flex-column' style={{position:"relative",paddingLeft:'60px',marginTop:'40px'}}>
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
                <div className='flex-column' style={{position:"relative",marginTop:'60px',paddingLeft:'60px'}}>
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
                        <div className='mfontB' style={{marginLeft:'10px'}}>2024.06 Infinitas chain running<span style={{visibility:'hidden'}}>RGB R4GB RGB RGB RGB RGB</span></div>
                    </div>
                    <div className='pline' style={{left:'67px'}}/>
                </div>
            </div>

            {/*第三部分*/}
            <div className='mrgb flex-column fl-jc-center fl-ai-center'>
                <div className='mfontA'>Why is RGB</div>
                <div className='mfontA' style={{marginTop:'13px',fontSize:'14px'}}>a historical step in blockchain evolution?</div>
                <div className='flex-row fl-ai-center' style={{width:'100%',justifyContent:"space-around",marginTop:'63px'}}>
                    <div className='mrgb-bg mrgb-bgA'>
                       <div style={{marginTop:'29px',marginLeft:'25px',marginRight:'-50px'}}>
                           · Security: Bitcoin blockchain is used as its security commitment layer, and the security of BTC is the security of RGB
                       </div>
                    </div>
                        <img src={icon1} width={40} height={40} />

                </div>
            </div>

            <div className='flex-row fl-ai-center' style={{width:'100%',justifyContent:"space-around",marginTop:'63px'}}>
                <img src={icon2} width={40} height={40} />
                <div className='mrgb-bg mrgb-bgB' style={{marginRight:'20px'}}>
                    <div style={{marginTop:'29px',marginLeft:'25px',marginRight:'-50px'}}>
                        · Scalability with unlimited performance:
                         The blockchain-based capacity expansion story is over;
                         RGB can make more efficient use of blockchain because the vast majority of data is kept down the chain, thanks to the "client-side validation" mode and batch processing capabilities
                    </div>
                </div>
            </div>

            <div className='flex-row fl-ai-center' style={{width:'100%',justifyContent:"space-around",marginTop:'63px'}}>

                <div className='mrgb-bg mrgb-bgC'>
                    <div style={{marginTop:'29px',marginLeft:'25px',marginRight:'-50px'}}>
                        · Not only that, RGB is compatible with lightning networks, and RGB inherits the infinite performance scalability of lightning networks;
                        RGB supports and is compatible with any future scalability scheme for Bitcoin
                    </div>
                </div>
                <img src={icon3} width={40} height={40} />
            </div>

            <div className='flex-row fl-ai-center' style={{width:'100%',justifyContent:"space-around",marginTop:'63px'}}>
                <img src={icon4} width={40} height={40} />
                <div className='mrgb-bg mrgb-bgD' style={{marginRight:'20px'}}>
                    <div style={{marginTop:'29px',marginLeft:'25px',marginRight:'-50px'}}>
                        · Scalability with unlimited performance:
                        The blockchain-based capacity expansion story is over;
                        RGB can make more efficient use of blockchain because the vast majority of data is kept down the chain, thanks to the "client-side validation" mode and batch processing capabilities
                    </div>
                </div>
            </div>
            <div style={{height:'46px'}}/>

            <div className='msix flex-column fl-ai-center'>
                <div className='mfontA' style={{fontSize:'24px',marginTop:'58px',marginBottom:'50px'}}>Team & Individual contributors</div>
                {/*1111*/}
                <div className='steam flex-column'>
                    <div className='steam-top'>
                        <div className='flex-row fl-ai-center'>
                            <div className='mbutton'>
                                <div className='mbutton-circle'/>
                            </div>
                            <div className='mfontB' style={{marginLeft: '10px'}}>Master of Economics</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop: '30px'}}>
                            <div className='mbutton'>
                                <div className='mbutton-circle'/>
                            </div>
                            <div className='mfontB' style={{marginLeft: '10px'}}>Showhand invested in blockchain
                                project at the end of 2016
                            </div>
                        </div>
                        <div className='mfontA' style={{fontSize:'16px',marginTop:'20px'}}>Learn more <RightOutlined style={{fontSize:'12px'}} /></div>
                    </div>
                    <div className='steam-bottom flex-row fl-ai-center'>
                        <img src={bg11} width={32} height={32} style={{borderRadius: '50px', marginLeft: '21px'}}/>
                        <div className='mfontA' style={{fontSize: '16px', marginLeft: '10px'}}>Founder Kevin Bayer
                            (CEO)
                        </div>
                    </div>
                    <div className='steam-position'>
                        <div style={{height:'10px'}}/>
                        Master of Economics(Austrian school and Hayektheory and master of Theology (minoring in
                        neochristian Theologyfrom the University of Vienna, Austria and then worked atthe UNHCR in
                        Vienna.
                        2015-2016.Berkshire Hathaway served as the investment specialist of the
                        war lnvestment Department of North Wales Germany, quantifying and bonding the Eurasian
                        market structure.
                        Showhand invested in blockchain project at the end of 2016; In early July 2017 ico invested
                        in BNB, holding 1% of the circulation and excellent investment targets such as ETH BNB SNT
                        EOS FILadhere to the road of long-term value investment, make friends with time,haveunique
                        views on the strateqic development of the industryand have richresource back- ground in the
                        field of traditional investment.
                        <div style={{height:'10px'}}/>
                    </div>
                </div>
                {/*2222*/}
                <div className='steam steam-12 flex-column'>
                    <div className='steam-top'>
                        <div className='flex-row fl-ai-center'>
                            <div className='mbutton'>
                                <div className='mbutton-circle'/>
                            </div>
                            <div className='mfontB' style={{marginLeft: '10px'}}>1.The frst batch of blockchain developers</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop: '30px'}}>
                            <div className='mbutton'>
                                <div className='mbutton-circle'/>
                            </div>
                            <div className='mfontB' style={{marginLeft: '10px'}}>The first person to design the architecture of server free interac- tive system.
                            </div>
                        </div>
                        <div className='mfontA' style={{fontSize:'16px',marginTop:'20px'}}>Learn more <RightOutlined style={{fontSize:'12px'}} /></div>
                    </div>
                    <div className='steam-bottom flex-row fl-ai-center'>
                        <img src={bg11} width={32} height={32} style={{borderRadius: '50px', marginLeft: '21px'}}/>
                        <div className='mfontA' style={{fontSize: '16px', marginLeft: '10px'}}>Co-founder Dragon Smith (CTO)
                        </div>
                    </div>
                    <div className='steam-position'>
                        <div style={{height:'10px'}}/>
                        Dragon Smith is the frst batch of blockchain developers and the first person to design the architecture
                        of server free interac- tive system. It is a technology geek with rich innovation expe- rience. Wu Weilong
                        was the core developer of Silicon Valley Meixin integration company and provided algorithms for Samsung; Laterhe
                        devoted himself to blockchain & Dand developed more than 10 smart contracts in the felds of traceability,anti-counterfeiting and supply chain fnance. His practical experience involves manyunderlyingtechnologies such as blockchain virtual machine P2P storage and consen- sus algorithm. Inventor of SPOR+POS sustainable consensus mechanism.
                        <div style={{height:'10px'}}/>
                    </div>
                </div>
                {/*3333*/}
                <div className='steam steam-13 flex-column'>
                    <div className='steam-top'>
                        <div className='flex-row fl-ai-center'>
                            <div className='mbutton'>
                                <div className='mbutton-circle'/>
                            </div>
                            <div className='mfontB' style={{marginLeft: '10px'}}>Inventor of SPOR+POS sustainable consensus mechanism</div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop: '30px'}}>
                            <div className='mbutton'>
                                <div className='mbutton-circle'/>
                            </div>
                            <div className='mfontB' style={{marginLeft: '10px'}}>2018-2020 MBA from Taiwan University of science and technology</div>
                        </div>
                        <div className='mfontA' style={{fontSize:'16px',marginTop:'20px'}}>Learn more <RightOutlined style={{fontSize:'12px'}} /></div>
                    </div>
                    <div className='steam-bottom flex-row fl-ai-center'>
                        <img src={bg11} width={32} height={32} style={{borderRadius: '50px', marginLeft: '21px'}}/>
                        <div className='mfontA' style={{fontSize: '16px', marginLeft: '10px'}}>Co-founder YuAn Tseng (COO</div>
                    </div>
                    <div className='steam-position'>
                        <div style={{height:'10px'}}/>
                        2010-2014 studied diplomatic English in the English Department of National Changhua Normal University. 2018-2020 MBA from
                        Taiwan University of science and technology. From March 2020 to March 2021She studied at hochshur hel- brown University of
                        science and technologyand wrote a paper - Case Analysis of new business model ofvirtual currency. She used to be a German
                        iris digital strategist and the operation director of Taipei monad.She has many years of digital marketing experience.
                        <div style={{height:'10px'}}/>
                    </div>
                </div>
                {/*4444*/}
                <div className='steam steam-14 flex-column'>
                    <div className='steam-top'>
                        <div className='flex-row fl-ai-center'>
                            <div className='mbutton'>
                                <div className='mbutton-circle'/>
                            </div>
                            <div className='mfontB' style={{marginLeft: '10px'}}>Anna Alumbaiva has over 7 years of experience in the blockchain industry
                            </div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop: '30px'}}>
                            <div className='mbutton'>
                                <div className='mbutton-circle'/>
                            </div>
                            <div className='mfontB' style={{marginLeft: '10px'}}>he has mainly participated in the marketing management of Gamefi……
                            </div>
                        </div>
                        <div className='mfontA' style={{fontSize:'16px',marginTop:'20px'}}>Learn more <RightOutlined style={{fontSize:'12px'}} /></div>
                    </div>
                    <div className='steam-bottom flex-row fl-ai-center'>
                        <img src={bg11} width={32} height={32} style={{borderRadius: '50px', marginLeft: '21px'}}/>
                        <div className='mfontA' style={{fontSize: '16px', marginLeft: '10px'}}>Co-founder Anna Alumbaiva (CMO）</div>
                    </div>
                    <div className='steam-position'>
                        <div style={{height:'10px'}}/>
                        Anna Alumbaiva has over 7 years of experience in the blockchain industry, this dynamic and dedicated Web 3.0
                        explorer has become an expertise in marketing and branding. He has gained valuable experience working for various
                        industry-leading companies and Web3 projects. In the past few years, he has mainly participated in the marketing
                        management of Gamefi, Defi projects and crypto currency exchanges.
                        <div style={{height:'10px'}}/>
                    </div>
                </div>
            </div>

            <div className='mfontA' style={{fontSize:'18px',textAlign:'center',marginTop:'50px'}}>Managed by Infinitas Foundation</div>

            <div style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.72)',
                textAlign: 'center',
                marginTop: '35px'
                ,marginLeft:'20px',marginRight:'20px'
            }}>INFINITAS is a blockchain ecosystem that integrates lightning network and has infinite scalability on the
                Bitcoin public chain
            </div>
            <div className='plink' style={{marginTop:'0',marginLeft:'20px',marginRight:'20px'}}>
                <img src={group1} width={55} height={11} />
                <img src={group2} width={55} height={11}/>
                <img src={group3} width={55} height={11} onClick={()=>window.open('https://twitter.com/iftas_eco')}/>
                <img src={group4} width={55} height={11}/>
                <img src={group5} width={55} height={11} onClick={()=>window.open('https://www.youtube.com/@INFINITAS_eco/featured')}/>
            </div>
            <div className='pfontBottom' style={{marginTop:'0'}}>© 2023 Infinitas Foundation. All rights reserved.</div>

            <Drawer title="Infinitas" placement="top" onClose={onClose} open={open} className='mdrawer'>
                <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={items} />
            </Drawer>
        </div>
    )
}
