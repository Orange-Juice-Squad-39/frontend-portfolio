import arrow from "@/assets/images/Arrow.svg";
import "./style.css";

function ProjectMenu() {
  return (
    <div className="menu-container">
        <img src={arrow.src} className="arrow-img"/>
        <button className="menu-item subtitle1">Editar</button>
        <button className="menu-item subtitle1">Excluir</button>
    </div>
  )
}

export default ProjectMenu