import React from "react";
import './PC.css'
import PCHeader from "../../component/PCHeader";
import PCFooter from "../../component/PCFooter";
import {RightOutlined} from "@ant-design/icons";

export default function ArticlePc(){
    return (
        <div>
            <PCHeader />
            <div style={{height:'84px'}}/>
            <div className='bg-color-khaki' style={{width:'100vw',minWidth:'1200px'}}>
                <div className='common-width'>

                    <div className='flex-row fl-ai-center fl-jc-between' style={{paddingTop:'150px'}}>
                        <div className='font-color-42' style={{fontSize:'40px'}}>ARTICLE</div>
                        <div className='flex-row fl-ai-center'>
                            <div className='article-select'>NEWS</div>
                        </div>
                    </div>

                    <div className='flex-row'>
                      <div>
                          <div className='article-bg' style={{backgroundImage:'url(https://static.paraluni.org/images/infiweb/article_bg1.png)'}}>
                              <div className='article-bg-circle1 flex-center font-color-42'>Aug 14,2023</div>
                              <div className='article-bg-circle2 flex-center'>NEW</div>
                          </div>
                          <div className='flex-row' style={{marginTop:'12px'}}>
                                <div className='article-line' />
                              <div className='article-text'>
                                  Leading the large-scale adoption of Crypto and lighting up the future of Bitcoin.
                              </div>
                          </div>
                          <div className='article-des'>
                              From technological innovation to future applications, the BiHelix team and Waterdrip Capital, as the early layout of the BTC ecosystem, jointly created the RGB-eco research report with their forward-looking analysis and comprehensive research capabilities.
                          </div>
                          <div className='learn-more' onClick={()=>window.open('https://www.odaily.news/post/5189052','_blank')} style={{marginTop:'15px',marginLeft:'22px'}}>LEARN MORE</div>
                      </div>
                    </div>

                    <div style={{height:'100px'}}/>

                </div>
            </div>
            <PCFooter/>
        </div>
    )
}
