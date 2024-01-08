import React from "react";
import './PC.css'
import PCHeader from "../../component/PCHeader";
import PCFooter from "../../component/PCFooter";

export default function ContactPc(){

    return (
        <div>
            <PCHeader />
            <div style={{height:'84px'}}/>
            <div className='flex-center bg-color-khaki' style={{width: '100vw',minWidth:'1200px'}}>
                <div className='common-width'>
                    <div className='font-color-42' style={{fontSize:'52px',marginTop:'100px'}}>CONTACT</div>
                    <div className='flex-row fl-ai-end' style={{marginTop:'60px'}}>
                        <img width={120} height={120} src={'https://static.paraluni.org/images/infiweb/contact_bg1.png'}/>
                        <div style={{marginLeft:'50px'}}>
                            <div style={{fontSize:'24px',fontWeight:'bold'}} className='font-color-red'>DEVELOPERS</div>
                            <div className='font-size-16 font-color-42' style={{marginTop:'8px'}}> Discuss features, issues, and ideas in our Github Discussions forum, or chat live with the team and other developers on Discord.</div>
                        </div>
                    </div>
                    <div className='flex-row fl-ai-end' style={{marginTop:'60px'}}>
                        <img width={120} height={120} src={'https://static.paraluni.org/images/infiweb/contact_bg2.png'}/>
                        <div style={{marginLeft:'50px'}}>
                            <div style={{fontSize:'24px',fontWeight:'bold'}} className='font-color-red'>USERS</div>
                            <div className='font-size-16 font-color-42' style={{marginTop:'8px'}}>Reach out on Telegram（https://t.me/Cindy_yee）</div>
                        </div>
                    </div>
                    <div className='flex-row fl-ai-end' style={{marginTop:'60px'}}>
                        <img width={120} height={120} src={'https://static.paraluni.org/images/infiweb/contact_bg3.png'}/>
                        <div style={{marginLeft:'50px'}}>
                            <div style={{fontSize:'24px',fontWeight:'bold'}} className='font-color-red'>MEDIA,BUSINESS ＆ OTHERS</div>
                            <div className='font-size-16 font-color-42' style={{marginTop:'8px'}}>BiHelix.contact@gmail.com</div>
                        </div>
                    </div>
                    <div style={{height:'100px'}}/>
                </div>
            </div>
            <PCFooter />
        </div>
    )

}
