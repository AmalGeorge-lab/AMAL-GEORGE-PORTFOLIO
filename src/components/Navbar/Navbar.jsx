import {Download} from "lucide-react";
import "./navbar.css";
import { useState } from "react";



const navLinks = [
  {
    id : 1 ,
    link : "home"
  } ,
  {
    id : 2 ,
    link : "about" ,
  } ,
  {
    id : 3 ,
    link : "skills"
  } ,
  {
    id : 4 ,
    link : "projects"
  } ,
  {
    id : 5 ,
    link : "contact"
  }
]




const Navbar = () => {

  const [link , setLink] = useState(null);

  return (
    <header>
      <div className="left-section">
        <img src="/Logo.png" alt="Logo"/>
        <div>
          <h3>AMAL GEORGE</h3>
          <p>Developer | Cyber Security Specialist</p>
        </div>
      </div>
      <nav>
        {navLinks.map((a)=>{
          return (
            <a 
              key={a.id} 
              href={`#${a.link}`} 
              onClick={()=>setLink(a.link)}
              className={link === a.link ? "selected" : ""}
            >{a.link.toUpperCase()}</a>
          )
        })}
      </nav>
      <a href="/files/AMAL_GEORGE.pdf" download="AMAL_GEORGE.pdf" className="download"><Download size={15} color="rgb(0, 149, 255)"/>DOWNLOAD CV</a>
    </header>
  )
}

export default Navbar;