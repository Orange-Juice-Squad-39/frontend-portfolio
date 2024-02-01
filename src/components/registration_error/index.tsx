import error from "@/assets/images/ErrorCircleOutlined.svg";
import "./style.css";

interface registrationErrorProps {
    text: string;
}

function RegistrationError({ text }: registrationErrorProps) {
  return (
    <div className="registration-error registration-text">
        <img src={error.src}/>
        {text}
    </div>
  )
}

export default RegistrationError