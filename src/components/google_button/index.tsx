import logo_google from "@/assets/images/logo-google.svg";
import "./style.css";

interface googleProps {
  onClick?: () => void;
}

function GoogleButton({ onClick }: googleProps) {
  return (
    <button className="google-button" onClick={onClick}>
        <img src={logo_google.src}/>
        <text className="google-button-text">Entrar com Google</text>
    </button>
  )
}

export default GoogleButton