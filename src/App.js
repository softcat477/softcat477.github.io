import './App.css';
import localProjects from './projects.json'

import projectService from './projects'
import { useState, useEffect } from 'react';

const Navigation = () => {
  return (
    <>
    <nav>
      <img src="ugly-kitty.jpg" alt="Profile Picture" />
      <p className="headname">Wanye Lin</p>
      <ul>
        <li><a href="#home"> HOME</a></li>
        <li><a href="#project">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
    </>
  )
}

const Home = () => {
  return (
    <div className="home" id="home">
      <img src="ugly-kitty.jpg" alt="Profile" />
      <p className="namestart">
        Wanye Lin <br/>
        Software Engineer
      </p>
      <p className="nameabout">
        I code for anything.
      </p>
      <p className="nameabout">
        I am a software developer and mostly contribute to C++ projects. My work focuses on preserving and digitizing medieval music manuscripts, and I spend time contributing to music notation software.
      </p>
      <div className="socialicon">
        <a href="https://github.com/softcat477" target="_blank" rel="noreferrer noopener">
          <img src="https://img.icons8.com/dusk/64/000000/github.png"
        /></a>
        <a href="https://musescore.com/user/34453589" target="_blank" rel="noreferrer noopener"
          ><img src="https://img.icons8.com/dusk/64/000000/musescore.png"
        /></a>
      </div>
    </div>
  )
}

const Project = ({project}) => {
  const {title, description, link, bullets, skills} = project
  return (
    <div className='project' id='project'>
      <h4>{title} 
      {link !== undefined && <a href={link} target="_blank" rel="noreferrer noopener"><img className="project-link" src="https://img.icons8.com/material/24/null/external-link-squared.png"/></a>}
      
      {skills !== undefined && 
        skills.map(x => {
          return (
            <a key={`${title}-${x.text}`}className="program" target="_blank" rel="noreferrer noopener" href={x.link}><img src={x.icon} title={x.text}/></a>
          )
        })}
      </h4>
      
      <p>{description}</p>
      {bullets !== undefined && <ul>
        {bullets.map((x, idx) => {
          return (
            <li key={idx}>{x}</li>
          )
        })}
      </ul>}
      
      
    </div>
  )
}

const Grid = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const _projects = await projectService.getAll()
      setProjects(_projects)
    }

    fetchProjects().catch((err) => {
      console.error("Can't fetch projects: ", err)
      console.error("Use local projects.")
      setProjects(localProjects)
    })
  }, [])

  return (
    <div className='projects' id='projects'>
      <h1>PROJECTS</h1>
      <div className='grid' id='grid' >
        {projects.map(x => {
          return (
            <Project project={x} key={x.order}/>
          )
        })}
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>CONTACT</h1>
      <div className="contact-socialicon">
        <a href="https://github.com/softcat477" target="_blank" rel="noreferrer noopener">
          <img src="https://img.icons8.com/dusk/64/000000/github.png"
        /></a>
        <a href="https://musescore.com/user/34453589" target="_blank" rel="noreferrer noopener">
          <img src="https://img.icons8.com/dusk/64/000000/musescore.png" />
        </a>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Navigation />
      <div className="main" id="main">
        <Home />
        <Grid/>
        <Contact />
      </div>
    </>
  );
}

export default App;
