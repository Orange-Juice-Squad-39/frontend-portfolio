import Header from "@/components/header";
import Input from "@/components/input";
import modelo1 from "@/assets/images/modelo1.png"
import modelo2 from "@/assets/images/modelo2.png";
import modelo3 from "@/assets/images/modelo3.png";
import modelo4 from "@/assets/images/modelo4.png";
import perfil1 from "@/assets/images/perfil-modelo1.png";
import perfil2 from "@/assets/images/perfil-modelo2.png";
import perfil3 from "@/assets/images/perfil-modelo3.png";
import perfil4 from "@/assets/images/perfil-modelo4.png";
import "./style.css";

function Descobrir() {

  return (
    <div className="descobrir-container">
      <Header/>
        
        <div className="descobrir-bottom">

        <h4 className="descobrir-h4">Junte-se à comunidade de inovação, inspiração<br/>e descobertas, transformando experiências em conexões<br/>inesquecíveis</h4>
          <div className="descobrir-search">
      
            <div className="descobrir-input">
            <Input label="Buscar tags" type="email" name="email" placeholder=""/>
            </div>
          </div>
          <div className="descobrir-projects">
          <div className="modelo">
            <div className="modelo-img">
            <img src={modelo1.src}/>
            </div>
            <div className="modelo-info">
              <img src={perfil1.src}/>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>

          <div className="modelo">
            <div className="modelo-img">
            <img src={modelo2.src}/>
            </div>
            <div className="modelo-info">
              <img src={perfil2.src}/>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>

          <div className="modelo">
            <div className="modelo-img">
            <img src={modelo3.src}/>
            </div>
            <div className="modelo-info">
              <img src={perfil3.src}/>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>

          <div className="modelo">
            <div className="modelo-img">
            <img src={modelo4.src}/>
            </div>
            <div className="modelo-info">
              <img src={perfil4.src}/>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
          </div>


          
        </div>

    </div>
  )
}

export default Descobrir