import React, { useState } from "react"
import "./index.css"
import logo from './mlogo.png'
import { Tooltip, Popover, Drawer, Menu, Collapse } from "antd"
import { MenuOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons"
export default function MHeader({activeIndex}) {
    const [open, setOpen] = useState(false)

    const changeCollapse = () => {}
    const closeDrawer = () => {
        setOpen(false)
    }
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
                    <p>RGB</p>
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
                    <p>PITCH DECK</p>
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
                    <p>ARTICLE</p>
                    <p>ONLINE IDE</p>
                </div>
            ),
        },
    ]
    return (
        <>
            <div className="m-header">
                <img className="m-header-logo" src={logo} width={180} height={35} />
                <MenuOutlined onClick={()=>{setOpen(true)}} style={{ fontSize: "20px", color: "#000" }} />
            </div>
            <Drawer width="330" className="showview" placement="right" onClose={closeDrawer} open={open}>
                <div className="closeicon flex-row">
                    <CloseOutlined onClick={closeDrawer} style={{ color: "#fff", fontSize: "30px" }} />
                </div>
                <Collapse defaultActiveKey={activeIndex} accordion ghost items={items} expandIconPosition="end" onChange={changeCollapse} />
                <div className="flex-row fl-ai-center endItem">
                    <div className="font-fff  itemsTitle">CONTACT</div>
                    <RightOutlined style={{ color: "#fff", fontSize: "13px" }} />
                </div>
            </Drawer>
        </>
    )
}
