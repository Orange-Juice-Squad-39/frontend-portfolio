"use client"
import { useState } from "react";
import icon from "../assets/images/mode.svg";
import MenuProject from "./modals/MenuProject";
import "../styles/menu-button.css";

function MenuButton() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <button onClick={() => {setOpenMenu(!openMenu)}} className="menu-button-container">
            <img src={icon.src}/>
            {openMenu && (
                <MenuProject/>
            )}
        </button>
    )
}

export default MenuButton