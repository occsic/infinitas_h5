import React from "react";
import './index.css'
import logo from '../../static/Logo.png'
import {Tooltip,Popover} from "antd";
import {Link} from "react-router-dom";

export default function PCHeader(props){
    const {}=props
    const content1 = (
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
    const content2 = (
        <div className='pch-content'>
            <Link to={'/rgb'}><div className='pchc-text'>RGB</div></Link>
            <div className='pchc-text'>LIGHTING NETWORK</div>
            <div className='pchc-text'>ZK-SNARK</div>
            <div style={{height:'10px'}}/>
        </div>
    );

    return (
        <div className='flex-center pc-header-container'>
            <div className='pc-header'>
                <div style={{flex:0.42}}>
                    <img src={logo} width={180} height={35}/>
                </div>
                <div className='flex-row fl-ai-center fl-jc-between' style={{flex:0.58}}>
                    <Popover overlayInnerStyle={{padding:'0'}} placement="bottomLeft" color={'rgba(0, 0, 0, 0.2)'}  content={content1}>
                        <div className='pch-tag'>HOME</div>
                    </Popover>

                    <Popover overlayInnerStyle={{padding:'0'}} placement="bottomLeft" color={'rgba(0, 0, 0, 0.2)'}  content={content2}>
                        <div className='pch-tag'>LEARN</div>
                    </Popover>


                    <div className='pch-tag'>RESOURCES</div>
                    <div className='pch-tag'>BUILD</div>
                    <div className='pch-tag'>CONTACT</div>
                </div>
            </div>
        </div>

    )
}
