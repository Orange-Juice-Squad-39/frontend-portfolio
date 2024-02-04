import "./style.css";

interface projMenuProps {
  edit: () => void;
  exclusion: () => void;
}

function ProjectMenu({ edit, exclusion }: projMenuProps) {
  return (
    <div className="menu-container">
        <div className="arrow-img"></div>
        <button className="menu-item subtitle1" onClick={edit}>Editar</button>
        <button className="menu-item subtitle1" onClick={exclusion}>Excluir</button>
    </div>
  )
}

export default ProjectMenu