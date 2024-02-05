"use client";
import Header from "@/components/header";  
import Input from "@/components/input";
// import modelo1 from "@/assets/images/modelo1.png"
// import modelo2 from "@/assets/images/modelo2.png";
// import modelo3 from "@/assets/images/modelo3.png";
// import modelo4 from "@/assets/images/modelo4.png";
// import perfil1 from "@/assets/images/perfil-modelo1.png";
// import perfil2 from "@/assets/images/perfil-modelo2.png";
// import perfil3 from "@/assets/images/perfil-modelo3.png";
// import perfil4 from "@/assets/images/perfil-modelo4.png";
// import Tag from "@/components/tag";
import CardProject from "@/components/card_project";
import "./style.css";
import axios from "axios";
import apiConfig from "@/utils/api.config";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function Descobrir() {
  const [projects, setProjects] = useState([]);
  const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  const decodedData = accessToken ? jwtDecode(accessToken) : null;

  useEffect(() => {
    const getProjectsByDiscovery = async () => {
      console.log(projects)
      try {
        const response = await axios.get(`${apiConfig.baseURL}/projects/discovery-projects`, {
          
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0ZjAzYmMwNy02ZTIxLTQyZDUtYTMzNS1hNTgxY2EzOTA0ZWEiLCJlbWFpbCI6ImV2ZXJ0b25AZW1haWwuY29tIiwibmFtZSI6IkV2ZXJ0b24iLCJsYXN0TmFtZSI6IkRpYXMiLCJpYXQiOjE3MDcwOTY1MjUsImV4cCI6MTcwNzEwMzcyNX0.tCGyskr3hCFSk3u7WvIIulGtwQ0qsWMbRtTvxagJL84`
          }
          
        });
        setProjects(response.data);

      } catch (err) {
        console.error('Erro ao obter projetos:', err);

      }
    };

    getProjectsByDiscovery();

  }, []);

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
            {projects.length > 0 ? (projects.map((project, index) => (
              <CardProject 
              key={index}
              projImg={project.urlImageProj} 
              perfilImg={project.user.urlImageUser} 
              name={project.user.name}
              data="02/24" 
              portfolio={false}
            />
            ))
            ): (
              <p>Sem projetos por enquanto :\</p>
            )}
            {/* <CardProject 
              projImg={modelo1} 
              perfilImg={perfil1} 
              name="Bianca Martin" 
              data="02/24" 
              portfolio={false}
            />
            <CardProject 
              projImg={modelo2} 
              perfilImg={perfil2} 
              name="Enzo Gabriel" 
              data="12/23" 
              portfolio={false}
            />
            <CardProject 
              projImg={modelo3} 
              perfilImg={perfil3} 
              name="Alice Alexandra" 
              data="12/23" 
              portfolio={false}
            />
            <CardProject 
              projImg={modelo4} 
              perfilImg={perfil4} 
              name="Carolina Valentim" 
              data="12/23" 
              portfolio={false}
            /> */}
          </div>
          
        </div>

    </div>
  )
}

export default Descobrir