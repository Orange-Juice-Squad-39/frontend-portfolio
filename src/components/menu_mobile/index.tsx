import exitIcon from "@/assets/images/LogoutFilled.svg";
import "./style.css";
import { useRouter } from "next/navigation";

function MenuMobile() {
    const router = useRouter();

  return (
    <div className='menu-mobile-container'>
        <div className='user-info-container'>
            <div className='user-info-text'>
                <text className="username-text">Camila</text>
                <text className="email-text">Camila.ux@gmail.com</text>
            </div>
        </div>
        <div className="divider-container">
            <div className="divider"></div>
        </div>
        <div className="menu-bottom-container">
            <a href="/portfolio" className="menu-mobile-item">Meus projetos</a>
            <a href="/descobrir" className="menu-mobile-item">Descobrir</a>
            <div className="divider-container">
                <div className="divider"></div>
            </div>
            <div className="exit-button-container">
                <button 
                    className="exit-button-content" 
                    onClick={() => {
                        localStorage.setItem("logged", "false");
                        router.refresh();
                    }}
                >
                    <img src={exitIcon.src} className="exit-icon"/>
                    <text className="menu-mobile-item">Sair</text>
                </button>
            </div>
        </div>
    </div>
  )
}

export default MenuMobile
