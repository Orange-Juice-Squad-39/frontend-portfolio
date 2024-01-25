import Header from "@/components/Header";
import CardPerfil from "@/components/CardPerfil";
import "../styles/portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <Header/>
      <div className="portfolio-card">
        <CardPerfil/>
      </div>
    </div>
  )
}

export default Portfolio