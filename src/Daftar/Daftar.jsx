import React from "react";
import apaLogo from "../asset/APA2.png";
import "./Daftar.css";
import { useNavigate } from "react-router-dom";

const Daftar = () => {

  const dispatch = useNavigate()
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate("/Login");
  };

  return (
    <React.Fragment>
      <div className="container-daftar">
        <div className="box-daftar">
          <div className="logo-daftar">
            <img className="apa-logo" src={apaLogo} alt="" />
          </div>
          <div className="nama-lengkap">
            <h3 className="nama">Nama Lengkap</h3>
            <input
              className="input-nama"
              type="text"
              placeholder="Nama lengkap"
            />
          </div>
          {/* ---------------- */}
          <div className="email">
            <h3 className="email">Email</h3>
            <input
              className="input-email"
              type="email"
              placeholder="Alamat Email"
            />
          </div>
          {/* ---------------- */}
          <div className="password">
            <h3 className="password">Password</h3>
            <input
              className="input-password"
              type="password"
              placeholder="Masukan password"
            />
          </div>
          {/* ---------------- */}
          <button className="btn-regist">Daftar</button>
          <div className="garis-atau">
            <hr className="hr-atau" />
            <p className="teks-atau">atau</p>
            <hr className="hr-atau" />
          </div>
          <button className="btn-google">
            <img
              src="https://d17ivq9b7rppb3.cloudfront.net/original/commons/sso-google-v3.svg"
              alt=""
            />{" "}
            Daftar dengan Google
          </button>

          <div className="punya-akun">
            <p className="sudah-punya-akun">
              Sudah punya akun?<span className="masuk-akun" onClick={() => goToLogin()}>Masuk</span>
            </p>
          </div>
          <hr className="hr-bawah" />
          <div className="capcha">
            <p className="teks-capcha">
              This site is protected by reCAPTCHA and the Google{" "}
              <a className="link-daftar" href="https://policies.google.com/privacy">Privacy Policy</a>{" "}
              and <a className="link-daftar" href="https://policies.google.com/terms">Terms of Service</a> apply.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Daftar;
