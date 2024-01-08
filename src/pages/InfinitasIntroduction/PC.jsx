import React from "react";
import './PC.css'
import {Carousel} from 'antd';
import bg1 from './image/pc_bg1.svg'
import bg2 from './image/pc_bg2.svg'
import bg11 from './image/pc_bg11.png'
import bg12 from './image/pc_bg12.png'
import bg13 from './image/pc_bg13.png'
import bg14 from './image/pc_bg14.png'
import logo from './image/logo.svg'
import more from './image/learn_more.svg'
import floor from './image/floor.svg'
import infinitas from './image/infinitas.svg'
import icon1 from './image/pc_icon1.svg'
import icon2 from './image/pc_icon2.svg'
import icon3 from './image/pc_icon3.svg'
import icon4 from './image/pc_icon4.svg'
import {Popover} from "antd";
import group1 from './image/group1.png'
import group2 from './image/group2.png'
import group3 from './image/group3.png'
import group4 from './image/group4.png'
import group5 from './image/group5.png'
import {
    RightOutlined
} from '@ant-design/icons';
export default function InfinitasIntroductionPC() {
    return (
        <div className='flex-column' style={{backgroundColor: '#1d1f2b'}}>
            {/*第一部分*/}
            <div className='pheader'>
                <img src={logo} width={194}/>
                <div className='flex-row fl-ai-center'>
                    <Popover placement="bottom" color={'#242634'} content={<div>
                        <div className='ppop-font' onClick={() => window.open('https://rgb.info/')}>RGB Protocol</div>
                        <div className='ppop-font' onClick={() => window.open('https://docs.rgb.info/')}>How it works
                        </div>
                        <div className='ppop-font'
                             onClick={() => window.open('https://rgb.info/resources/')}>Resources
                        </div>
                    </div>}>
                        <div className='pfontE'>RGB</div>
                    </Popover>
                    <div className='pfontE'>Ecosystem</div>
                    <div className='pfontE'>Network</div>
                    <div className='pfontE'>Developers</div>
                    <div className='pfontE'>Community</div>
                    <div className='pheader-contact flex-center'>Contact Us</div>
                </div>
            </div>
            <Carousel autoplay={true} dots={false}>
                <div>
                    <div style={{position: 'relative'}}>
                        <img src={bg1} width={'100%'} height={900} style={{objectFit: 'cover'}}/>
                        <div className='top-body flex-column fl-ai-center fl-jc-center'>
                            <div className='pfontA'>On top of Bitcoin, integrated lightning network, blockchain ecology
                                with infinite scalability
                            </div>
                            <div className='pfontB' style={{marginTop: '30px'}}>On the bitcoin public chain, integrated
                                lightning network, with infinite
                            </div>
                            <div className='pfontB'>scalability of the blockchain ecosystem</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{position: 'relative'}}>
                        <img src={bg2} width={'100%'} height={900} style={{objectFit: 'cover'}}/>
                        <div className='top-body flex-column fl-jc-center'>
                            <div className='pfontC'>Beyond</div>
                            <div className='pfontD'>Go a step further into the metaverse</div>
                        </div>
                    </div>
                </div>
            </Carousel>

            {/*第二部分*/}
            <div className='ptwo flex-column fl-ai-center'>
                <div className='flex-row fl-ai-center fl-jc-between' style={{width: '80%'}}>
                    <div className='flex-column' style={{flex: 0.5}}>
                        <div className='pfontC' style={{fontSize: '64px'}}>How to understand</div>
                        <div className='pfontC' style={{fontSize: '142px'}}>RGB</div>
                        <div className='pfontB' style={{maxWidth: '555px'}}>On top of Bitcoin, integrated lightning
                            network, with unlimited scalability of the smart contract protocol
                        </div>
                    </div>
                    <div style={{flex: 0.5}} className='flex-row fl-jc-center'>
                        <img src={more}/>
                    </div>
                </div>
                <div className='flex-row fl-ai-center fl-jc-between' style={{width: '80%'}}>
                    <div style={{flex: 0.5}}>
                        <img src={floor}/>
                    </div>

                    <div className='flex-column' style={{flex: 0.5}}>
                        <div className='flex-row fl-ai-center'>
                            <div className='pcircle'/>
                            <div className='pfontC' style={{fontSize: '24px', marginLeft: '10px'}}>RGB protocol network
                                (Ecological layer)
                            </div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop: '100px'}}>
                            <div className='pcircle'/>
                            <div className='pfontC ' style={{fontSize: '24px', marginLeft: '10px'}}>Lightning Network
                                (Payment Channel)
                            </div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop: '100px'}}>
                            <div className='pcircle'/>
                            <div className='pfontC' style={{fontSize: '24px', margi1nLeft: '10px'}}>BTC blockchain
                                (Security Commitment Layer)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*第三部分*/}
            <div className='pthree flex-column fl-ai-center'>
                <div className='pfontD' style={{marginTop: '20px'}}>What’s new at <span className='pfontF'
                                                                                        style={{fontSize: '120px'}}>BiHelix</span>
                </div>
                <div className='flex-row' style={{marginTop: '100px'}}>
                    <div className='flex-column' style={{position: "relative"}}>
                        <div className='flex-row fl-ai-center'>
                            <div className='pcircle'/>
                            <div className='pfontB' style={{fontSize: '24px', marginLeft: '15px'}}>2022.12 BiHelix
                                Established
                            </div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop: '80px'}}>
                            <div className='pcircle'/>
                            <div className='pfontB' style={{fontSize: '24px', marginLeft: '15px'}}>2023.03 Join the RGB
                                protocol group
                            </div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop: '80px'}}>
                            <div className='pcircle'/>
                            <div className='pfontB' style={{fontSize: '24px', marginLeft: '15px'}}>2023.05 Get seed
                                round investment
                            </div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop: '80px'}}>
                            <div className='pcircle'/>
                            <div className='pfontB' style={{fontSize: '24px', marginLeft: '15px'}}>2023.06 Start the
                                research and development of BiHelix chain
                            </div>
                        </div>
                        <div className='pline'/>
                    </div>
                    <img src={infinitas}/>
                </div>
                <div className='flex-row' style={{marginTop: '100px'}}>
                    <img src={infinitas} style={{marginRight: '100px'}}/>
                    <div className='flex-column' style={{position: "relative", height: 'fit-content'}}>
                        <div className='flex-row fl-ai-center'>
                            <div className='pcircle'/>
                            <div className='pfontB' style={{fontSize: '24px', marginLeft: '15px'}}>2023.12 BiHelix
                                chain test
                            </div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop: '80px'}}>
                            <div className='pcircle'/>
                            <div className='pfontB' style={{fontSize: '24px', marginLeft: '15px'}}>2024.03 BiHelix
                                chain RGB wallet online
                            </div>
                        </div>
                        <div className='flex-row fl-ai-center' style={{marginTop: '80px'}}>
                            <div className='pcircle'/>
                            <div className='pfontB' style={{fontSize: '24px', marginLeft: '15px'}}>2024.06 BiHelix
                                chain running
                            </div>
                        </div>
                        <div className='pline'/>
                    </div>
                </div>
            </div>
            {/*第四部分*/}
            <div className='pfour flex-column fl-ai-center' style={{justifyContent: 'space-around'}}>
                <div className='pfontD' style={{fontSize: '130px', marginTop: '150px'}}>Why is RGB</div>
                <div className='pfontD' style={{fontSize: '50px', textAlign: 'center'}}>a historical step in blockchain
                    evolution?
                </div>
                <div className='flex-center' style={{width: '100%'}}>
                    <div className='ptextA'>
                        <div style={{
                            marginLeft: '106px',
                            marginTop: '104px',
                            color: '#fff',
                            fontSize: '18px',
                            lineHeight: '1.65'
                        }}>
                            · Security: Bitcoin blockchain is used as its security commitment layer, and the security of
                            BTC is the security of RGB
                        </div>
                    </div>
                    <div style={{flex: 0.2}}/>
                    <img src={icon1}/>
                </div>
            </div>
            {/*//第五部分*/}
            <div className='pfive'>
                <div className='flex-center' style={{width: '100%'}}>
                    <img src={icon2}/>
                    <div style={{flex: 0.3}}/>
                    <div className='ptextB'>
                        <div style={{
                            marginLeft: '86px',
                            marginTop: '84px',
                            color: '#fff',
                            fontSize: '18px',
                            lineHeight: '1.65'
                        }}>
                            · Scalability with unlimited performance:
                            The blockchain-based capacity expansion story is over;
                            RGB can make more efficient use of blockchain because the vast majority of data is kept down
                            the chain, thanks to the "client-side validation" mode and batch processing capabilities
                        </div>
                    </div>
                </div>
                <div className='flex-center' style={{width: '100%'}}>
                    <div className='ptextC'>
                        <div style={{
                            marginLeft: '86px',
                            marginTop: '84px',
                            color: '#fff',
                            fontSize: '18px',
                            lineHeight: '1.65'
                        }}>
                            · Not only that, RGB is compatible with lightning networks, and RGB inherits the infinite
                            performance scalability of lightning networks;
                            RGB supports and is compatible with any future scalability scheme for Bitcoin
                        </div>
                    </div>
                    <div style={{flex: 0.3}}/>
                    <img src={icon3}/>
                </div>
                <div className='flex-center' style={{width: '100%'}}>
                    <img src={icon4}/>
                    <div style={{flex: 0.3}}/>
                    <div className='ptextD'>
                        <div style={{
                            marginLeft: '86px',
                            marginTop: '84px',
                            color: '#fff',
                            fontSize: '18px',
                            lineHeight: '1.65'
                        }}>
                            · Better privacy:
                            Blockchain observers cannot see transaction data other than their own, and on Ethereum, as
                            long as they know the user's address, they can trace all the transaction history of that
                            user;
                            Users are always responsible for choosing when and what data or status can be disclosed
                            about their privacy.
                            Standing on the shoulders of giants: Shaping ecology based on the global Bitcoin consensus
                        </div>
                    </div>
                </div>
                <div style={{height: '71px'}}/>
            </div>
            {/*第六部分*/}
            <div className='psix flex-column fl-ai-center'>
                <div className='pfontD' style={{fontSize: '54px', marginTop: '223px'}}>Team & Individual contributors
                </div>
                <div className='flex-center' style={{width: '100%', marginTop: '125px'}}>
                    {/*Founder Kevin Bayer (CEO)*/}
                    <div className='pteam flex-column'>
                        <div className='pteam-top'>
                            <div className='flex-row fl-ai-center'>
                                <div className='pbutton'>
                                    <div className='pbutton-circle'/>
                                </div>
                                <div className='pfontB' style={{marginLeft: '10px'}}>Master of Economics</div>
                            </div>
                            <div className='flex-row fl-ai-center' style={{marginTop: '30px'}}>
                                <div className='pbutton'>
                                    <div className='pbutton-circle'/>
                                </div>
                                <div className='pfontB' style={{marginLeft: '10px'}}>Showhand invested in blockchain
                                    project at the end of 2016
                                </div>
                            </div>
                        </div>
                        <div className='pteam-bottom flex-row fl-ai-center'>
                            <img src={bg11} width={60} height={60} style={{borderRadius: '50px', marginLeft: '21px'}}/>
                            <div className='pfontC' style={{fontSize: '24px', marginLeft: '20px'}}>Founder Kevin Bayer
                                (CEO)
                            </div>
                        </div>
                        <div className='pteam-position'>
                            <div style={{height:'20px'}}/>
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
                            <div style={{height:'20px'}}/>
                        </div>
                    </div>
                    <div style={{flex: '0.05'}}/>
                    {/*Co-founder Dragon Smith (CTO)*/}
                    <div className='pteam flex-column pteam-12'>
                        <div className='pteam-top'>
                            <div className='flex-row fl-ai-center'>
                                <div className='pbutton'>
                                    <div className='pbutton-circle'/>
                                </div>
                                <div className='pfontB' style={{marginLeft: '10px'}}>The frst batch of blockchain
                                    developers
                                </div>
                            </div>
                            <div className='flex-row fl-ai-center' style={{marginTop: '30px'}}>
                                <div className='pbutton'>
                                    <div className='pbutton-circle'/>
                                </div>
                                <div className='pfontB' style={{marginLeft: '10px'}}>The first person to design the
                                    architecture of server free interac- tive system.
                                </div>
                            </div>
                        </div>
                        <div className='pteam-bottom flex-row fl-ai-center'>
                            <img src={bg12} width={60} height={60} style={{borderRadius: '50px', marginLeft: '21px'}}/>
                            <div className='pfontC' style={{fontSize: '24px', marginLeft: '20px'}}>Co-founder Dragon
                                Smith (CTO)
                            </div>
                        </div>
                        <div className='pteam-position'>
                            <div style={{height:'20px'}}/>
                            Dragon Smith is the frst batch of blockchain developers and the first person to design the
                            architecture of server free interac- tive system. It is a technology geek with
                            rich innovation expe- rience. Wu Weilong was the core developer of Silicon Valley Meixin
                            integration company and provided algorithms for Samsung; Laterhe devoted himself to
                            blockchain & Dand developed more than 10 smart contracts in the felds of
                            traceability,anti-counterfeiting and supply chain fnance. His practical experience involves
                            manyunderlyingtechnologies
                            such as blockchain virtual machine P2P storage and consen- sus algorithm. Inventor of
                            SPOR+POS sustainable consensus mechanism.
                            <div style={{height:'20px'}}/>
                        </div>
                    </div>
                </div>
                <div className='flex-center' style={{width: '100%', marginTop: '74px'}}>
                    {/*Co-founder YuAn Tseng (COO）*/}
                    <div className='pteam flex-column pteam-13'>
                        <div className='pteam-top'>
                            <div className='flex-row fl-ai-center'>
                                <div className='pbutton'>
                                    <div className='pbutton-circle'/>
                                </div>
                                <div className='pfontB' style={{marginLeft: '10px'}}>Inventor of SPOR+POS sustainable
                                    consensus mechanism
                                </div>
                            </div>
                            <div className='flex-row fl-ai-center' style={{marginTop: '30px'}}>
                                <div className='pbutton'>
                                    <div className='pbutton-circle'/>
                                </div>
                                <div className='pfontB' style={{marginLeft: '10px'}}>2018-2020 MBA from Taiwan
                                    University of science and technology
                                </div>
                            </div>
                        </div>
                        <div className='pteam-bottom flex-row fl-ai-center'>
                            <img src={bg13} width={60} height={60} style={{borderRadius: '50px', marginLeft: '21px'}}/>
                            <div className='pfontC' style={{fontSize: '24px', marginLeft: '20px'}}>Co-founder YuAn Tseng
                                (COO）
                            </div>
                        </div>
                        <div className='pteam-position'>
                            <div style={{height:'20px'}}/>
                            2010-2014 studied diplomatic English in the English Department of National Changhua Normal
                            University. 2018-2020 MBA from Taiwan
                            University of science and technology. From March 2020 to March 2021She studied at hochshur
                            hel- brown University of science and
                            technologyand wrote a paper - Case Analysis of new business model ofvirtual currency. She
                            used to be a German iris digital strategist
                            and the operation director of Taipei monad.She has many years of digital marketing
                            experience.
                            <div style={{height:'20px'}}/>
                        </div>
                    </div>
                    <div style={{flex: '0.05'}}/>
                    {/*Co-founder Anna Alumbaiva (CMO）*/}
                    <div className='pteam flex-column pteam-14'>
                        <div className='pteam-top'>
                            <div className='flex-row fl-ai-center'>
                                <div className='pbutton'>
                                    <div className='pbutton-circle'/>
                                </div>
                                <div className='pfontB' style={{marginLeft: '10px'}}>Anna Alumbaiva has over 7 years of
                                    experience in the blockchain industry
                                </div>
                            </div>
                            <div className='flex-row fl-ai-center' style={{marginTop: '30px'}}>
                                <div className='pbutton'>
                                    <div className='pbutton-circle'/>
                                </div>
                                <div className='pfontB' style={{marginLeft: '10px'}}>he has mainly participated in the
                                    marketing management of Gamefi……
                                </div>
                            </div>
                        </div>
                        <div className='pteam-bottom flex-row fl-ai-center'>
                            <img src={bg14} width={60} height={60} style={{borderRadius: '50px', marginLeft: '21px'}}/>
                            <div className='pfontC' style={{fontSize: '24px', marginLeft: '20px'}}>Co-founder Anna
                                Alumbaiva (CMO)
                            </div>
                        </div>
                        <div className='pteam-position'>
                            <div style={{height:'20px'}}/>
                            Anna Alumbaiva has over 7 years of experience in the blockchain industry, this dynamic and
                            dedicated Web 3.0 explorer has become
                            an expertise in marketing and branding. He has gained valuable experience working for
                            various industry-leading companies and Web3
                            projects. In the past few years, he has mainly participated in the marketing management of
                            Gamefi, Defi projects and crypto currency exchanges.
                            <div style={{height:'20px'}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pfontC' style={{fontSize: '44px', textAlign: 'center', marginTop: '177px'}}>Managed by
                BiHelix Foundation
            </div>
            <div style={{
                fontSize: '24px',
                color: 'rgba(255,255,255,0.72)',
                textAlign: 'center',
                marginTop: '35px'
            }}>BIHELIX is a blockchain ecosystem that integrates lightning network and has infinite scalability on the
                Bitcoin public chain
            </div>
            <div className='plink'>
                <img src={group1} />
                <img src={group2}/>
                <img src={group3} onClick={()=>window.open('https://twitter.com/iftas_eco')}/>
                <img src={group4}/>
                <img src={group5} onClick={()=>window.open('https://www.youtube.com/@INFINITAS_eco/featured')}/>
            </div>
            <div className='pfontBottom'>© 2023 BiHelix Foundation. All rights reserved.</div>
        </div>
    )
}
