import "./project.css";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocket ,
  SiGithub ,
  SiPython
} from "react-icons/si";
import { ExternalLink } from "lucide-react";






const Projects = () => {
  return (
    <section id="projects">
      <h4>MY PROJECTS</h4>
      <section>

        <div>
          <h3>CRYPTCHAT</h3>
          <h5 style={{ color : "white" }}>MERN Chat Application</h5>
          <p>Secure real-time end-to-end encrypted chat application featuring JWT authentication, private messaging, and emoji support.</p>
          <div>
            <SiReact size={35} color="#61DAFB" />
            <SiNodedotjs size={35} color="#5FA04E"/>
            <SiExpress size={35} color="#FFFFFF"/>
            <SiMongodb size={35} color="#47A248"/>
            <SiSocket size={35} color="#e48c07"/>
          </div>
          <div>
            <a target="blank" href="https://cryptchat-blond.vercel.app" className="live-demo">Live Demo<ExternalLink size={15}/></a>
            <a target="blank" href="https://github.com/AmalGeorge-lab/CRYPT-CHAT" className="git-hub">Github<SiGithub/></a>
          </div>
        </div>

        <div>
          <h3>THREATLENS</h3>
          <h5 style={{ color : "white" }}>SOC Analyst Platform</h5>
          <p>Secure real-time end-to-end encrypted chat application featuring JWT authentication, private messaging, and emoji support.</p>
          <div>
            <SiReact size={35} color="#61DAFB" />
            <SiNodedotjs size={35} color="#5FA04E"/>
            <SiExpress size={35} color="#FFFFFF"/>
            <SiMongodb size={35} color="#47A248"/>
            <SiPython size={35} color="#cd0b6c" />
          </div>
          <div>
            <a target="blank" href="https://threatlens-swart.vercel.app" className="live-demo">Live Demo<ExternalLink size={15}/></a>
            <a target="blank" href="https://github.com/AmalGeorge-lab/THREATLENS" className="git-hub">Github<SiGithub/></a>
          </div>
        </div>

      </section>
    </section>
  )
}

export default Projects;