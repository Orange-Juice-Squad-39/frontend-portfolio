"use client"
import { useState } from "react";
import imgCadastro from "@/assets/images/img_cadastro.png"
import RegistrationAlert from "@/components/registration_alert";
import RegistrationError from "@/components/registration_error";
import Input from "@/components/input";
import LargeButton from "@/components/large_button";
import "./style.css";


function Edicao() {
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className="edicao-container">
        <div className="left-components">
            <img src={imgCadastro.src}/>
        </div>
        <div className="right-components">
            {sucess && (
                <RegistrationError text="edicao feito com sucesso"/>
            )}

            {error && (
                <RegistrationAlert text="Erro no edicao"/>
            )}
            <h3>Editar perfil</h3>
            <div className="internal-container">
            <div className="name-container">
                <div className="name-input">
                    <Input label="" type="text" name="name" placeholder="Nome *"/>
                </div>
                <div className="surname-input">
                    <Input label="" type="text" name="surname" placeholder="Sobrenome *"/>
                </div>
            </div>
            <Input label="" type="email" name="email" placeholder="Email address"/>
            <Input label="" type="password" name="password" placeholder="Password"/>
            <Input label="" type="password" name="confirm-password" placeholder="Confirm password"/>
   

            <LargeButton text="EDITAR" />
            </div>
        </div>
        
        </div>
    )
}

export default Edicao