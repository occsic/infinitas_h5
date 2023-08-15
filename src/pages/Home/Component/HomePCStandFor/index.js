import React from "react";
import './index.css'

export default function HomePCStandFor(props){
    const {title,describe,width,textWidth,img}=props
    return (
        <div className='bg-color-white stand-block' style={{width:`${width}px`}}>
            <div className='stand-fontB ' style={{marginTop:'24px',marginLeft:'24px'}}>
                {title}
            </div>
            <div className='font-size-16' style={{width:`${textWidth}px`,marginTop:'32px',marginLeft:'24px'}}>
                {describe}
            </div>
            <div className='flex-1 flex-column fl-ai-end' style={{justifyContent:'flex-end'}}>
                <img style={{marginRight:'14px',marginBottom:'14px'}} width={77} height={77} src={img}/>
            </div>
        </div>
    )
}
