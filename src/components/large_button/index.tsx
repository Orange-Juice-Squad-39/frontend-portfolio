import "./style.css";

interface largeButtonProps {
  text: string;
  onClick: () => void;
}

function LargeButton({ text, onClick }: largeButtonProps) {
  return (
    <button type="submit" className="large-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default LargeButton;
