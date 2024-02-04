"use client"
import { useState } from "react";
import perfilImg from "@/assets/images/perfil-image.png";
import addPhoto from "@/assets/images/addPhoto.svg";
import perfil from "@/assets/images/perfil.svg";
import SmallButton from "../small_button";
import "./style.css";

function CardPerfil() {
    const [userName, setUserName] = useState('Camila Soares');
    const [country, setCountry] = useState('Brasil');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        
        if (selectedFile) {
            // Lê o arquivo e converte para Data URL
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div className="card-perfil-container">

            <label>
                <div className="button-content">
                    <div className="img-container">
                        {selectedImage ? (
                            <img src={selectedImage} className="card-perfil-img" alt="Selected" />
                        ) : (
                            <div className="perfil-container">
                                <img src={perfil.src} className="card-perfil-img" alt="Empty" />
                                <img src={addPhoto.src} className="card-perfil-hover" alt="Empty" />
                            </div>
                            
                        )}
                    </div>
                    {!selectedImage && (
                        <input type="hidden"/>
                    )}
                </div>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </label>

            <div className="card-info-container">
                <div className="card-text-container">
                    <h5 className="card-h5">{userName}</h5>
                    <text className="subtitle1 card-country">{country}</text>
                </div>
                <SmallButton disabled={true} text="ADICIONAR PROJETO"/>
            </div>
        </div>
    )
}

export default CardPerfil