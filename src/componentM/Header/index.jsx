import React from "react"
import "./index.css"
import logo from "../../static/Logo.png"
import { Tooltip, Popover } from "antd"
import { MenuOutlined } from '@ant-design/icons';
export default function MHeader() {
    return (
        <div className="m-header">
            <img className="m-logo" src={logo} width={180} height={35} />
            <MenuOutlined style={{ fontSize: '20px', color: '#fff' }}/>
        </div>
    )
}
