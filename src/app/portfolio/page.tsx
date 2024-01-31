import Header from "@/components/header";
import CardPerfil from "@/components/card_perfil.tsx";
import Input from "@/components/input";
import ProjectArea from "@/components/project_area";
import "./style.css";

function Portfolio() { 
  return (
    <div className="portfolio-container">
      <Header/>
        <div className="portfolio-content">
          <div className="portfolio-card">
            <CardPerfil/>
          </div>
          <div className="portfolio-search">
            <h6 className="portfolio-h6">Meus projetos</h6>
            <div className="portfolio-input">
              <Input label="" type="text" name="tags" placeholder="Buscar tags"/>
            </div>
          </div>
          <div className="portfolio-projects">
            <ProjectArea emptyProj={true}/>
            {/* <ProjectArea emptyProj={false}/>
            <ProjectArea emptyProj={false}/> */}
          </div>
        </div>
    </div>
  )
}

export default Portfolio