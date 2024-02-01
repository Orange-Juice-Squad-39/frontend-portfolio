"use client"
import { useState } from "react";
import imgCadastro from "@/assets/images/img_cadastro.png"
import RegistrationAlert from "@/components/registration_alert";
import RegistrationError from "@/components/registration_error";
import Input from "@/components/input";
import LargeButton from "@/components/large_button";
import "./style.css";


function Cadastro() {
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className="cadastro-container">
        <div className="left-components">
            <img src={imgCadastro.src}/>
        </div>
        <div className="right-components">
            {sucess && (
                <RegistrationError text="Cadastro feito com sucesso"/>
            )}

            {error && (
                <RegistrationAlert text="Erro no cadastro"/>
            )}
            <h3>Cadastre-se</h3>
            <div>
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
            <LargeButton text="CADASTRAR" />
            </div>
        </div>
        
        </div>
    )
}

export default Cadastro