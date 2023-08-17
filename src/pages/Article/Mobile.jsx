import React, { useState } from "react"
import "./Mobile.css"
import MHeader from "../../componentM/Header"
import MFooter from "../../componentM/Footer"

export default function ArticleMobile() {
    const [tabkey, setTabkey] = useState("NEWS")
    const newList = [
        {
            key: 0,
            img: "https://static.paraluni.org/images/infiweb/article_bg1.png",
            iconText: "NEW",
            date: "Aug 14, 2023",
            title: "Leading the large-scale adoption of Crypto and lighting up the future of Bitcoin.",
            content:
                "From technological innovation to future applications, the Infinitas team and Waterdrip Capital, as the early layout of the BTC ecosystem, jointly created the RGB-eco research report with their forward-looking analysis and comprehensive research capabilities.",
            button: "LEARN MORE",
            fun: () => window.open("https://www.odaily.news/post/5189052", "_blank"),
        },
    ]

    return (
        <div>
            <MHeader activeIndex={"4"} />

            <div className="content articlePage flex-row">
                <div className="articleTitle mrauto">ARTICLE</div>
                <div
                    onClick={() => {
                        setTabkey("NEWS")
                    }}
                    className={`tabitem ${tabkey == "NEWS" ? "tabActive" : ""}`}
                >
                    NEWS
                </div>
                {/* <div
                    onClick={() => {
                        setTabkey("BLOGS")
                    }}
                    className={`tabitem ${tabkey == "BLOGS" ? "tabActive" : ""}`}
                >
                    BLOGS
                </div> */}
            </div>
            <div className="content newsList">
                {newList.map((i) => (
                    <div className="newsItem" key={i.key}>
                        <div className="newsImgView">
                            <img className="newsImg" src={i.img} />
                            <div className="poa flex-column">
                                <div className="newsIcon ">{i.iconText}</div>
                                <div className="newsT">{i.date}</div>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="newLine"></div>
                            <div className="newsC flex-column">
                                <div className="newsTitle">{i.title}</div>
                                <div className="newsContent">{i.content}</div>
                                <div className="newsButton" onClick={i.fun}>
                                    {i.button}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <MFooter activeIndex={"4"} />
        </div>
    )
}
