'use client'
import { useState } from 'react';
import Header from "@/components/header";
import CardPerfil from "@/components/card_perfil.tsx";
import Input from "@/components/input";
import ButtonFirstProject from "@/components/button_add_first_project";
import CardProject from "@/components/card_project";
import project from "@/assets/images/img_projeto.png";
import perfil from "@/assets/images/perfil-image.png"; 
import "./style.css";
import AddOrEditProject from '@/components/modals/add_or_edit_project';

function Portfolio() { 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

            <ButtonFirstProject onClick={openModal}/>

            {isModalOpen && (
              <>
                <div className="overlay" onClick={closeModal}></div>
                <AddOrEditProject adding={true} onCancel={closeModal}/>
              </>
            )}
            
            {/* <CardProject
              projImg={project}
              perfilImg={perfil}
              name="Camila Soares"
              data="12/23"
              portfolio={true}
            />
            <CardProject
              projImg={project}
              perfilImg={perfil}
              name="Camila Soares"
              data="12/23"
              portfolio={true}
            />
            <CardProject
              projImg={project}
              perfilImg={perfil}
              name="Camila Soares"
              data="12/23"
              portfolio={true}
            /> */}
          </div>
        </div>

        <footer></footer>
    </div>
  )
}

export default Portfolio