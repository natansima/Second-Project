import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <a
        className="Git"
        href="https://github.com/natansima/Second-Project"
        target="_blank"
      >
        Github Repository
      </a>
      <Link to="/about" className="about-link">
        About
      </Link>
    </div>
  );
}

export default Footer;
