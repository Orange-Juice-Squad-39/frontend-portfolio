import "../styles/title-h5.css";

interface titleH5Props {
    text: string;
}

function TitleH5({ text }: titleH5Props) {
  return (
    <h5 className="title-h5">{text}</h5>
  )
}

export default TitleH5