import React, { useState } from "react";
import apaLogo from "../asset/UPSKILLS.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../src/App/features/Login/Actions";
import Swal from "sweetalert2";

const Login = () => {

  const handleAlert = () => {
    Swal.fire({
      title: "Halo Pengguna !",
      text: "fitur Masih Dalam Tahap Pengembangan",
      icon: "warning"
    });
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useNavigate();
  const navigate = useNavigate();

  const goToDaftar = () => {
    navigate("/Daftar");
  };

  const goToHome = () => {
    dispatch(setUserData(user));
    navigate("/Kelas");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // ADD API FUNCTION
  const fetchLogin = (formData) => {
    fetch(`http://localhost:8000/auth/login`, {
      method: "POST",
      body: formData,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        if (res.status === 400) {
          return setError(true);
        }
        return res.json();
      })
      .then((data) => {
        dispatch(setUserData({ user: data.user, token: data.token }));

        createItem(data);
        goToHome();
      });
  };

  //ACTION TO SUBMIT
  const handleLogin = (e) => {
    // e.preventDefault();
    if (email.length == 0 || password.length == 0) {
      return setError(true);
    }
    const formData = new URLSearchParams({
      email,
      password,
    });
    fetchLogin(formData);
  };

  //TOEKN LOGIN
  const createItem = (data) => {
    localStorage.setItem("userData", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  };

  return (
    <React.Fragment>
      <div className="container-login">
        <div className="box-login" onSubmit={handleLogin}>
          <div className="logo-login">
            <img className="apa-logo" src={apaLogo} alt="" />
          </div>
          {/* EMAIL FUNCTION */}
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
              Email belum terdaftar !
            </label>
          ) : (
            ""
          )}

          {/* PASSWORD FUNCTION */}
          <div className="password">
            <h3 className="password">Password</h3>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input-password"
              type="password"
              placeholder="Masukan password"
            />
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

            <p className="forgot-pass">Lupa Password?</p>
          </div>

          {/* -------------------------------------------- */}
          <button className="btn-regist" onClick={() => handleLogin()}>
            Masuk
          </button>
          <div className="garis-atau">
            <hr className="hr-atau" />
            <p className="teks-atau">atau</p>
            <hr className="hr-atau" />
          </div>
          <button className="btn-google" onClick={() => handleAlert()}>
            <img
              src="https://d17ivq9b7rppb3.cloudfront.net/original/commons/sso-google-v3.svg"
              alt=""
            />{" "}
            Masuk dengan Google
          </button>

          <div className="punya-akun">
            <p className="sudah-punya-akun">
              Belum punya akun?
              <span className="masuk-akun" onClick={() => goToDaftar()}>
                Daftar
              </span>
            </p>
          </div>
          <hr className="hr-bawah" />
          <div className="capcha">
            <p className="teks-capcha">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                className="link-login"
                href="https://policies.google.com/privacy"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                className="link-login"
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

export default Login;
