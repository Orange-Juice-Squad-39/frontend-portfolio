import imgLogin from "@/assets/images/img_login.png";
import Input from "@/components/input";
import LargeButton from "@/components/large_button";
import "./style.css";
 

function SenhaRecebe() {

  return (
    <div className="senha-recebe-container">
      <div className="left-components">
        <img src={imgLogin.src}/>
      </div>
      <div className="right-components">
        <h3 className="senha-recebe-h3">Redefinição de senha</h3>
        <h5>Por favor, insira no campo abaixo a senha que<br/>você deseja para redefinir sua senha.</h5>
        <div className="senha-recebe-input">

        <Input label="" type="password" name="password" placeholder="Password"/>
            <Input label="" type="password" name="confirm-password" placeholder="Confirm password"/>
          <div className="senha-recebe-submit">
            <LargeButton text="Redefinir"/>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default SenhaRecebe