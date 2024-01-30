"use client"
import { useState } from "react";
import icon from "@/assets/images/mode.svg";
import ProjectMenu from "@/components/modals/project_menu";
import "./style.css";

function MenuButton() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <button onClick={() => {setOpenMenu(!openMenu)}} className="menu-button">
            <img src={icon.src} className="menu-button-img"/>
            {openMenu && (
                <ProjectMenu/>
            )}
        </button>
    )
}

export default MenuButton