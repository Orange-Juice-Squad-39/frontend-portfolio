import close from "../assets/images/close.svg";
import userImg from "../assets/images/perfil-image.png";
import Tag from "./Tag";
import "../styles/view-post.css";

function ViewPost() {
  return (
    <div className="view-post-container">
      <button className="close-button">
        <img src={close.src}/>
      </button>
      <div className="post-header">
        <div className="user-info">
          <img src={userImg.src} className="user-img"/>
          <div className="user-text">
            <text className="user-name subtitle1">Camila Soares</text>
            <text className="post-date subtitle1">12/12</text>
          </div>
        </div>
        <h5 className="post-title">Ecommerce One Page</h5>
        <div className="post-tags">
          <Tag text="UX"/>
          <Tag text="Web"/>
        </div>
      </div>
    </div>
  )
}

export default ViewPost