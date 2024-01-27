import sucessImg from "../../assets/images/sucess.svg";
import "../../styles/sucess-modal.css";

interface sucessProps {
  text: string;
}

function SucessModal({ text }: sucessProps) {
  return (
    <div className="sucess-modal">
      <div className="sucess-container">
        <div className="sucess-content">
          <h5 className="sucess-h5">{text}</h5>
          <div className="img-container">
            <img src={sucessImg.src} className="sucess-img"/>
          </div>
          <button className="sucess-button">voltar para projetos</button>
        </div>
      </div>
    </div>
  )
}

export default SucessModal