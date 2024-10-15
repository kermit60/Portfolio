import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div id="contact" className="flex flex-col items-center gap-10 px-9 py-44">
      <div className="text-7xl text-transparent bg-[length:170%] font-extrabold bg-custom-gradient name-title bg-clip-text">Let's Connect</div>
      <div className="flex gap-7">
        <a href="https://github.com/kermit60" target="_blank"><FaGithub className="size-10"/></a>
        <a href="https://www.linkedin.com/in/kermitliu02l98/" target="_blank"><FaLinkedin className="size-10"/></a>
        <a href="mailto:k63liu@uwaterloo.ca" target="_blank"><MdEmail className="size-10"/></a>
      </div>
    </div>
  )
}

export default Footer;