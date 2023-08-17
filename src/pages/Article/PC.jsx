import React from "react";
import './PC.CSS'
import PCHeader from "../../component/PCHeader";
import PCFooter from "../../component/PCFooter";

export default function ArticlePc(){
    return (
        <div>
            <PCHeader />
            <div style={{height:'84px'}}/>
            <PCFooter/>
        </div>
    )
}
