"use client"
import { useState } from "react";
import ButtonFirstProject from "../button_add_first_project";
import "./style.css";
 
interface projAreaProps {
    emptyProj: boolean;
}

function ProjectArea({ emptyProj }: projAreaProps) {
    const [emptyProjects, setEmptyProjects] = useState(emptyProj);

    return (
        <div className={`project-area-container ${emptyProjects ? 'empty-bg' : 'non-empty-bg'}`}>
            {emptyProjects && (
                <ButtonFirstProject/>
            )}
        </div>
    )
}

export default ProjectArea