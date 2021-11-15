import React, { Component } from "react";
import ProjectCard from '../components/ProjectCard'
import projects from '../projects.json';

class Projects extends Component {
    state = {
        projects
    };

    render() {
        return (
            <div>
            <h1 className='text-center p-2'>Projects</h1> 
                {this.state.projects.map(project => (
                    <ProjectCard
                    id={project.id}
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    github={project.github}
                    url={project.url}
                    about={project.about}
                    />
                ))}
                <br></br>
                <br></br>
                <br></br><br></br><br></br><br></br>
            </div>
        );
    }
}

export default Projects;