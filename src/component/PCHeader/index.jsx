import React from "react";
import './index.css'
import logo from '../../static/Logo.png'
import {Tooltip, Popover} from "antd";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom'

export default function PCHeader() {
    const navigate=useNavigate()
    const content1 = (
        <div className='pch-content'>
                <div className='pchc-text' onClick={()=>navigate('/home?id=about')}>ABOUT US</div>
                <div className='pchc-text' onClick={()=>navigate('/home?id=stand')}>WE STAND FOR</div>
                <div className='pchc-text' onClick={()=>navigate('/home?id=focus')}>FOCUS</div>
                <div className='pchc-text' onClick={()=>navigate('/home?id=solutions')}>SOLUTIONS</div>
                <div className='pchc-text' onClick={()=>navigate('/home?id=overall')}>OVERALL ARCHITECTURE</div>
                <div className='pchc-text' onClick={()=>navigate('/home?id=roadmap')}>ROADMAP</div>
            <div style={{height: '10px'}}/>
        </div>
    );
    const content2 = (
        <div className='pch-content'>
            <Link to={'/rgb'}>
                <div className='pchc-text'>RGB</div>
            </Link>
            <Link to={'/network'}>
                <div className='pchc-text'>LIGHTING NETWORK</div>
            </Link>
            <Link to={'/zksnark'}>
                <div className='pchc-text'>ZK-SNARK</div>
            </Link>

            <div style={{height: '10px'}}/>
        </div>
    );

    const content3 = (
        <div className='pch-content'>
            <div className='pchc-text' onClick={()=>window.location.href='https://docsend.com/view/tpa2xg6c773gqdkn'}>PITCH DECK</div>
            <div className='pchc-text' onClick={()=>window.location.href='https://infinitas-official.gitbook.io/infinitas-whitepaper/'}>DOC</div>
            <div className='pchc-text'>Tech WHITE PAPER </div>
            <div className='pchc-text'>ONE PAPER</div>
            <div style={{height: '10px'}}/>
        </div>
    );

    return (
        <div className='flex-center pc-header-container'>
            <div className='pc-header'>
                <div style={{flex: 0.42}}>
                    <Link to={'/'}>
                    <img src={logo} width={180} height={35}/>
                    </Link>
                </div>
                <div className='flex-row fl-ai-center fl-jc-between' style={{flex: 0.58}}>
                    <div className='pch-tag' style={{visibility:'hidden'}}>BUILD</div>
                    <div className='pch-tag' style={{visibility:'hidden'}}>CONTACT</div>
                    <Popover overlayInnerStyle={{padding: '0'}} placement="bottomLeft" color={'rgba(0, 0, 0, 0.2)'}
                             content={content1}>
                        <div className='pch-tag'>HOME</div>
                    </Popover>

                    <Popover overlayInnerStyle={{padding: '0'}} placement="bottomLeft" color={'rgba(0, 0, 0, 0.2)'}
                             content={content2}>
                        <div className='pch-tag'>LEARN</div>
                    </Popover>
                    <Popover overlayInnerStyle={{padding: '0'}} placement="bottomLeft" color={'rgba(0, 0, 0, 0.2)'}
                             content={content3}>
                        <div className='pch-tag'>RESOURCES</div>
                    </Popover>



                </div>
            </div>
        </div>

    )
}
