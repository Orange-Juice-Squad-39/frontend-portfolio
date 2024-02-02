import imgLogin from "@/assets/images/img_login.png";
import GoogleButton from "@/components/google_button";
import Input from "@/components/input";
import LargeButton from "@/components/large_button";
import { useState } from "react";
import axios from "axios";
import apiConfig from "@/utils/api.config";
import "./style.css";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiConfig.baseURL}/login`, {
        email,
        password,
      });
      const accessToken = response.data.accessToken;
      console.log('Test:', response);

      localStorage.setItem("accessToken", accessToken);

      if (response.status === 201) {
        router.push('/');
        console.log("Login feito!");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        alert("Email e/ou senha incorretos");
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
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <Input
            label=""
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <div className="login-submit">
            <LargeButton text="ENTRAR" onClick={handleLogin}/>
          </div>

          <div className="link-container">
            <a href="/cadastro" className="subtitle1">
              Cadastre-se
            </a>
            <a href="/recuperacao" className="subtitle1">
              Esqueceu a senha?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
