import React from "react"
import "./Mobile.css"
import MHeader from "../../componentM/Header"
import MFooter from "../../componentM/Footer"

export default function ContactMobile() {
    const contactList = [
        {
            img: "https://static.paraluni.org/images/infiweb/contact_bg1.png",
            title: "DEVELOPERS",
            sub: "Discuss features, issues, and ideas in our Github Discussions forum, or chat live with the team and other developers on Discord.",
        },
        { img: "https://static.paraluni.org/images/infiweb/contact_bg2.png", title: "USERS", sub: "Reach out on Telegram（https://t.me/Cindy_yee）" },
        { img: "https://static.paraluni.org/images/infiweb/contact_bg3.png", title: "MEDIA,BUSINESS ＆ OTHERS", sub: "BiHelix.contact@gmail.com" },
    ]
    return (
        <div>
            <MHeader activeIndex={"5"} />
            <div className="contactView">
                <div className="contactT"></div>
                {contactList.map((i, ind) => (
                    <div key={ind} className="flex-row contactItem">
                        <img src={i.img} className="contactImg" />
                        <div className="contactContent">
                            <div className="contactTitle">{i.title} </div>
                            <div className="contactSub">{i.sub}</div>
                        </div>
                    </div>
                ))}
            </div>

            <MFooter activeIndex={"5"} />
        </div>
    )
}
