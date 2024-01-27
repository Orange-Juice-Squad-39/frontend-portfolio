import "../styles/medium-small-button.css";

interface mediumButtonProps {
    text: string;
    disabled: boolean;
}

function MediumSmallButton({ text, disabled }: mediumButtonProps) {
  return (
    <button disabled={disabled} className="medium-button medium-button-text">{text}</button>
  )
}

export default MediumSmallButton