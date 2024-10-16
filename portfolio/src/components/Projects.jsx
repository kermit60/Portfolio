import Project from './Project';
import { projects } from '../data';

const Projects = () => {
  return (
    <div id='projects' className="px-2 sm:px-7 md:px-20 xl:px-64">
      <h3 className="text-lg pb-5 font-semibold">Some recent projects ↓</h3>
      <div className='flex flex-col gap-24'>
        {projects.map(project => {
          const {id, img, url, github, title, build, description} = project;
          return <Project key={id} img={img} github={github} url={url} title={title} build={build} description={description}/>
        })}
      </div>
    </div>
  )
}

export default Projects;