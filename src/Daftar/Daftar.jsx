import React, { useState } from "react";
import apaLogo from "../asset/UPSKILLS.png";
import "./Daftar.css";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../App/features/Login/Actions";

const Daftar = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useNavigate();
  const navigate = useNavigate();

  const goToLogin = () => {
    dispatch(setUserData(user));
    navigate("/Login");
  };

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const fetchRegister = (formData) => {
    fetch(`http://localhost:8000/auth/register`, {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 400) {
          return setError(true);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(setUserData({ user: data.user, token: data.token }));

        createItem(data);
        goToLogin();
        console.log(data);
      });
  };

  const handleRegister = (e) => {
    // e.preventDefault();
    if (email.length == 0 || password.length == 0) {
      return setError(true);
    }
    const formData = new URLSearchParams({
      full_name: name,
      email,
      password,
      // role: select,
    });
    fetchRegister(formData);
    console.log(email, password);
  };

  const createItem = (data) => {
    localStorage.setItem("userData", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  };

  return (
    <React.Fragment>
      <div className="container-daftar">
        <div className="box-daftar" onSubmit={handleRegister}>
          <div className="logo-daftar">
            <img className="apa-logo" src={apaLogo} alt="" />
          </div>
          <div className="nama-lengkap">
            <h3 className="nama">Nama Lengkap</h3>
            <input
              onChange={(e) => setName(e.target.value)}
              className="input-nama"
              type="text"
              placeholder="Nama lengkap"
            />
          </div>
          {error && name.length <= 0 ? (
            <label style={{ color: "red" }} className="error-login">
              Nama tidak boleh kosong !
            </label>
          ) : (
            ""
          )}
          {error && email.length < 0 ? (
            <label style={{ color: "red" }} className="error-login">
              Nama minimal 8 karakter !
            </label>
          ) : (
            ""
          )}

          {/* ---------------- */}
          <div className="email">
            <h3 className="email">Email</h3>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input-email"
              type="email"
              placeholder="Alamat Email"
            />
          </div>
          {error && email.length <= 0 ? (
            <label style={{ color: "red" }} className="error-login">
              Email tidak boleh kosong !
            </label>
          ) : (
            ""
          )}
          {error && email.length > 0 ? (
            <label style={{ color: "red" }} className="error-login">
              Email sudah terdaftar !
            </label>
          ) : (
            ""
          )}

          {/* ---------------- */}
          <div className="password">
            <h3 className="password">Password</h3>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input-password"
              type="password"
              placeholder="Masukan password"
            />
          </div>
          {error && password.length <= 0 ? (
            <label style={{ color: "red" }} className="error-login">
              Password tidak boleh kosong !
            </label>
          ) : (
            ""
          )}

          {error && password.length > 0 ? (
            <label style={{ color: "red" }} className="error-login">
              Password salah !
            </label>
          ) : (
            ""
          )}

          {/* ---------------- */}
          <button className="btn-regist" onClick={() => handleRegister()}>
            Daftar
          </button>
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
              Sudah punya akun?
              <span className="masuk-akun" onClick={() => goToLogin()}>
                Masuk
              </span>
            </p>
          </div>
          <hr className="hr-bawah" />
          <div className="capcha">
            <p className="teks-capcha">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                className="link-daftar"
                href="https://policies.google.com/privacy"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                className="link-daftar"
                href="https://policies.google.com/terms"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Daftar;
