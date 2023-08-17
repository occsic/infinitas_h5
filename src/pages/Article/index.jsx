import React, {useEffect, useState} from "react";

import BigNumber from "bignumber.js";
import {useSearchParams} from "react-router-dom";
import ArticlePc from "./PC";
import ArticleMobile from "./Mobile";

export default function Article(){
    const [isMobileView,setIsMobileView]=useState(false);//是否是手机视图
    const [searchParams] = useSearchParams()
    const scrollId=searchParams.get('id')
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
        if(!scrollId){
            window.scrollTo(0,0)
        }
        const width = window.innerWidth;
        setIsMobileView(BigNumber(width).isLessThan(905))
        window.addEventListener('resize', resizeUpdate);
        return () => {
            window.removeEventListener('resize', resizeUpdate);
        }
    },[])
    return (
        isMobileView?<ArticlePc />:<ArticleMobile />
    )
}
