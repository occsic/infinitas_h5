import React from "react";
import './index.css'
import logo from '../../static/Logo.png'
export default function PCHeader(){

    return (
        <div className='pc-header'>
            <img src={logo} width={180} height={35}/>
            <div className='flex-row fl-ai-center'>

            </div>
        </div>
    )
}
