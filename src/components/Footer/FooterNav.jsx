import "./footer.css";
import {SiGithub} from "react-icons/si";
import {FaLinkedin , FaPhone} from "react-icons/fa6";



const FooterNav = () => {
  return (
    <section className="footer">

      <div>
        <h3>CONNECT WITH ME <span style={{ color : "violet" }}>( <FaPhone size={12}/> : 9074566506 )</span></h3>
        <div>
          <a target="blank" href="https://github.com/AmalGeorge-lab"><SiGithub size={15} color="white"/></a>
          <a target="blank" href="https://www.linkedin.com/in/amalgeorge-securedev"><FaLinkedin size={17} color="rgb(9, 199, 209)"/></a>
        </div>
      </div>

      <div>
        <h4 style={{ color : "white" }}>Let's Build Together</h4>
        <p style={{ color : "gray" }}>Open to existing oppurtunities and collaborations.</p>
      </div>

    </section>
  )
}

export default FooterNav