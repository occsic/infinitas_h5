import React from "react";
import './index.css'
import logo from '../../static/Logo.png'
import {Tooltip,Popover} from "antd";

export default function PCHeader(){
    const content = (
        <div className='pch-content'>
            <div className='pchc-text'>ABOUT US</div>
            <div className='pchc-text'>WE STAND FOR</div>
            <div className='pchc-text'>FOCUS</div>
            <div className='pchc-text'>SOLUTIONS</div>
            <div className='pchc-text'>OVERALL ARCHITECTURE</div>
            <div className='pchc-text'>ROADMAP</div>
            <div style={{height:'10px'}}/>
        </div>
    );
    return (
        <div className='pc-header'>
            <div style={{flex:0.42}}>
                <img src={logo} width={180} height={35}/>
            </div>
            <div className='flex-row fl-ai-center fl-jc-between' style={{flex:0.58}}>
                <Popover overlayInnerStyle={{padding:'0'}} placement="bottomLeft"  content={content} trigger={'click'}>
                    <div className='pch-tag'>HOME</div>
                </Popover>

                <div className='pch-tag'>LEARN</div>
                <div className='pch-tag'>RESOURCES</div>
                <div className='pch-tag'>BUILD</div>
                <div className='pch-tag'>CONTACT</div>
            </div>
        </div>
    )
}
