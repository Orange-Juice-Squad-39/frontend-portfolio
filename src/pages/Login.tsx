import img_login from "../assets/images/img_login.png";
import TitleH3 from "@/components/TitleH3";
import GoogleButton from "@/components/GoogleButton";
import TitleH5 from "@/components/TitleH5";
import LargeButton from "@/components/LargeButton";
import "../styles/login.css";

function Login() {
  return (
    <div className="login">
      <img src={img_login.src}/>
      <div className="login-right-components">
        <TitleH3 text="Entre no Orange Portfólio" />
        <GoogleButton/>
        <TitleH5 text="Faça login com email" />
        <LargeButton text="ENTRAR" />
      </div>
      
    </div>
  )
}

export default Login