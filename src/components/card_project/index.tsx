"use client";
import { useState } from "react";
import pjtImg from "@/assets/images/img_projeto.png";
import pflImg from "@/assets/images/perfil-image.png";
import Tag from "@/components/tag";
import MenuButton from "@/components/menu_button";
import "./style.css";
import { StaticImageData } from "next/image";

interface cardProjProps {
  projImg: string;
  perfilImg?: string;
  name: string;
  data: string;
  tags: string[];
  portfolio: boolean;
  edit?: () => void;
  exclusion?: () => void;
}

function CardProject({
  projImg,
  perfilImg,
  name,
  data,
  tags,
  portfolio,
  edit,
  exclusion,
}: cardProjProps) {
  const [projectImg, setProjectImg] = useState(
    projImg !== undefined ? projImg : pjtImg
  );
  const [userImg, setUserImg] = useState(
    perfilImg !== undefined ? perfilImg : pflImg
  );
  const [userName, setUserName] = useState(
    name !== "" ? name : "Camila Soares"
  );
  const [date, setDate] = useState(data !== "" ? data : "12/23");

  return (
    <div className="card-project-container">
      {portfolio && (
        <div className="menu-button-container">
          <MenuButton edit={edit} exclusion={exclusion} />
        </div>
      )}
      <div className="project-img">
        <img src={projectImg} />
      </div>
      <div className="card-project-info">
        <div className="user-info">
          <img src={userImg} />
          <p>
            {userName} • {date}
          </p>
        </div>
        {tags && tags.length > 0 && (
          <div className="tags-container">
            {tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CardProject;
