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
import ViewPost from '@/components/modals/view_post';
import DeleteProject from '@/components/modals/delete_project';
import SuccessModal from '@/components/modals/success';

function Portfolio() { 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewPostModalOpen, setIsViewPostModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteSucessModalOpen, setIsDeleteSucessModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openViewPostModal = () => {
    setIsViewPostModalOpen(true);
    closeModal();
  };

  const closeViewPostModal = () => {
    setIsViewPostModalOpen(false);
    openModal();
  };

  const openDeleteSucessModal = () => {
    setIsDeleteSucessModalOpen(true);
  };

  const closeDeleteSucessModal = () => {
    setIsDeleteSucessModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const exclusionProject = () => {
    closeDeleteModal();

    //lógica para excluir um projeto

    openDeleteSucessModal();
  }

  const editProject = () => {
    closeDeleteModal()
    //lógica para excluir um projeto
  }

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
              <Input 
                label="" 
                type="text" 
                name="tags" 
                placeholder="Buscar tags" 
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="portfolio-projects">

            {isModalOpen && (
              <>
                <div className="overlay" onClick={closeModal}></div>
                <AddOrEditProject 
                  adding={true} 
                  onCancel={closeModal} 
                  openViewPost={openViewPostModal}
                />
              </>
            )}

            {isViewPostModalOpen && (
              <>
                <div className="overlay" onClick={closeViewPostModal}></div>
                <ViewPost closeModal={closeViewPostModal}/>
              </>
            )}

            {isDeleteModalOpen && (
              <>
                <div className="overlay" onClick={closeDeleteModal}></div>
                <DeleteProject exclusion={exclusionProject} cancel={closeDeleteModal}/>
              </>
            )}

            {isDeleteSucessModalOpen && (
              <>
                <div className="overlay" onClick={closeDeleteSucessModal}></div>
                <SuccessModal text='Projeto deletado' onClick={closeDeleteSucessModal}/>
              </>
            )}

            <ButtonFirstProject onClick={openModal}/>
            
            {/* <CardProject
              projImg={project.src}
              perfilImg={perfil.src}
              name="Camila Soares"
              data="12/23"
              portfolio={true}
              edit={() => {}}
              exclusion={openDeleteModal}
            /> */}
            
          </div>
        </div>

        <footer></footer>
    </div>
  )
}

export default Portfolio;