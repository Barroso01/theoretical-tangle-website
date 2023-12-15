import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => (
    <div className="project-card">
        <div className="project-header">
            <img 
                src={project.avatar || "https://via.placeholder.com/40x40"} 
                alt="Project Avatar" 
                className="project-avatar" 
            />
            <div className="project-title">{project.title}</div>
        </div>
        <img 
            src={project.image || "https://via.placeholder.com/300x300"} 
            alt="Project" 
            className="project-image"
        />
        <div className="project-description">{project.description}</div>
    </div>
);

export default ProjectCard;
