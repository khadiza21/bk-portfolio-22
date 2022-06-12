import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);
    return (
        <div>
            <h2 className="fw-bold text-center mt-5 pt-5">My Recent Projects</h2>
            <div className=" container projects-container my-5 pb-5">
                {projects.map((project) => (
                    <Project key={project.id} project={project}></Project>
                ))}</div>

        </div>
    );
};

export default Projects;