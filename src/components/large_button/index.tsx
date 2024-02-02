import "./style.css";

interface largeButtonProps {
  text: string;
}

function LargeButton({ text }: largeButtonProps) {
  return (
    <button type="submit" className="large-button">{text}</button>
  )
}

export default LargeButton