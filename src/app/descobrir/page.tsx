"use client";
import Header from "@/components/header";  
import Input from "@/components/input";
import CardProject from "@/components/card_project";
import "./style.css";
import axios from "axios";
import apiConfig from "@/utils/api.config";
import { useEffect, useState } from "react";
import formatISO8601ToMMYY from "@/utils/date.utils";
import { stringToList } from "@/utils/tag.utils";

interface Project {
  urlImageProj: string;
  createdAt: string;
  user: {
    name: string;
    lastName: string;
    urlImageUser: string;
  },
  tags: string;
}

function Descobrir() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsSearch, setProjectsSearch] = useState<Project[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProjectsByDiscovery = async () => {
      console.log(projects)
      try {
        const response = await axios.get(`${apiConfig.baseURL}/projects/discovery`, {
          
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
          
        });
        setProjects(response.data);
        console.log(projects);

      } catch (error) {
        console.error('Erro ao obter projetos:', error);

      }
    };

    getProjectsByDiscovery();

  }, []);

  const handleSearch = async (value: string) => {
    setSearch(value);

    try {
      const response = await axios.get(`${apiConfig.baseURL}/projects/search/${search}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setProjectsSearch(response.data);
    } catch (error) {
      console.error('Erro ao pesquisar projetos');
    }
  };

  return (
    <div className="descobrir-container">
      <Header/>
        
        <div className="descobrir-bottom">

          <h4 className="descobrir-h4">Junte-se à comunidade de inovação, inspiração<br/>e descobertas, transformando experiências em conexões<br/>inesquecíveis</h4>
          
          <div className="descobrir-search">
            <div className="descobrir-input">
            <Input 
            label="Buscar tags" 
            type="email" 
            name="email" 
            placeholder="" 
            onChange={handleSearch}
            onKeyPress={() => {}}/>
            </div>
          </div>

          <div className="descobrir-projects">
            {projects.length > 0 ? (projects.map((project, index) => (
              <CardProject 
              key={index}
              projImg={project.urlImageProj} 
              perfilImg={project.user.urlImageUser} 
              name={`${project.user.name} ${project.user.lastName}`}
              data={formatISO8601ToMMYY(project.createdAt)} 
              tags={stringToList(project.tags)}
              portfolio={false}
            />
            ))
            ): (
              <p>Sem projetos por enquanto :\</p>
            )}
          </div>
          
        </div>

    </div>
  )
}

export default Descobrir
