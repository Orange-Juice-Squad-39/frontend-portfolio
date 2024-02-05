import logoOrange from "@/assets/images/logo-orange.png";
import perfilImg from "@/assets/images/perfil-image.png";
import notificationIcon from "@/assets/images/NotificationsIcon.svg";
import MenuMobileButton from "../menu_mobile_button";
import exitIconDesk from "@/assets/images/LogoutFilledDesk.svg";
import "./style.css";
import { useRouter } from "next/navigation";

function Header() {
const router = useRouter();
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
            <a href="/">
                <h6>Descobrir</h6>
            </a>
        </div>
        
        <div className="header-right-container">
            <button 
            className="exit-button-content-desk" 
            onClick={() => {
                        localStorage.setItem("logged", "false");
                        router.refresh();
                    }}>
                <img src={exitIconDesk.src} className="exit-icon-desk"/>
            </button>
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