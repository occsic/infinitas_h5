import React from "react";
import './index.css'
import logo from '../../static/Logo.png'
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import {openNewWindow} from "../../static/Utils";
export default function PCFooter(props){
    const navigate=useNavigate()
    const list=[
        [{text:'About us',click:()=>navigate('/home?id=about')},{text:'We stand for',click:()=>navigate('/home?id=stand')},{text:'Focus',click:()=>navigate('/home?id=focus')},{text:"Solutions",click:()=>navigate('/home?id=solutions')},{text:"Overall Architecture",click:()=>navigate('/home?id=overall')},{text:"Roadmap",click:()=>navigate('/home?id=roadmap')}],
        [{text:'RGB',link:'/rgb'},{text:"Lighting Network",link:'/network'},{text:"zk-SNARK",link:'/zksnark'}],
        [{text:"Pitch Deck",url:'https://docsend.com/view/tpa2xg6c773gqdkn'},{text:"Doc",url:"https://infinitas-official.gitbook.io/infinitas-whitepaper/"},{text:'Tech Whitepaper'},{text:"One paper"}],
        ["Article","Online IDE"],
        ["Developers","Users","Media, Business & Others"],
    ]
    return (
        <div className='pc-footer fl-jc-center flex-row'>
            <div style={{width:'1200px'}} className='flex-column'>
                <div className='flex-row fl-jc-between' style={{marginTop:'63px'}}>
                    <div className='flex-column'>
                        <div className='pcf-title'>
                            HOME
                        </div>
                        {list[0].map((item,index)=>(
                            <div className='pcf-des' key={index} onClick={item.click}>{item.text}</div>
                        ))}
                    </div>
                    <div className='flex-column'>
                        <div className='pcf-title'>
                            LEARN
                        </div>
                        {list[1].map((item,index)=>(
                               <div className='pcf-des' onClick={()=>navigate(item.link)} key={index}>{item.text}</div>
                        ))}
                    </div>
                    <div className='flex-column'>
                        <div className='pcf-title'>
                            resources
                        </div>
                        {list[2].map((item,index)=>(
                            <div className='pcf-des' key={index} onClick={()=>{if(item.url){
                                openNewWindow(item.url)
                            }}}>{item.text}</div>
                        ))}
                    </div>
                    <div className='flex-column'>
                        <div className='pcf-title'>
                            BUILD
                        </div>
                        {list[3].map((item,index)=>(
                            <div className='pcf-des' key={index}>{item}</div>
                        ))}
                    </div>
                    <div className='flex-column'>
                        <div className='pcf-title'>
                            CONTACT
                        </div>
                        {/*{list[4].map((item,index)=>(*/}
                        {/*    <div className='pcf-des' key={index}>{item}</div>*/}
                        {/*))}*/}
                    </div>
                </div>
                <div className='pcf-line' />
                <div className='flex-row fl-ai-center fl-jc-between' style={{marginTop:'12px'}}>
                    <img src={logo} width={120} height={24}/>
                    <div style={{fontSize:'12px',color:'#ffffff'}}>Copyright © 2024, Infinitas - Network. All rights reserved.</div>
                    <div className='flex-row fl-ai-center'>
                        <img style={{marginRight:'20px',cursor:'pointer'}} src={"https://static.paraluni.org/images/infiweb/telegram.png"} width={24} height={24}/>
                        <img style={{marginRight:'20px',cursor:'pointer'}} src={"https://static.paraluni.org/images/infiweb/twitter.png"} onClick={()=>openNewWindow('https://twitter.com/iftas_eco')} width={24} height={24}/>
                        <img style={{marginRight:'20px',cursor:'pointer'}} src={"https://static.paraluni.org/images/infiweb/ins.png"} width={24} height={24}/>
                        <img style={{marginRight:'20px',cursor:'pointer'}} src={"https://static.paraluni.org/images/infiweb/discord.png"} onClick={()=>openNewWindow('https://discord.gg/wukSjfSd6a')} width={24} height={24}/>
                        <img style={{marginRight:'20px',cursor:'pointer'}} src={"https://static.paraluni.org/images/infiweb/youtube.png"} width={24} height={24}/>
                        {/*<img src={"https://static.paraluni.org/images/infiweb/twitch.png"} width={24} height={24}/>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
