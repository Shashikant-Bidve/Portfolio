import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import  ProjectCard  from "./ProjectCard.jsx";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <div className={styles.github}>
        Explore <a href="https://github.com/Shashikant-Bidve" style={{"textDecoration":"none","color":"#576cbc"}}>GitHub</a> for more projects!
      </div>
    </section>
  );
};

export default Projects;