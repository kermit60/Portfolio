import { GoArrowUpRight} from "react-icons/go";

const Project = ({img, url, github, title, build, description}) => {
  return (
    <div className="flex h-[15rem] rounded-md shadow-[1px_4px_7px_0px_rgb(0,0,0,0.2)] ">
      <img className="w-1/2 rounded-l-lg bo" src={img} alt="" />
      <div className="flex flex-col justify-center px-6">
        <h3 className="font-bold py-3">{title}</h3>
        <div className="text-[13px] py-3">{description}</div>
        <div className="text-emerald-600 text-[12px] pb-2">{build}</div>
        <div className="flex justify-between text-[13px] text-emerald-600 ">
          <a className="flex hover:scale-105 transition duration-100 ease-in-out" href={github}>View source code <GoArrowUpRight/></a>
          <a className="flex hover:scale-105 transition duration-100 ease-in-out" href={url}>View website<GoArrowUpRight/></a>
        </div>
      </div>
    </div>
  )
}

export default Project;