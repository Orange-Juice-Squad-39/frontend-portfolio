import "../styles/subtitle-1.css";

interface subtitle1Props {
    text: string
}

function Subtitle1({ text }: subtitle1Props) {
  return (
    <div className="subtitle-1-container">
        <text className="subtitle-1">{text}</text>
    </div>
  )
}

export default Subtitle1