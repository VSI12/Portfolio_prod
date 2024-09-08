import React, { useState, useEffect } from 'react'
import { projectsData } from './Data'
import { projectsNav } from './Data'
import Workitems from './Workitems'

const Works = () => {
    const [item, setItem] = useState({name: 'all'})
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if(item.name === 'all'){
            setProjects(projectsData)
        }else{
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            })
            setProjects(newProjects);
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase()})
        setActive(index)
    }
  return (
    <div>
        <div className="work__filters">
        {projectsNav.map((item, index) => {
            return (
                <div className="work__filters">
                    <span onClick={(e) => handleClick(e, index)} className={`${active === index ? 'active-work' : ''} work__item`} key={index}>
                        {item.name}
                    </span>        
                </div>
            )
        })}
    </div>

    <div className="work__container container grid">
        {projects.map((item, index) => {
            return <Workitems item={item} key ={item.id} />
        })}
    </div>
    </div>
  )
}

export default Works