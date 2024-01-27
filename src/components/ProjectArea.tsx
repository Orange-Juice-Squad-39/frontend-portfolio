"use client"
import { useState } from "react";
import ButtonFirstProject from "./ButtonFirstProject";
import "../styles/project-area.css";
 
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