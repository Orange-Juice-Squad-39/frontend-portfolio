import "./style.css";

interface smallButtonProps {
    text: string;
    disabled: boolean;
    onClick?: () => void;
}

function SmallButton({ text, disabled, onClick }: smallButtonProps) {
  return (
    <button 
      disabled={disabled} 
      className="small-button small-button-text"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default SmallButton