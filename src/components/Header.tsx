import logoOrange from "../assets/images/logo-orange.png";
import perfilImg from "../assets/images/perfil-image.png";
import notificationIcon from "../assets/images/NotificationsIcon.svg";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-container">
        <img src={logoOrange.src} className="header-logo"/>
        <div className="header-h6-container">
            <a href="">
                <h6>Meus projetos</h6>
            </a>
            <a href="">
                <h6>Descobrir</h6>
            </a>
        </div>

        {/* <div className="header-empty-div"></div> */}
        
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