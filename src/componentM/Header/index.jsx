import React, { useState } from "react"
import "./index.css"
import logo from "../../static/Logo.png"
import { Tooltip, Popover, Drawer, Menu, Collapse } from "antd"
import { MenuOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function MHeader({ activeIndex }) {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

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
                    <p
                        onClick={() => {
                            console.log(window.location)
                            if (!(window.location.hash == "#/" || window.location.hash.indexOf("#/home") > -1)) {
                                window.sessionStorage.setItem("t", "about")
                                navigate("/")
                            } else {
                                console.log(111)
                                document.getElementById("about").scrollIntoView()
                                window.scrollBy(0, -48)
                            }
                            setOpen(false)
                        }}
                    >
                        About us
                    </p>
                    <p
                        onClick={() => {
                            setOpen(false)
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
                    {/*<p*/}
                    {/*    onClick={() => {*/}
                    {/*        setOpen(false)*/}
                    {/*        if (!(window.location.hash == "#/" || window.location.hash.indexOf("#/home") > -1)) {*/}
                    {/*            window.sessionStorage.setItem("t", "focus")*/}
                    {/*            navigate("/")*/}
                    {/*        } else {*/}
                    {/*            document.getElementById("focus").scrollIntoView()*/}
                    {/*            window.scrollBy(0, -48)*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    Focus*/}
                    {/*</p>*/}
                    <p
                        onClick={() => {
                            setOpen(false)
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
                            setOpen(false)
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
                    {/*<p*/}
                    {/*    onClick={() => {*/}
                    {/*        setOpen(false)*/}
                    {/*        if (!(window.location.hash == "#/" || window.location.hash.indexOf("#/home") > -1)) {*/}
                    {/*            window.sessionStorage.setItem("t", "roadmap")*/}
                    {/*            navigate("/")*/}
                    {/*        } else {*/}
                    {/*            document.getElementById("roadmap").scrollIntoView()*/}
                    {/*            window.scrollBy(0, -48)*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    Roadmap*/}
                    {/*</p>*/}
                </div>
            ),
        },
        {
            key: "2",
            label: <div className="font-fff  itemsTitle">LEARN</div>,
            children: (
                <div className="itemsI">
                    <p onClick={() => navigate("/rgb")}>RGB</p>
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
                    {/*<p>DOC</p>*/}
                    {/* <p>TECH WHITEPAPER</p>
                    <p>ONE PAPER</p> */}
                </div>
            ),
        },
        {
            key: "4",
            label: <div className="font-fff  itemsTitle">BUILD</div>,
            children: (
                <div className="itemsI">
                    <p  onClick={() => navigate("/article")}>ARTICLE</p>
                    {/* <p>ONLINE IDE</p> */}
                </div>
            ),
        },
    ]
    return (
        <>
            <div className="m-header">
                <Link to={"/"}>
                    <img className="m-header-logo" src={logo} width={180} height={35} />
                </Link>

                <MenuOutlined
                    onClick={() => {
                        setOpen(true)
                    }}
                    style={{ fontSize: "20px", color: "#fff" }}
                />
            </div>
            <Drawer width={330} className="showview" placement="right" onClose={closeDrawer} open={open}>
                <div className="closeicon flex-row">
                    <CloseOutlined onClick={closeDrawer} style={{ color: "#fff", fontSize: "30px" }} />
                </div>
                <Collapse forceRender defaultActiveKey={activeIndex} accordion ghost items={items} expandIconPosition="end" onChange={changeCollapse} />
                {/*<div className="flex-row fl-ai-center endItem"  onClick={()=>navigate('/contact')}>*/}
                {/*    <div className="font-fff  itemsTitle">CONTACT</div>*/}
                {/*    <RightOutlined style={{ color: "#fff", fontSize: "13px" }} />*/}
                {/*</div>*/}
            </Drawer>
        </>
    )
}
