import imgLogin from "@/assets/images/img_login.png";
import TitleH3 from "@/components/TitleH3";
import GoogleButton from "@/components/GoogleButton";
import TitleH5 from "@/components/TitleH5";
import Input from "@/components/Input";
import LargeButton from "@/components/LargeButton";
import Subtitle1 from "@/components/Subtitle1";
import "./style.css";

function Login() {
  return (
    <div className="login-container">
      <div className="left-components">
        <img src={imgLogin.src}/>
      </div>
      <div className="right-components">
        <h3 className="login-h3">Entre no Orange Portfólio</h3>
        <GoogleButton/>
        <div>
          <h5 className="login-h5">Faça login com email</h5>
          <Input label="Email address" type="email" name="email" placeholder=""/>
          <Input label="Password" type="password" name="password" placeholder=""/>
          <LargeButton text="ENTRAR" />
          <div className="link-container">
            <a href="/cadastro" className="subtitle1">Cadastre-se</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login