import "../styles/button.css";

interface buttonStyle {
    text: string;
}

function Button({ text }: buttonStyle) {
  return (
    <button className="button buttonText">{text}</button>
  )
}

export default Button