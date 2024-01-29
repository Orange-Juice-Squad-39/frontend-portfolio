import logo_google from "@/assets/images/logo-google.svg";
import "./style.css";

function GoogleButton() {
  return (
    <button className="google-button">
        <img src={logo_google.src}/>
        <text className="google-button-text">Entrar com Google</text>
    </button>
  )
}

export default GoogleButton