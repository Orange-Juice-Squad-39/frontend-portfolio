import Header from "@/components/Header";
import CardPerfil from "@/components/CardPerfil";
import Input from "@/components/Input";
import ProjectArea from "@/components/ProjectArea";
import "../styles/portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <Header/>
        
        <div className="portfolio-bottom">

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
            <ProjectArea emptyProj={false}/>
            <ProjectArea emptyProj={false}/>
          </div>
        </div>

    </div>
  )
}

export default Portfolio