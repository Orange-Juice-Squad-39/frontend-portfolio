import imgLogin from "@/assets/images/img_login.png";
import GoogleButton from "@/components/google_button";
import Input from "@/components/input";
import PasswordInput from "@/components/password_input";
import LargeButton from "@/components/large_button";
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
        <div className="login-input">
          <h5 className="login-h5">Faça login com email</h5>
          <Input label="" type="email" name="email" placeholder="Email address"/>
          <PasswordInput placeholder="Password" onPasswordChange={() => {}}/>
          <div className="login-submit">
            <LargeButton text="ENTRAR"/>
          </div>
          
          <div className="link-container">
            <a href="/cadastro" className="subtitle1">Cadastre-se</a>
            <a href="/senha_envio" className="subtitle1">Esqueceu a senha?</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login