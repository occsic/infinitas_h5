import React from "react";
import './index.css'

export default function RGBPCMainFeatures(props){
    const {sort,text,img,textWidth}=props
    return (
        <div className='flex-column'>
            <div className='font-color-42' style={{fontSize:'24px',fontWeight:600}}>{sort}</div>
            <div className='font-size-16 font-color-42' style={{width:`${textWidth}px`,marginTop:'10px'}}>{text}</div>
            <img src={img} width={204} height={405} style={{marginTop:'30px'}}/>
        </div>
    )
}
