import React from "react"
import "./index.css"
import logo from "../../static/Logo.png"
import { Tooltip, Popover, Collapse } from "antd"
import { MenuOutlined, RightOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

export default function MHeader({ activeIndex }) {
    const navigate = useNavigate()
    const items = [
        {
            key: "1",
            label: <div className="font-fff itemsTitle">HOME</div>,
            children: (
                <div className="itemsI">
                    <p
                        onClick={() => {
                            if (!(window.location.hash == "#/" || window.location.hash.indexOf("#/home") > -1)) {
                                window.sessionStorage.setItem("t", "about")
                                navigate("/")
                            } else {
                                document.getElementById("about").scrollIntoView()
                                window.scrollBy(0, -48)
                            }
                        }}
                    >
                        About us
                    </p>
                    <p
                        onClick={() => {
                            if (!(window.location.hash == "#/" || window.location.hash.indexOf("#/home") > -1)) {
                                window.sessionStorage.setItem("t", "stand")
                                navigate("/")
                            } else {
                                document.getElementById("stand").scrollIntoView()
                                window.scrollBy(0, -48)
                            }
                        }}
                    >
                        We stand for
                    </p>
                    <p
                        onClick={() => {
                            if (!(window.location.hash == "#/" || window.location.hash.indexOf("#/home") > -1)) {
                                window.sessionStorage.setItem("t", "focus")
                                navigate("/")
                            } else {
                                document.getElementById("focus").scrollIntoView()
                                window.scrollBy(0, -48)
                            }
                        }}
                    >
                        Focus
                    </p>
                    <p
                        onClick={() => {
                            if (!(window.location.hash == "#/" || window.location.hash.indexOf("#/home") > -1)) {
                                window.sessionStorage.setItem("t", "solutions")
                                navigate("/")
                            } else {
                                document.getElementById("solutions").scrollIntoView()
                                window.scrollBy(0, -48)
                            }
                        }}
                    >
                        Solutions
                    </p>
                    <p
                        onClick={() => {
                            if (!(window.location.hash == "#/" || window.location.hash.indexOf("#/home") > -1)) {
                                window.sessionStorage.setItem("t", "overall")
                                navigate("/")
                            } else {
                                document.getElementById("overall").scrollIntoView()
                                window.scrollBy(0, -48)
                            }
                        }}
                    >
                        Overall Architecture
                    </p>
                    <p
                        onClick={() => {
                            if (!(window.location.hash == "#/" || window.location.hash.indexOf("#/home") > -1)) {
                                window.sessionStorage.setItem("t", "roadmap")
                                navigate("/")
                            } else {
                                document.getElementById("roadmap").scrollIntoView()
                                window.scrollBy(0, -48)
                            }
                        }}
                    >
                        Roadmap
                    </p>
                </div>
            ),
        },
        {
            key: "2",
            label: <div className="font-fff  itemsTitle">LEARN</div>,
            children: (
                <div className="itemsI">
                    <p onClick={() => navigator("/rgb")}>RGB</p>
                    <p onClick={() => navigate("/network")}>LIGHTING NETWORK</p>
                    <p onClick={() => navigate("/zksnark")}>ZK-SNARK</p>
                </div>
            ),
        },
        {
            key: "3",
            label: <div className="font-fff  itemsTitle">RESOURCES</div>,
            children: (
                <div className="itemsI">
                    <p onClick={() => (window.location.href = "https://docsend.com/view/tpa2xg6c773gqdkn")}>PITCH DECK</p>
                    <p onClick={() => (window.location.href = "https://infinitas-official.gitbook.io/infinitas-whitepaper/")}>DOC</p>
                    {/* <p>TECH WHITEPAPER</p>
                    <p>ONE PAPER</p> */}
                </div>
            ),
        },
        // {
        //     key: "4",
        //     label: <div className="font-fff  itemsTitle">BUILD</div>,
        //     children: (
        //         <div className="itemsI">
        //             <p>ARTICLE</p>
        //             <p>ONLINE IDE</p>
        //         </div>
        //     ),
        // },
    ]
    const iconData = [
        { img: "https://static.paraluni.org/images/infiweb/telegram.png", href: "111" },
        { img: "https://static.paraluni.org/images/infiweb/twitter.png", href: "111" },
        { img: "https://static.paraluni.org/images/infiweb/ins.png", href: "111" },
        { img: "https://static.paraluni.org/images/infiweb/discord.png", href: "111" },
        { img: "https://static.paraluni.org/images/infiweb/youtube.png", href: "111" },
        // { img: "https://static.paraluni.org/images/infiweb/twitch.png", href: "111" },
    ]

    const aaaa = (e, xx) => {
        console.log(e, xx)
    }

    return (
        <div className="m-footer">
            <img className="m-logo" src={logo} />
            <Collapse forceRender defaultActiveKey={activeIndex} accordion ghost items={items} expandIconPosition="end" onChange={aaaa} />
            {/* <div className="flex-row fl-ai-center endItem">
                <div className="font-fff  itemsTitle">CONTACT</div>
                <RightOutlined style={{ color: "#fff", fontSize: "13px" }} />
            </div> */}
            <div className="font-fff tac foottext">Copyright © 2024, Infinitas - Network. All rights reserved.</div>
            <div className="flex-row fl-jc-center">
                {iconData.map((icon, ind) => (
                    <img key={ind} src={icon.img} className="iconimg" />
                ))}
            </div>
        </div>
    )
}
