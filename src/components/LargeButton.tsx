import "../styles/large-button.css";

interface largeButtonProps {
    text: string;
}

function LargeButton({ text }: largeButtonProps) {
  return (
    <button type="submit" className="large-button large-button-text">{text}</button>
  )
}

export default LargeButton