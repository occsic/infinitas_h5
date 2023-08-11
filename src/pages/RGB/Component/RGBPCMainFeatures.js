import React from "react";
import './index.css'

export default function RGBPCMainFeatures(props){
    const {sort,text,img,textWidth,imgWidth,imgHeight}=props
    return (
        <div className='flex-column'>
            {sort&& <div className='font-color-42' style={{fontSize:'24px',fontWeight:600}}>{sort}</div>}
            <div className='font-size-16 font-color-42' style={{width:`${textWidth}px`,marginTop:'10px'}}>{text}</div>
            <img src={img} width={imgWidth?imgWidth:204} height={imgHeight?imgHeight:405} style={{marginTop:'30px'}}/>
        </div>
    )
}
