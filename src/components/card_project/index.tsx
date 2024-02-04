"use client"
import { useState } from "react";
import pjtImg from "@/assets/images/img_projeto.png";
import pflImg from "@/assets/images/perfil-image.png";
import Tag from "@/components/tag";
import MenuButton from "@/components/menu_button";
import "./style.css";
import { StaticImageData } from "next/image";

interface cardProjProps {
    projImg?: StaticImageData;
    perfilImg?: StaticImageData;
    name: string;
    data: string;
    portfolio: boolean
    edit: () => void;
    exclusion: () => void;
}

function CardProject({ projImg, perfilImg, name, data, portfolio, edit, exclusion}: cardProjProps) {
    const [projectImg, setProjectImg] = useState(projImg !== undefined ? projImg : pjtImg);
    const [userImg, setUserImg] = useState(perfilImg !== undefined ? perfilImg : pflImg);
    const [userName, setUserName] = useState(name !== ''? name : 'Camila Soares');
    const [date, setDate] = useState(data !== '' ? data : '12/23');

    return (
        <div className="card-project-container">
            {portfolio && (
                <div className="menu-button-container">
                    <MenuButton edit={edit} exclusion={exclusion}/>
                </div>
            )}
            <div className="project-img">
                <img src={projectImg.src}/>
            </div>
            <div className="card-project-info">
                <div className="user-info">
                    <img src={userImg.src}/>
                    <p>{userName} • {date}</p>
                </div>
                <div className="tags-container">
                    <Tag text="UX"/>
                    <Tag text="Web"/>
                </div>
            </div>
        </div>
    )
}

export default CardProject