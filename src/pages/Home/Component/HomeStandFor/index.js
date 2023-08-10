import React from "react";
import './index.css'

export default function HomeStandFor(props){
    const {title,describe,width,textWidth}=props
    return (
        <div className='bg-color-white stand-block' style={{width:`${width}px`}}>
            <div className='stand-fontB'>
                {title}
            </div>
            <div className='font-size-16' style={{width:`${textWidth}px`,marginTop:'32px'}}>
                {describe}
            </div>
            <div className='flex-1 flex-column fl-ai-end' style={{justifyContent:'flex-end'}}>
                <img width={77} height={77} src={''}/>
            </div>
        </div>
    )
}
