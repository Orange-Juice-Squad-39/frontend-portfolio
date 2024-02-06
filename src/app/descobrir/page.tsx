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
import ViewPost from "@/components/modals/view_post";

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
  const [isViewPostModalOpen, setIsViewPostModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openViewPostModal = (project: Project) => {
    setSelectedProject(project);
    setIsViewPostModalOpen(true);
  };  

  const closeViewPostModal = () => {
    setIsViewPostModalOpen(false);
  };

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
            <Input label="Buscar tags" type="email" name="email" placeholder="" onChange={() => {}}/>
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
                onClick={() => openViewPostModal(project)}
              />
            ))
            ): (
              <p>Sem projetos por enquanto :\</p>
            )}
          </div>

          {isViewPostModalOpen && (
            <>
              <div className="overlay" onClick={closeViewPostModal}></div>
              <ViewPost 
                userImg={selectedProject?.user.urlImageUser || ''}
                username={`${selectedProject?.user.name} ${selectedProject?.user.lastName}` || ''}
                data={formatISO8601ToMMYY(selectedProject?.createdAt) || ''}
                title={selectedProject?.title || ''}
                tags={stringToList(selectedProject?.tags) || []}
                projImg={selectedProject?.urlImageProj || ''}
                description={selectedProject?.description || ''}
                link={selectedProject?.link || ''}
                closeModal={closeViewPostModal}
              />
            </>
          )}
          
        </div>

    </div>
  )
}

export default Descobrir
