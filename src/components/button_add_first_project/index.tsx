import emptyImg from "@/assets/images/collections.svg";
import "./style.css";

interface firstProjectPops {
  onClick: () => void;
}

function ButtonFirstProject({ onClick }: firstProjectPops ) {
  return (

      <button className="first-project-button" onClick={onClick}>
        <img src={emptyImg.src} className="empty-img"/>
        <div className="first-project-text">
          <text className="body1">Adicione seu primeiro projeto</text>
        </div>
        <div className="first-project-text">
          <text className="body2">Compartilhe seu talento com milhares de pessoas</text>
        </div>
      </button>

  )
}



export default ButtonFirstProject