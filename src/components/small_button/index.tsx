import "./style.css";

interface smallButtonProps {
    text: string;
    disabled: boolean;
}

function SmallButton({ text, disabled }: smallButtonProps) {
  return (
    <button disabled={disabled} className="small-button small-button-text">{text}</button>
  )
}

export default SmallButton