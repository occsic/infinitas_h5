import React from "react";
import './PC.css'
import PCHeader from "../../component/PCHeader";

export default function InfinitasHomePC(){
    return (
        <div className='home-pc'>
            <PCHeader />
            <div className='hp-one common-width'>
                <div className='hpo-fontA'>BASED ON BITCOIN PROVIDE INFINITELY SCALABLE POWER FOR WEB 3.0</div>
                <div className='hpo-fontB'>TO MEET THE VALUE PURSUIT OF 100 MILLION PEOPLE WHO ARE FASTER, TRUER AND SAFER.</div>
                <div className='hpo-start-border'>
                    <div className='hpo-start flex-center'>START</div>
                </div>
            </div>
        </div>
    )
}
