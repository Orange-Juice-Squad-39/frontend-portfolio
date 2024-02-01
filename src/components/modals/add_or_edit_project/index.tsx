"use client"
import { useState } from "react";
import emptyImg from "@/assets/images/collections.svg";
import SmallButton from "@/components/small_button";
import Input from "@/components/input";
import TagsInput from "@/components/tags_input";
import "./style.css";

interface addEditProps {
    adding?: boolean;
}

function AddOrEditProject({ adding }: addEditProps) {
    const [label, setLabel] = useState('');
    const [placeholder, setPlaceholder] = useState('Descrição');
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    const handleFocus = () => {
    if (inputValue === '') {
        setLabel(placeholder);
        setPlaceholder('');
    }
    };

    const handleBlur = () => {
    if (inputValue === '') {
        setPlaceholder(label);
        setLabel('');
    }
    };

    return (
        <div className="add-project">
            <div className="add-project-container">
                <h5 className="add-project-h5">
                    {adding && (
                        <text>Adicionar projeto</text>
                    )}
                    {!adding && (
                        <text>Editar projeto</text>
                    )}
                </h5>
                <div className="add-project-content">
                    <div className="add-project-content-left">
                        <text className="subtitle1 content-left-text">
                            Selecione o conteúdo que você deseja fazer upload
                        </text>
                        <div className="add-project-img">
                            <button className="add-img-button">
                                <div className="button-content">
                                    <img src={emptyImg.src} className="empty-img"/>
                                    <div className="button-text">
                                        <text className="body2">
                                            Compartilhe seu talento com milhares de pessoas
                                        </text>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="add-project-content-right">
                        <Input
                            label=""
                            type="text"
                            name="title"
                            placeholder="Título"
                        />

                        {/* <Input
                            label=""
                            type="text"
                            name="tags"
                            placeholder="Tags"
                        /> */}

                        <TagsInput
                            label="" 
                            name="tags" 
                            placeholder="Tags"
                        />

                        <Input
                            label=""
                            type="url"
                            name="link"
                            placeholder="Link"
                        />
                        
                        <div className="description-container">
                            <textarea 
                                name="description" 
                                placeholder={placeholder}
                                value={inputValue}
                                onChange={handleInputChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                className="description-input"
                            />
                            <label className="description-label">{label}</label>
                        </div>
                    </div>
                </div>
                <div className="add-project-bottom-container">
                    <a href="" className="view-post-button subtitle1">Visualizar publicação</a>
                    <div className="bottom-buttons">
                        <SmallButton text="SALVAR" disabled={false}/>
                        <SmallButton text="CANCELAR" disabled={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddOrEditProject