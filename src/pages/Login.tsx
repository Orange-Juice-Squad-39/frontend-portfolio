import img_login from "../assets/images/img_login.png";
import TitleH3 from "@/components/TitleH3";
import GoogleButton from "@/components/GoogleButton";
import Button from "@/components/LargeButton";
import "../styles/login.css";

function Login() {
  return (
    <div className="login">
      <img src={img_login.src}/>
      <div className="login-right-components">
        <TitleH3 text="Entre no Orange Portfólio" />
        <GoogleButton/>
        <Button text="ENTRAR" />
      </div>
      
    </div>
  )
}

export default Login