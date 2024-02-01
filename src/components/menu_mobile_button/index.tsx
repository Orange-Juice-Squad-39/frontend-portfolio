"use client"
import { useState } from "react";
import MenuMobile from "@/components/menu_mobile";
import iconMenuMobile from "@/assets/images/menu-sandwich-icon.svg";
import React from 'react';
import "./style.css";

function MenuMobileButton() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <div className="menu-mobile-button">
            <button 
                onClick={() => {setOpenMobileMenu(!openMobileMenu)}}
            >
                <img src={iconMenuMobile.src}/>
            </button>
            <div className="open-menu">
                {openMobileMenu && (
                    <MenuMobile/>
                )}
            </div>
        </div>
    )
}

export default MenuMobileButton