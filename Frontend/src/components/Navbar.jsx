import {Link, useLocation, useNavigate} from "react-router-dom"

function Nav(){
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id, event) => {
    event.preventDefault();

    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };
    return(
        <>
            <ul className="navbar">
                <li><a href="#home" onClick={(e)=>scrollToSection("home",e)}>Home</a></li>
                <li><a href="#about"onClick={(e)=>scrollToSection("about",e)}>About Us</a></li>
                <li><Link to="/alumni">Our Alumni</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
        </>
    )
}

export default Nav