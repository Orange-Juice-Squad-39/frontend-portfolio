"use client"
import { useState } from "react";
import perfilImg from "@/assets/images/perfil-image.png";
import SmallButton from "../small_button";
import "./style.css";

function CardPerfil() {
    const [userName, setUserName] = useState('Camila Soares');
    const [country, setCountry] = useState('Brasil');

    return (
        <div className="card-perfil-container">
            <img src={perfilImg.src} className="card-perfil-img"/>
            <div className="card-info-container">
                <div className="card-text-container">
                    <h5 className="card-h5">{userName}</h5>
                    <text className="subtitle1 card-country">{country}</text>
                </div>
                <SmallButton disabled={true} text="ADICIONAR PROJETO"/>
            </div>
        </div>
    )
}

export default CardPerfil