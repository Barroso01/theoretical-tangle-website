import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => (
    <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button onClick={() => window.location.href = project.link}>Learn More</button>
    </div>
);

export default ProjectCard;