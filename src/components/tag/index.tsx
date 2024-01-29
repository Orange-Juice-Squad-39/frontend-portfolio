import "./style.css";

interface tagProps {
    text: string;
}

function Tag({ text }: tagProps) {
  return (
    <div className="tag-container">
      <div className="tag-text-container">
        <label className="tag-text">{text}</label>
      </div>
    </div>
  )
}

export default Tag