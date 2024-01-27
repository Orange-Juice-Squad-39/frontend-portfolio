import emptyImg from "../../assets/images/collections.svg";
import MediumSmallButton from "../MediumSmallButton";
import "../../styles/add-project.css";

function AddProject() {
  return (
    <div className="add-project-container">
        <h5 className="add-project-h5">Adicionar projeto</h5>
        <div className="add-project-content">
            <div className="add-project-content-left">
                <text className="subtitle1 content-left-text">
                    Selecione o conteúdo que você deseja fazer upload
                </text>
                <div className="add-project-img">
                    <button className="add-img-button">
                        <div className="button-content">
                            <img src={emptyImg.src} className="empty-img"/>
                            <div className="button-text">
                                <text className="body2">
                                    Compartilhe seu talento com milhares de pessoas
                                </text>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="add-project-content-right">
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Título"
                    className="add-inputs label"
                />
                <input 
                    type="text" 
                    name="tags" 
                    placeholder="Tags"
                    className="add-inputs label"
                />
                <input 
                    type="url" 
                    name="link" 
                    placeholder="Link"
                    className="add-inputs label"
                />
                <textarea 
                    name="description" 
                    placeholder="Descrição"
                    className="description-input label"
                ></textarea>
            </div>
        </div>
        <div className="add-project-bottom-container">
            <a href="" className="view-post-button subtitle1">Visualizar publicação</a>
            <div className="bottom-buttons">
                <MediumSmallButton text="SALVAR" disabled={false}/>
                <MediumSmallButton text="CANCELAR" disabled={true}/>
            </div>
        </div>
    </div>
  )
}

export default AddProject