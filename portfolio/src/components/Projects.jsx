import Project from './Project';
import { projects } from '../data';

const Projects = () => {
  return (
    <div className="px-9">
      <h3 className="text pb-5 font-semibold">Some recent projects ↓</h3>
      <div className='flex flex-col gap-12'>
        {projects.map(project => {
          const {id, img, url, github, title, build, description} = project;
          return <Project key={id} img={img} github={github} url={url} title={title} build={build} description={description}/>
        })}
      </div>
    </div>
  )
}

export default Projects;