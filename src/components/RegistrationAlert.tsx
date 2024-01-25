import "../styles/registration-alert.css";
import check from "../assets/images/CheckCircleOutlined.svg";

interface registrationAlertProps {
    text: string;
}

function RegistrationAlert({ text }: registrationAlertProps) {
  return (
    <div className="registration-alert registration-text">
        <img src={check.src}/>
        {text}
    </div>
  )
}

export default RegistrationAlert