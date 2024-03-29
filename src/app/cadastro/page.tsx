"use client";
import { useState } from "react";
import imgCadastro from "@/assets/images/img_cadastro.png";
import RegistrationAlert from "@/components/registration_alert";
import RegistrationError from "@/components/registration_error";
import Input from "@/components/input";
import PasswordInput from "@/components/password_input";
import LargeButton from "@/components/large_button";
import axios from "axios";
import apiConfig from "@/utils/api.config";
import { useRouter } from "next/navigation";
import validatePassword from "@/utils/globalFunctions";
import "./style.css";

function Cadastro() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleNameChange = (value: string) => {
    setFormData({ ...formData, name: value });
  };

  const handleLastNameChange = (value: string) => {
    setFormData({ ...formData, lastName: value });
  };

  const handleEmailChange = (value: string) => {
    setFormData({ ...formData, email: value });
  };

  const handlePasswordChange = (value: string) => {
    const isValid = validatePassword(value);

    if (isValid) {
      setFormData({ ...formData, password: value });
    }
  };


  const handleRegisterUser = async () => {
    if (formData.password === confirmPassword) {
      setSuccess(true);
      setError(false);
      try {
        console.log('Form: ', formData);
        const response = await axios.post(
          `${apiConfig.baseURL}/users/registeruser`,
          {
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
          }
        );

        if (response.status === 201) {
          router.push("/");
        }
      } catch (err: any) {
        setSuccess(false);
        setError(true);
        if (err.response) {
          if (err.response.status === 409) {
            alert(err.response.message);
          } else {
            console.error(
              `Erro ao realizar cadastro - Status: ${err.response.status}`,
              err.message
            );
          }
        } else {
          console.error("Erro ao realizar cadastro", err.message);
        }
      }
    } else {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <div className="cadastro-container">
      <div className="left-components">
        <img src={imgCadastro.src} />
      </div>
      <div className="right-components">
        {success && <RegistrationAlert text={"Cadastro feito com sucesso"} />}

        {error && <RegistrationError text="Erro no cadastro" />}
        <h3>Cadastre-se</h3>
        <div className="internal-container">
          <div className="name-container">
            <div className="name-input">
              <Input
                label=""
                type="text"
                name="name"
                placeholder="Nome *"
                onChange={handleNameChange}
              />
            </div>
            <div className="surname-input">
              <Input
                label=""
                type="text"
                name="surname"
                placeholder="Sobrenome *"
                onChange={handleLastNameChange}
              />
            </div>
          </div>
          <Input
            label=""
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleEmailChange}
          />
          <PasswordInput
            placeholder="Password"
            onPasswordChange={handlePasswordChange}
            isRegister={true}
          />
          <PasswordInput
            placeholder="Confirm password"
            onPasswordChange={(value) => {
              setConfirmPassword(value);
            }}
            isRegister={true}
          />
          <LargeButton text="CADASTRAR" onClick={handleRegisterUser} />
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
