"use client"
import { useState } from "react";
import icon from "@/assets/images/mode.svg";
import ProjectMenu from "@/components/modals/project_menu";
import "./style.css";

interface menuButtonProps {
    edit: () => void;
    exclusion: () => void;
}

function MenuButton({ edit, exclusion }: menuButtonProps) {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <button onClick={() => {setOpenMenu(!openMenu)}} className="menu-button">
            <img src={icon.src} className="menu-button-img"/>
            {openMenu && (
                <ProjectMenu edit={edit} exclusion={exclusion}/>
            )}
        </button>
    )
}

export default MenuButton