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
                    <div className='hpr-main flex-column' key={index}>
                        <img src={'https://static.paraluni.org/images/infiweb/roadmap_1.png'} width={48} height={48}/>
                        <div className='flex-1 flex-column' style={{paddingTop:'40px'}}>
                            {item.map((item,index)=>(
                                <div key={index} style={{marginTop:'30px'}}>
                                    <CheckOutlined style={{color:'#f44336'}}/>
                                </div>
                            ))}
                        </div>
                        <div className='flex-row-reserve' style={{height:'80px',fontSize:'17px',fontWeight:'bold'}}>Q1</div>
                    </div>
                )
                })}
            </div>
        </div>
    )
}
