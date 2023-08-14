import React from "react";


export default function HomeOverallComponent(props){
    const {width,height,text,color='#424242',textWidth,fontSize=16,fontWeight=500,bgColor='transparent',left}=props
    return (
        <div style={{width:`${width}px`,height:`${height}px`,color:color,fontSize:fontSize,fontWeight:fontWeight,backgroundColor:bgColor,border:'1px solid #424242'}} className='flex-center' >
            <div style={{width:textWidth,textAlign:'center'}}>{text}</div>
        </div>
    )
}
