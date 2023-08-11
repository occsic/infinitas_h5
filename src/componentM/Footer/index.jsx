import React from "react"
import "./index.css"
import logo from "../../static/Logo.png"
import { Tooltip, Popover, Collapse } from "antd"
import { MenuOutlined, RightOutlined } from "@ant-design/icons"
export default function MHeader() {
    const items = [
        {
            key: "1",
            label: <div className="font-fff itemsTitle">HOME</div>,
            children: (
                <div className="itemsI">
                    <p>About us</p>
                    <p>We stand for</p>
                    <p>Focus</p>
                    <p>Solutions</p>
                    <p>Overall Architecture</p>
                    <p>Roadmap</p>
                </div>
            ),
        },
        {
            key: "2",
            label: <div className="font-fff  itemsTitle">LEARN</div>,
            children: (
                <div className="itemsI">
                    <p>LIGHTING NETWORK</p>
                    <p>FZK-SNARKocus</p>
                </div>
            ),
        },
        {
            key: "3",
            label: <div className="font-fff  itemsTitle">RESOURCES</div>,
            children: (
                <div className="itemsI">
                    <p>DOC</p>
                    <p>TECH WHITEPAPER</p>
                    <p>ONE PAPER</p>
                </div>
            ),
        },
        {
            key: "4",
            label: <div className="font-fff  itemsTitle">BUILD</div>,
            children: (
                <div className="itemsI">
                    <p>ONLINE IDE</p>
                </div>
            ),
        },
    ]

    const iconData = [
        { img: logo, href: "111" },
        { img: logo, href: "111" },
        { img: logo, href: "111" },
        { img: logo, href: "111" },
        { img: logo, href: "111" },
        { img: logo, href: "111" },
    ]

    const aaaa = (e, xx) => {
        console.log(e, xx)
    }

    return (
        <div className="m-footer">
            <img className="m-logo" src={logo} />
            <Collapse accordion ghost items={items} expandIconPosition="end" onChange={aaaa} />
            <div className="flex-row fl-ai-center endItem">
                <div className="font-fff  itemsTitle">CONTACT</div>
                <RightOutlined style={{ color: "#fff", fontSize: "13px" }} />
            </div>
            <div className="font-fff tac foottext">Copyright © 2024, Infinitas - Network. All rights reserved.</div>
            <div className="flex-row fl-jc-center">
                {iconData.map((icon, ind) => (
                    <img key={ind} src={logo} className="iconimg" />
                ))}
            </div>
        </div>
    )
}