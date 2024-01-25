import "../styles/medium-small-button.css";

interface mediumButtonProps {
    text: string;
}

function MediumSmallButton({ text }: mediumButtonProps) {
  return (
    <button className="medium-button medium-button-text">{text}</button>
  )
}

export default MediumSmallButton