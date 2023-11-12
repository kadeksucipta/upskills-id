import React from "react";
import "./Navbar2.css";
import logo from "../asset/APA.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faHome, faListDots, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Navbar2 = () => {
  const handleBtn = () => {
    Swal.fire({
      title: "Halo Pengguna",
      text: "Fitur Kami Sedang dalam pembangunan...",
      icon: "warning"
    });
  }

  return (
    <React.Fragment>
      <div className="parent-nav">
        <div className="nav-header">
          <ul className="isi-nav">
            <li>
              <img className="logo-header" src={logo} alt="" />
            </li>
            <li><span><FontAwesomeIcon className="all-icon-nav" icon={faHome} /></span> Home</li>
            <li><span><FontAwesomeIcon className="all-icon-nav" icon={faPeopleGroup} /></span> Kelas</li>
            <li><span><FontAwesomeIcon className="all-icon-nav" icon={faCode} /></span> Program</li>
            <li><span><FontAwesomeIcon className="all-icon-nav" icon={faListDots} /></span> Lainnya</li>
            <div className="parent-btn">
              <button className="btn-masuk" onClick={() => handleBtn()}>Masuk</button>
              <button className="btn-daftar" onClick={() => handleBtn()}>Daftar</button>
            </div>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar2;
