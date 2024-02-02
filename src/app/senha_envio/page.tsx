import imgLogin from "@/assets/images/img_login.png";
import GoogleButton from "@/components/google_button";
import Input from "@/components/input";
import LargeButton from "@/components/large_button";
import "./style.css";
 

function SenhaEnvio() {

  return (
    <div className="senha-envio-container">
      <div className="left-components">
        <img src={imgLogin.src}/>
      </div>
      <div className="right-components">
        <h3 className="senha-envio-h3">Redefinição de senha</h3>
        <h5>Digite seu e-mail no campo abaixo e lhe<br/>enviaremos uma nova senha.</h5>
        <div className="senha-envio-input">

          <Input label="" type="email" name="email" placeholder="Email address"/>
          <div className="senha-envio-submit">
            <LargeButton text="Redefinir senha"/>
          </div>
          
          <div className="link-container">
            <div className="subtitle1">Já possui cadastro?</div>
            <a href="/" className="subtitle1">Faça seu login!</a>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default SenhaEnvio