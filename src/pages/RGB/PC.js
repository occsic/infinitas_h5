import React from "react";
import './PC.css'
import PCHeader from "../../component/PCHeader";
import {Carousel} from "antd";

export default function RGBPC() {
    return (
        <div className='home-pc'>
            <PCHeader/>
            <div style={{height:'100px'}}/>
            <div className='flex-center' style={{backgroundColor: '#0f1923', width: '100vw'}}>
                <div className='common-width'>
                    <div className='rgb-fontA'>WHAT IS RGB?</div>
                    <div className='rgb-des' style={{marginTop:'60px'}}>
                            RGB IS AN EXTENSIBLE AND SECURE INTELLIGENT CONTRACT SYSTEM FOR BITCOIN AND LIGHTNING NETWORK DEVELOPED
                            BY LNP/BP STANDARDS ASSOCIATION. IT ADOPTS THE CONCEPTS OF PRIVATE OWNERSHIP AND COMMON OWNERSHIP, AND
                            IS A TURING -COMPLETE AND DISTRUSTFUL DISTRIBUTED COMPUTING FORM, WHICH DOES NOT NEED TO INTRODUCE A
                            NON-BLOCK DECENTRALIZATION PROTOCOL OF TOKENS.

                    </div>
                    <div className='flex-row fl-ai-center fl-jc-between' style={{marginTop:'30px'}}>
                        <div className='rgb-des' style={{flex:0.48,height:'260px'}} >
                              THE PROTOTYPE IS BASED ON THE CONCEPTS OF CLIENT-
                              SIDE VALIDATION AND SINGLE-USE-SEALS PROPOSED BY
                              PETER TODD IN 2016, AND RUNS ON THE LAYER2 AND
                              LAYER3 (OUT OF THE CHAIN) OF THE BITCOIN ECOSYSTEM.

                             <div style={{marginTop:'30px'}}>
                                 ORIGINAL LINK:
                                 HTTPS://PETERTODD.ORG/2017/SCALABLE-SINGLE-USE-SEAL-
                                 ASSET-TRANSFER
                             </div>
                        </div>
                        <div className='rgb-des' style={{flex:0.48,height:'260px'}}>
                                THE DESIGN PURPOSE OF RGB IS TO RUN SCALABLE, ROBUST AND PRIVATE
                                SMART CONTRACTS ON UTXO BLOCKCHAIN (SUCH AS BITCOIN) TO REALIZE ALL
                                POSSIBILITIES. THROUGH RGB, DEVELOPERS CAN EXECUTE SMART CONTRACTS SUCH
                                AS TOKEN ISSUANCE, NFT, DEFI, DAO, AND MORE COMPLEX CATEGORIES.

                        </div>
                    </div>
                    <div style={{height:'158px'}}/>
                </div>
            </div>

            <div className='common-width' style={{backgroundColor:"#ffffff"}}>s
                <div className='font-color-42' style={{fontWeight:800,fontSize:'40px',textAlign:'center',marginTop:'112px'}}>DESIGN CORE</div>
                <div className='flex-row fl-ai-center fl-jc-between' style={{marginTop:'48px'}}>
                  <Carousel>
                      <div>
                          <div className='font-color-42 font-size-16' style={{width:'485px',height:'402px'}}>
                              <span style={{fontSize:'24px'}}>C</span>lient-side validation is a paradigm proposed by Peter Todd in 2016. Its core idea is that in a distributed system, the validation of state does not need to be implemented globally by all parties involved in the decentralization protocol; Instead, only the parties involved in a specific state transition need to verify. Using this method, the state transition is not published in the global network, but transformed into a short encrypted commitment by using a cryptographic hash function, which needs to be a part of a "Proof-of-Publication" medium and has three main characteristics: receipt proof, non-publication proof and membership proof. The first Client-side validation system is the Open Time Stamps protocol, which was also proposed and developed by Peter Todd in 2014-2016.
                          </div>
                      </div>
                  </Carousel>
                </div>
            </div>

        </div>
    )
}
