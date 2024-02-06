"use client"
import { useState } from "react";
import close from "@/assets/images/close.svg";
import userImg from "@/assets/images/perfil-image.png";
import Tag from "@/components/tag";
import postImg from "@/assets/images/Image.png";
import "./style.css"; 

interface viewPostProps {
  userImg: string;
  username: string;
  data: string;
  title: string;
  tags: string[];
  projImg: string;
  description: string;
  link: string;
  closeModal: () => void; 
}

function ViewPost({ 
  userImg,
  username, 
  data, 
  title, 
  tags, 
  projImg, 
  description, 
  link, 
  closeModal 
}: viewPostProps) {
  const [avatar, setAvatar] = useState(userImg);
  const [userName, setUserName] = useState(username);
  const [date, setDate] = useState(data);
  const [downloadLink, setDownloadLink] = useState(link);

  return (
    <div className="view-post-container">
      <button className="close-button" onClick={closeModal}>
        <img src={close.src}/>
      </button>

      <div className="post-body-container">
      
        <div className="user-info"> {/* ELEMENTO 01 */}
          <img src={avatar} className="user-img"/>
          <div className="user-text">
            <text className="user-name subtitle1">{userName}</text>
            <text className="post-date subtitle1">{date}</text>
          </div>
        </div>

        <h5 className="post-title">{title}</h5> {/* ELEMENTO 02 */}

        <div className="post-tags">  {/* ELEMENTO 03 */}
          {tags && tags.length > 0 && (
            <div className="tags-container">
              {tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </div>
          )}
        </div>


        <div className="post-img-container">  {/* ELEMENTO 04 */}
          <img src={projImg} className="post-img"/>
        </div>


        <div className="post-description"> {/* ELEMENTO 05 */}
          <text className="description-text body1">{description}</text>
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
    </div>
  )
}

export default ViewPost