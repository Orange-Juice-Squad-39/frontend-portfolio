import "../styles/input.css";

interface inputProps {
    label: string;
    type: string;
    name: string;
}

function Input({ label, type, name }: inputProps) {
  return (
    <div className="input-container">
        <div className="label-container">
            <label className="label-text">{label}</label>
        </div>
        <input type={type} name={name} className="input-content input-text"/>
    </div>
  )
}

export default Input