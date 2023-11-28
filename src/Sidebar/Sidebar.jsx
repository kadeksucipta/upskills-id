import {
  faBars,
  faHouse,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { faAndroid, faAppStoreIos, faApple, faGolang, faLaravel, faNode, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/Home")
  }
  const goToKedokteran = () => {
    navigate("/Kedokteran")
  }
  const goToMasukPtn = () => {
    navigate("/MasukPtn")
  }
  const goToTeacher = () => {
    navigate("/Teacher")
  }
  const goToAlumni = () => {
    navigate("/Alumni")
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
                <FontAwesomeIcon className="icon-kelas" icon={faHouse} />Beranda
              </h4>
            </div>

            <div className="parent-isi2" onClick={() => goToKedokteran()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon className="icon-kelas" icon={faAndroid} />Android Developer
              </h4>
            </div>

            <div className="parent-isi3" onClick={() => goToMasukPtn()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon className="icon-kelas" icon={faReact} />React Developer
              </h4>
            </div>

            <div className="parent-isi4" onClick={() => goToTeacher()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon className="icon-kelas" icon={faLaravel} />Laravel Developer
              </h4>
            </div>

            <div className="parent-isi5" onClick={() => goToAlumni()}>
              <h4 className="isi-sidebar">
                <FontAwesomeIcon className="icon-kelas" icon={faAppStoreIos} />Ios Developer
              </h4>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default Sidebar;
