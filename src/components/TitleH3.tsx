import "../styles/title-h3.css";

interface titleH3Props {
  text: string;
}

function TitleH3({ text }: titleH3Props) {
  return (
    <h3 className="title-h3">{text}</h3>
  )
}

export default TitleH3