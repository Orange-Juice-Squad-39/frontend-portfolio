"use client"
import { useState } from "react";
import close from "@/assets/images/close.svg";
import userImg from "@/assets/images/perfil-image.png";
import Tag from "@/components/Tag";
import postImg from "@/assets/images/Image.png";
import "./style.css";

function ViewPost() {
  const [avatar, setAvatar] = useState(userImg);
  const [userName, setUserName] = useState('Camila Soares');
  const [date, setDate] = useState('12/12');
  const [downloadLink, setDownloadLink] = useState('https://gumroad.com/products/wxCSL');

  return (
    <div className="view-post-container">
      <button className="close-button">
        <img src={close.src}/>
      </button>
      <div className="post-header">
        <div className="user-info">
          <img src={avatar.src} className="user-img"/>
          <div className="user-text">
            <text className="user-name subtitle1">{userName}</text>
            <text className="post-date subtitle1">{date}</text>
          </div>
        </div>
        <h5 className="post-title">Ecommerce One Page</h5>
        <div className="post-tags">
          <Tag text="UX"/>
          <Tag text="Web"/>
        </div>
      </div>
      <div className="post-img-container">
        <img src={postImg.src} className="post-img"/>
      </div>
      <div className="post-description">
        <text className="description-text body1">
          Temos o prazer de compartilhar com vocês uma variação da nosso primeiro recurso gratuito, Monoceros. É um modelo de uma página para mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e minimalista do nosso primeiro template de e-commerce.
        </text>
        <div className="download-container">
          <text className="download-title subtitle1">Download</text>
          <a 
            href={downloadLink} 
            target="_blank" 
            className="download-link body2"
          >
            {downloadLink}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ViewPost