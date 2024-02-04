"use client"
import { useState } from "react";
import imgCadastro from "@/assets/images/img_cadastro.png"
import RegistrationAlert from "@/components/registration_alert";
import RegistrationError from "@/components/registration_error";
import Input from "@/components/input";
import PasswordInput from "@/components/password_input";
import LargeButton from "@/components/large_button";
import "./style.css";


function Cadastro() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    

    const handleRegister = () => {
        // Verifique se a senha e a confirmação da senha são iguais
        if (password === confirmPassword) {
            // Lógica de registro bem-sucedida
            setSuccess(true);
            setError(false);
        } else {
            // Lógica de erro ao confirmar a senha
            setSuccess(false);
            setError(true);
        }
    };

    // console.log(password === confirmPassword);

    return (
        <div className="cadastro-container">
        <div className="left-components">
            <img src={imgCadastro.src}/>
        </div>
        <div className="right-components">
            {success && (
                <RegistrationError text="Cadastro feito com sucesso"/>
            )}

            {error && (
                <RegistrationAlert text="Erro no cadastro"/>
            )}
            <h3>Cadastre-se</h3>
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
                <PasswordInput 
                    placeholder="Password"
                    onPasswordChange={(value) => setPassword(value)}
                />
                <PasswordInput 
                    placeholder="Confirm password"
                    onPasswordChange={(value) => setConfirmPassword(value)}
                />
                <LargeButton text="CADASTRAR" /*onClick={handleRegister}*/ /> 
            </div>
        </div>
        
        </div>
    )
}

export default Cadastro