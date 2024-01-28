import Header from "@/components/Header";
import CardPerfil from "@/components/CardPerfil";
import Input from "@/components/Input";
import ProjectArea from "@/components/ProjectArea";
import "../styles/descobrir.css";

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
            <ProjectArea emptyProj={true}/>
            <ProjectArea emptyProj={false}/>
            <ProjectArea emptyProj={false}/>
          </div>


          
        </div>

    </div>
  )
}

export default Descobrir