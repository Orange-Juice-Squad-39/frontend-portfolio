import img_cadastro from "../assets/images/img_cadastro.png";
import TitleH3 from "@/components/TitleH3";
import Input from "@/components/Input";
import LargeButton from "@/components/LargeButton";
import "../styles/login-cadastro.css";

function Cadastro() {
  return (
    <div className="login-cadastro">
      <img src={img_cadastro.src}/>
      <div className="right-components">
        <TitleH3 text="Cadastre-se" />
        <div>
          <div className="name-container">
            <Input label="Nome *" type="text" name="name" placeholder=""/>
            <div className="surname">
              <Input label="" type="text" name="surname" placeholder="Sobrenome *"/>
            </div>
          </div>
          <Input label="Email address" type="email" name="email" placeholder=""/>
          <Input label="Password" type="password" name="password" placeholder=""/>
          <LargeButton text="CADASTRAR" />
        </div>
      </div>
      
    </div>
  )
}

export default Cadastro