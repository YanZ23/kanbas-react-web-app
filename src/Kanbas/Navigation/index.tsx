import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelopeOpenText, FaRegClock,
  FaQuestionCircle,
  FaDesktop,
  FaArrowAltCircleRight, } from "react-icons/fa";

function KanbasNavigation() {
  const { pathname } = useLocation();
  const accountRoute = "/Kanbas/Account/Profile/screen";
  const isAccountActive = pathname.includes("Account");
  const links = [
    { 
      label: "Account",   
      icon: <FaRegUserCircle className={`fs-2 ${isAccountActive ? '' : 'icon-account'}`} />, 
    },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> , route: "#"},
    { label: "Inbox",     icon: <FaEnvelopeOpenText className="fs-2" />, route: "#" },
    { label: "History",   icon: <FaRegClock className="fs-2" />, route: "#" },
    { label: "Studio",    icon: <FaDesktop className="fs-2" />, route: "#" },
    { label: "Commons",   icon: <FaArrowAltCircleRight className="fs-2" />, route: "#" },
    { label: "Help",      icon: <FaQuestionCircle className="fs-2" />, route: "#" },
  ];
  
  return (
    <ul className="wd-kanbas-navigation">
      <li>
        <a href="http://northeastern.edu">
          <img src="../../images/neu.jpg" alt="Northeastern University Logo" />
        </a>
      </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} <br /> {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;