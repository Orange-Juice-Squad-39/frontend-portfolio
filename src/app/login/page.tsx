import imgLogin from "@/assets/images/img_login.png";
import GoogleButton from "@/components/google_button";
import Input from "@/components/input";
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
          <Input label="Email address" type="email" name="email" placeholder=""/>
          <Input label="Password" type="password" name="password" placeholder=""/>
          <div className="login-submit">
            <LargeButton text="ENTRAR"/>
          </div>
          
          <div className="link-container">
            <a href="/cadastro" className="subtitle1">Cadastre-se</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login