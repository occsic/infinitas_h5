import React from "react";
import './index.css'

export default function HomePCFocus(props){
    const {width,textWidth,title,text}=props
    return (
        <div style={{width:`${width}px`}} className='hpf flex-column flex-center'>
                <div className='hpf-fontA'> {title}</div>
            <div className='hpf-fontB' style={{width:`${textWidth}px`}}>{text}</div>
        </div>
    )
}
