import React from "react";
import './index.css'
import {CheckOutlined } from '@ant-design/icons'
export default function HomePCRoadmap(props){
    const {list}=props
    return (
        <div>
            <div className='flex-row' style={{width:'1200px',overflow:"auto"}}>
                {list.map((item,index)=>{
                return(
                    <div className='hpr-main flex-column' key={index} style={{width:index===1?'634px':''}}>
                        <img src={'https://static.paraluni.org/images/infiweb/roadmap_1.png'} width={48} height={48}/>
                        <div className='flex-1 flex-column' style={{paddingTop:'40px'}}>
                            {item.map((value,sort)=>(
                                <div key={sort} style={{marginTop:'30px'}} className='flex-row fl-ai-center'>
                                    <CheckOutlined style={{color:'#f44336'}}/>
                                    <div className='hpr-fontA'>{value.text}</div>
                                    <div className='hpr-fontB'>{value.anchor}</div>
                                </div>
                            ))}
                        </div>
                        <div className='flex-row-reserve' style={{height:'80px',fontSize:'17px',fontWeight:'bold'}}>Q{index+1}</div>
                    </div>
                )
                })}
            </div>
        </div>
    )
}
