import React, {useEffect, useState} from "react";

import NetworkPC from "./PC";
import NetworkMobile from "./Mobile";
import BigNumber from "bignumber.js";

export default function Network(){
    const [isMobileView,setIsMobileView]=useState(false);//是否是手机视图

    const resizeUpdate = (e) => {
        // 通过事件对象获取浏览器窗口的高度
        let width = e.target.innerWidth;
        if(BigNumber(width).isLessThan(905)){
            setIsMobileView(true)
        }else {
            setIsMobileView(false)
        }

    };


    useEffect(()=>{
        const width = window.innerWidth;
        setIsMobileView(BigNumber(width).isLessThan(905))
        window.addEventListener('resize', resizeUpdate);
        return () => {
            window.removeEventListener('resize', resizeUpdate);
        }
    },[])
    return (
        isMobileView?<NetworkMobile />:<NetworkPC />
    )
}
