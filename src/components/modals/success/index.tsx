import sucessImg from "@/assets/images/sucess.svg";
import "./style.css";

interface sucessProps {
  text: string;
  onClick: () => void;
}

function SuccessModal({ text, onClick }: sucessProps) {
  return (
    <div className="sucess-modal">
      <div className="sucess-container">
        <div className="sucess-content">
          <h5>{text} com sucesso!</h5>
          <div className="img-container">
            <img src={sucessImg.src} className="sucess-img"/>
          </div>
          <button className="sucess-button" onClick={onClick}>voltar para projetos</button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal