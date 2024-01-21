import {
  faBars,
  faGlobe,
  faHouse,
  faMagnifyingGlass,
  faMobile,
  faMobileAlt,
  faRemove,
  faSearch,
  faSignal,
  faTrafficLight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { faAndroid, faAppStore, faAppStoreIos, faApple, faGolang, faLaravel, faNode, faNodeJs, faReact, faWeebly } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }
  const goToMobileDev = () => {
    navigate("/class/mobiledev")
  }
  const goToWebDev = () => {
    navigate("/class/webdev")
  }
  const goToQa= () => {
    navigate("/class/qaengineer")
  }
  const goToSoftware = () => {
    navigate("/class/softwareengineer")
  }

  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <FontAwesomeIcon
            icon={faBars}
            className="icon-bars"
            onClick={showSidebar}
          />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <FontAwesomeIcon icon={faRemove} className="icon-close" />
              <div className="parent-title">
                <h3 className="title-sidebar">AP Academy</h3>
              </div>
            </li>
            <div className="parent-isi1" onClick={() => goToHome()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon className="icon-kelas" icon={faHouse} /><span className="program-name">Beranda</span>
              </h4>
            </div>

            <div className="parent-isi2" onClick={() => goToMobileDev()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon className="icon-kelas" icon={faMobileAlt} /><span className="program-name">Mobile Developer</span>
              </h4>
            </div>

            <div className="parent-isi3" onClick={() => goToWebDev()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon className="icon-kelas" icon={faGlobe} /><span className="program-name">Web Developer</span>
              </h4>
            </div>

            <div className="parent-isi4" onClick={() => goToQa()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon className="icon-kelas" icon={faSearch} /><span className="program-name">QA Engineer</span>
              </h4>
            </div>

            <div className="parent-isi5" onClick={() => goToSoftware()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon className="icon-kelas" icon={faAndroid} /><span className="program-name">Software Engineer</span>
              </h4>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default Sidebar;
