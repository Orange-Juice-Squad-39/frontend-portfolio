import SmallButton from "@/components/small_button";
import "./style.css";

interface deleteProjProps {
  exclusion: () => void;
  cancel: () => void;
}

function DeleteProject({ exclusion, cancel }: deleteProjProps) {
  return (
    <div className="delete-project">
        <div className="delete-project-container">
            <h5 className="delete-project-h5">Deseja Excluir?</h5>
            <text className="delete-project-text">
                Se você prosseguir irá excluir o projeto do seu portfólio
            </text>
            <div className="delete-project-buttons">
                <SmallButton text="EXCLUIR" disabled={false} onClick={exclusion}/>
                <SmallButton text="CANCELAR" disabled={false} onClick={cancel}/>
            </div>
        </div>
    </div>
  )
}

export default DeleteProject