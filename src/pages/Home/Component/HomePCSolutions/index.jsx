import React from "react";
import './index.css'

export default function HomePCSolutions(props){
    const {title,text,img}=props
    return (
        <div className='flex-row fl-jc-between' style={{marginLeft:'80px',marginTop:'83px'}}>
            <div className='flex-column'>
                <div className='hps-top'>
                    <div className='hps-fontA'>{title}</div>
                    <div className='hps-line' />
                </div>
                <div className='font-color-42 font-size-16' style={{width:'313px',marginTop:'24px'}}>
                    {text}
                </div>
            </div>
            <img width={587} height={315} src={''}/>
        </div>


    )
}
