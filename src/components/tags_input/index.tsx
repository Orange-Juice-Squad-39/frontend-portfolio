"use client"
import { useState, useEffect } from "react";
import Tag from "../tag";
import "./style.css";

interface tagsInputProps {
    label: string;
    name: string;
    placeholder: string;
}

function TagsInput({ label, name, placeholder }: tagsInputProps) {
    const [tags, setTags] = useState<string[]>([]);
    const [lbl, setLbl] = useState(label);
    const [ph, setPh] = useState(`${placeholder} (aperte enter para adicionar)`);
    const [tagInputValue, setTagInputValue] = useState("");

    const handleFocus = () => {
        if (tagInputValue === "") {
            setLbl(placeholder);
            setPh("");
        }
    };

    useEffect(() => {
        if (tags.length <= 0) {
            setPh(`${placeholder} (aperte enter para adicionar)`);
            setLbl("");
        }
    }, [tags]);

    const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTagInputValue(e.target.value);
    };

    const handleTagInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && tagInputValue.trim() !== "") {
            setTags([...tags, tagInputValue.trim()]);
            setTagInputValue("");
        }
    };
    
    const handleRemoveTag = (index: number) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    return (
        <div className="tags-input-container">
            {lbl !== "" && (
                <div className="tags-label-container">
                    <label>{lbl}</label>
                </div>
            )}

            <div className="tags-input-content">
                {tags.map((tag, index) => (
                    <div key={index} className="tag-add">
                        <Tag text={tag}/>
                        <button onClick={() => handleRemoveTag(index)} className="delete-tag">&times;</button>
                    </div>
                ))}
                <input
                    type="text"
                    name={name}
                    placeholder={ph}
                    value={tagInputValue}
                    onChange={handleTagInputChange}
                    onKeyDown={handleTagInputKeyPress}
                    onFocus={handleFocus}
                    className="tags-input-text"
                />
            </div>
        </div>
    )
}

export default TagsInput
