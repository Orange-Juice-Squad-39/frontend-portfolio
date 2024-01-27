import MediumSmallButton from "../MediumSmallButton";
import "../../styles/delete-project.css";

function DeleteProject() {
  return (
    <div className="delete-project">
        <div className="delete-project-container">
            <h5 className="delete-project-h5">Deseja Excluir?</h5>
            <text className="delete-project-text">
                Se você prosseguir irá excluir o projeto do seu portfólio
            </text>
            <div className="delete-project-buttons">
                <MediumSmallButton text="EXCLUIR" disabled={false}/>
                <MediumSmallButton text="CANCELAR" disabled={true}/>
            </div>
        </div>
    </div>
  )
}

export default DeleteProject