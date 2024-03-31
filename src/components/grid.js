import localProjects from '../data/projects.json'
import projectService from '../utils/projects'
import { useState, useEffect } from 'react';

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

export default Grid;