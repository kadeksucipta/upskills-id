import React, { useState } from "react";
import "./Navbar2.css";
import logoapa from "../asset/APA2.png"

export default function App() {
  const [show, setShow] = useState(true);
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
            <li>
              <a href="/">Tentang</a>
            </li>
            <li className="services">
              <a href="/">Program</a>

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
              <a href="/">Kelas</a>
            </li>
            <li className="li-btn">
              <button className="btn-masuk">Masuk</button>
              <button className="btn-daftar">Daftar</button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
