import "../styles/button.css";

interface buttonProps {
    text: string;
}

function Button({ text }: buttonProps) {
  return (
    <button className="button buttonText">{text}</button>
  )
}

export default Button