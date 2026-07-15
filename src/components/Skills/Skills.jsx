import "./skills.css";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiC ,
  SiMongodb,
  SiPython,
  SiCplusplus,
  SiSolidity,
  SiGit,
  SiMysql
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";





const Skills = () => {
  return (
    <section id="skills">
      <h4>TECH SKILLS</h4>
      <section>
        <FaHtml5 size={50} color="red"/>
        <FaCss3Alt size={50} color="#7705b0"/>
        <FaJava size={50} color="#09cfe1"/>
        <SiC size={50} color="#A8B9CC" />
        <SiCplusplus size={50} color="#00599C" />
        <SiPython size={50} color="#3776AB" />
        <SiJavascript size={50} color="#F7DF1E" />
        <SiReact size={50} color="#61DAFB" />
        <SiNodedotjs size={50} color="#5FA04E" />
        <SiExpress size={50} color="#FFFFFF" />
        <SiMongodb size={50} color="#47A248" />
        <SiSolidity size={50} color="#363636" />
        <SiGit size={50} color="#F05032" />
        <SiMysql size={50} color="#3232f0"/>
      </section>
    </section>
  )
}

export default Skills