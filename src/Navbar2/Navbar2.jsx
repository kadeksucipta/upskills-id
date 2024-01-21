import React, { useState } from "react";
import "./Navbar2.css";
import logoapa from "../asset/UPSKILLS.png"
import { useNavigate } from "react-router-dom";

export default function App() {

  const dispatch = useNavigate()
  const navigate = useNavigate()

  const [show, setShow] = useState(true);

  const goToLogin = () => {
    navigate("/Login");
  };

  const goToDaftar = () => {
    navigate("/Daftar");
  };

  const goToKelas = () => {
    navigate("/Kelas");
  };
  const goToProgram = () => {
    navigate("/Program");
  };


  return (
    <div className="App">
      <nav className="navbar-nav">
        <img className="logo" src={logoapa} alt="" />
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li>
              <a href="/">Beranda</a>
            </li>
            <li className="services">
              <a className="nav-program" onClick={() => goToProgram()}>Program</a>

              {/* <ul className="dropdown">
                <li>
                  <a href="/">Dropdown 1 </a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
                <li>
                  <a href="/">Dropdown 3</a>
                </li>
                <li>
                  <a href="/">Dropdown 4</a>
                </li>
              </ul> */}
            </li>
            <li>
              <a className="nav-kelas" onClick={() => goToKelas()}>Kelas</a>
            </li>
            <li className="li-btn">
              <button className="btn-masuk" onClick={() => goToLogin()}>Masuk</button>
              <button className="btn-daftar" onClick={() => goToDaftar()}>Daftar</button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
