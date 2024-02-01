import logoOrange from "@/assets/images/logo-orange.png";
import perfilImg from "@/assets/images/perfil-image.png";
import notificationIcon from "@/assets/images/NotificationsIcon.svg";
import MenuMobileButton from "../menu_mobile_button";
import "./style.css";

function Header() {
  return (
    <div className="header-container">
        <div className="menu-burguer">
            <MenuMobileButton/>
        </div>
        <img src={logoOrange.src} className="header-logo"/>
        <div className="header-h6-container">
            <a href="/portfolio">
                <h6>Meus projetos</h6>
            </a>
            <a href="/descobrir">
                <h6>Descobrir</h6>
            </a>
        </div>
        
        <div className="header-right-container">
            <button className="header-button">
                <img src={perfilImg.src} className="header-perfil-img"/>
            </button>
            <button className="header-button">
                <img src={notificationIcon.src} className="header-notification-icon"/>
            </button>
        </div>
    </div>
  )
}

export default Header