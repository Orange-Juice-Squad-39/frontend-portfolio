import "../styles/large-button.css";

interface largeButtonProps {
    text: string;
}

function LargeButton({ text }: largeButtonProps) {
  return (
    <button className="large-button large-button-text">{text}</button>
  )
}

export default LargeButton