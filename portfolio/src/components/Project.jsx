import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { GoArrowUpRight} from "react-icons/go";

const Project = ({img, url, github, title, build, description}) => {
  const ROTATION_RANGE = 22;
  const HALF_ROTATION_RANGE = 22 / 2;
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform
      }}
      className="flex flex-col py-4 rounded-md shadow-[1px_4px_7px_0px_rgb(0,0,0,0.2)]
                md:py-5 lg:h-[22rem] lg:flex-row lg:justify-center lg:gap-5">
                
      <div className="flex justify-center lg:items-center ">
        <img className="w-full md:max-w-[30rem]
                       lg:p-0 lg:max-h-full lg:pl-5" 
                      src={img} 
                      alt="" />
      </div>
      <div className="flex flex-col justify-center px-6 lg:w-2/3 lg:max-w-md">
        <h3 className="font-bold py-3">{title}</h3>
        <div className="text-[13px] py-3">{description}</div>
        <div className="text-emerald-600 text-[12px] pb-2">{build}</div>
        <div className="flex justify-between text-[13px] text-emerald-600 ">
          <a className="flex hover:scale-105 transition duration-100 ease-in-out" href={github} target="_blank">View source code <GoArrowUpRight/></a>
          <a className="flex hover:scale-105 transition duration-100 ease-in-out" href={url} target="_blank">View website<GoArrowUpRight/></a>
        </div>
      </div>
    </motion.div>
  )
}

export default Project;