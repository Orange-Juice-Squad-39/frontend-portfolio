import imgLogin from "@/assets/images/img_login.png";
import GoogleButton from "@/components/google_button";
import Input from "@/components/input";
import PasswordInput from "@/components/password_input";
import LargeButton from "@/components/large_button";
import { useState } from "react";
import axios from "axios";
import apiConfig from "@/utils/api.config";
import "./style.css";
import { useRouter } from "next/navigation";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (value: string) => {
    setFormData({ ...formData, email: value });
  };

  const handlePasswordChange = (value: string) => {
    setFormData({ ...formData, password: value });
  };  

  const router = useRouter()

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiConfig.baseURL}/login`, {
        username: formData.email,
        password: formData.password,
      });
  
      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
        //localStorage.setItem("logged", "true");
        console.log(response.data.accessToken);
        // router.refresh();
        router.push('/descobrir');
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401) {
          alert("Email e/ou senha incorretos");
        } else {
          console.error(`Erro ao fazer login - Status: ${error.response.status}`, error.message);
        }
      } else {
        console.error("Erro ao fazer login", error.message);
      }
    }
  };   

  return (
    <div className="login-container">
      <div className="left-components">
        <img src={imgLogin.src} />
      </div>
      <div className="right-components">
        <h3 className="login-h3">Entre no Orange Portfólio</h3>
        <GoogleButton />
        <div className="login-input">
          <h5 className="login-h5">Faça login com email</h5>
          <Input 
            label="" 
            type="email" 
            name="email" 
            placeholder="Email address"
            onChange={handleInputChange}
          />
          <PasswordInput placeholder="Password" onPasswordChange={handlePasswordChange} />
          <div className="login-submit">
            <LargeButton text="ENTRAR" onClick={handleLogin}/>
          </div>

          <div className="link-container">
            <a href="/cadastro" className="subtitle1">Cadastre-se</a>
            <a href="/senha_envio" className="subtitle1">Esqueceu a senha?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
