import arrow from "../../assets/images/Arrow.svg";
import "../../styles/menu-project.css";

function MenuProject() {
  return (
    <div className="menu-project-container">
        <img src={arrow.src} className="arrow-img"/>
        <button className="menu-project-item subtitle1">Editar</button>
        <button className="menu-project-item subtitle1">Excluir</button>
    </div>
  )
}

export default MenuProject