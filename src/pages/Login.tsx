import img_login from "../assets/images/img_login.png";
import TitleH3 from "@/components/TitleH3";
import GoogleButton from "@/components/GoogleButton";
import TitleH5 from "@/components/TitleH5";
import Input from "@/components/Input";
import LargeButton from "@/components/LargeButton";
import Subtitle1 from "@/components/Subtitle1";
import "../styles/login.css";

function Login() {
  return (
    <div className="login">
      <img src={img_login.src}/>
      <div className="login-right-components">
        <TitleH3 text="Entre no Orange Portfólio" />
        <GoogleButton/>
        <div>
          <TitleH5 text="Faça login com email" />
          <Input label="Email address" type="email" name="email"/>
          <Input label="Password" type="password" name="password"/>
          <LargeButton text="ENTRAR" />
          <Subtitle1 text="Cadastre-se" />
        </div>
      </div>
      
    </div>
  )
}

export default Login