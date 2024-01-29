"use client"
import { useState } from "react";
import icon from "@/assets/images/mode.svg";
import ProjectMenu from "@/components/modals/project_menu";
import "./style.css";

function MenuButton() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <button onClick={() => {setOpenMenu(!openMenu)}} className="menu-button-container">
            <img src={icon.src}/>
            {openMenu && (
                <ProjectMenu/>
            )}
        </button>
    )
}

export default MenuButton