import React from "react";
import hero from "../asset/MODEL WEB1.png";
import part from "../asset/partnet2.png";
import talent2 from "../asset/MODEL WEB 2.png";
import "./Landing.css";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar2/Navbar2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBook,
  faCheck,
  faCode,
  faDollar,
  faPeopleArrows,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAndroid,
  faApple,
  faGolang,
  faReact,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import kelas from "../asset/kelas.png";
import mentor1 from "../asset/mentor-1.png";
import mentor2 from "../asset/mentor-2.png";
import mentor3 from "../asset/mentor-3.png";
import mentor4 from "../asset/mentor-4.png";
import mentor5 from "../asset/mentor-5.png";
import mentor6 from "../asset/mentor-6.png";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Landing = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCard = () => {
    Swal.fire({
      title: "Berhasil Memilih Mentor",
      text: "Silahkan lihat history pemilihan Mentor",
      icon: "success"
    });
  }


  return (
    <React.Fragment>
      <Navbar2 />
      <div className="container">
        <div className="content">
          <div className="text">
            <h1 className="title-hero">
              Mulai Karirmu Sebagai Developer Profesional
            </h1>
            <p className="p-hero">
              Satu - satunya Platform Edukasi di Bidang IT yang memberikan
              Sertifikaasi dan Jaminan Penyaluran kerja ke Luar Negeri baik
              Bekerja secara Remote atau pun Onsite
            </p>
            <div className="btn-hero">
              <button className="btn-belajar-sekarang">Belajar Sekarang</button>
              <button className="btn-konsul-gratis">Konsultasi Gratis</button>
            </div>
          </div>
          <img className="talent" src={hero} alt="" />
        </div>

        <div className="partner">
          <div className="text-partner">
            <h2 className="text-deretan">Deretan Partner Kami</h2>
          </div>

          <div className="marquee">
            <div className="track">
              <div className="content">
                <img className="img-partner" src={part} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="benefit">
          <div className="text">
            <div>
              <h2 className="text-benefit">Benefit yang Kami Berikan :</h2>
            </div>
            <div className="all-benefit">
              <div className="parent-benefit-1">
                <p className="benefit-1">
                  <FontAwesomeIcon className="icon-benefit" icon={faCheck} /> Belajar Bersama Mentor
                  Sesuai Pilihan
                </p>
              </div>
              <div className="parent-benefit-1">
                <p className="benefit-1">
                  <FontAwesomeIcon className="icon-benefit" icon={faCheck} /> Group Sharing dan Diskusi
                </p>
              </div>
              <div className="parent-benefit-1">
                <p className="benefit-1">
                  <FontAwesomeIcon className="icon-benefit" icon={faCheck} /> Sertifikasi Kompetensi
                  Sesuai Dunia Kerja
                </p>
              </div>
              <div className="parent-benefit-1">
                <p className="benefit-1">
                  <FontAwesomeIcon className="icon-benefit" icon={faCheck} /> Akses Video Pembelajaran
                </p>
              </div>
              <div className="parent-benefit-1">
                <p className="benefit-1">
                  <FontAwesomeIcon className="icon-benefit" icon={faCheck} /> Curiculum Vitae dan
                  Portofolio
                </p>
              </div>
            </div>
          </div>
          <img className="talent2" src={talent2} alt="" />
        </div>

        {/* CARD */}

        <div className="container-card">
          <h2 className="pro-mentor">Profesional Mentor</h2>
          <div className="parent-card">
            <div className="card">
              <img
                className="mentor-1"
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010144.jpg?w=1060&t=st=1700833240~exp=1700833840~hmac=cd577fc49af43f92618168d22b8cdeb67a374322c3c7d5d657a5b4aa8589e8c3"
                alt=""
              />
              <img className="foto-mentor" src={mentor1} alt="" />
              <div className="desk-dev">
                <h3>Fellicia Angelia</h3>
                <hr className="garis-card" />
                <h4 className="posision">
                  FullStack Developer at DataKita Indonesia
                </h4>
              </div>
            </div>
            {/* ---------------------------------------- */}
            <div className="card">
              <img
                className="mentor-1"
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010138.jpg?w=1060&t=st=1700833287~exp=1700833887~hmac=53d42abc05e122b45119948131f0483be26080ad0e11bbf1c7e646663fbaaf5d"
                alt=""
              />
              <img className="foto-mentor" src={mentor2} alt="" />
              <div className="desk-dev">
                <h3>David Alexa</h3>
                <hr className="garis-card" />
                <h4 className="posision">
                  Android Developer at IntiTech Indonesia
                </h4>
              </div>
            </div>
            {/* -------------------------------------- */}
            <div className="card">
              <img
                className="mentor-1"
                src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=1060&t=st=1700833325~exp=1700833925~hmac=6ef6d4cfb5362d1893caec2d400c308805a78185dd8cd4027292956cddf3822b"
                alt=""
              />
              <img className="foto-mentor" src={mentor3} alt="" />
              <div className="desk-dev">
                <h3>Willie Daniel</h3>
                <hr className="garis-card" />
                <h4 className="posision">
                  Backend Developer at HosterMix Corp
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2*/}

        <div className="container-card-2">
          <div className="parent-card-2">
            <div className="card" onClick={() => handleCard()}>
              <img
                className="mentor-1"
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010144.jpg?w=1060&t=st=1700833240~exp=1700833840~hmac=cd577fc49af43f92618168d22b8cdeb67a374322c3c7d5d657a5b4aa8589e8c3"
                alt=""
              />
              <img className="foto-mentor" src={mentor4} alt="" />
              <div className="desk-dev">
                <h3>Shadrina Wincie</h3>
                <hr className="garis-card" />
                <h4 className="posision">
                  Laravel Developer at Unique Startup Indonesia
                </h4>
              </div>
            </div>
            {/* ---------------------------------------- */}
            <div className="card">
              <img
                className="mentor-1"
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010138.jpg?w=1060&t=st=1700833287~exp=1700833887~hmac=53d42abc05e122b45119948131f0483be26080ad0e11bbf1c7e646663fbaaf5d"
                alt=""
              />
              <img className="foto-mentor" src={mentor5} alt="" />
              <div className="desk-dev">
                <h3>Thomas Leonardo</h3>
                <hr className="garis-card" />
                <h4 className="posision">
                  Golang Developer at DataVisual Indonesia
                </h4>
              </div>
            </div>
            {/* -------------------------------------- */}
            <div className="card">
              <img
                className="mentor-1"
                src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=1060&t=st=1700833325~exp=1700833925~hmac=6ef6d4cfb5362d1893caec2d400c308805a78185dd8cd4027292956cddf3822b"
                alt=""
              />
              <img className="foto-mentor" src={mentor6} alt="" />
              <div className="desk-dev">
                <h3>Davincie Eedward</h3>
                <hr className="garis-card" />
                <h4 className="posision">
                  Frontend Developer at Budak Corporate
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="kelas">
          <img className="img-kelas" src={kelas} alt="" />
          <div className="parent-text-kelas">
            <h2 className="text-kelas">Kelas Terlaris Bulan Ini !!</h2>
            <p className="desk-kelas">
              Dapatkan Berbagai macam PROMO yang tersedia pada kelas - kelas
              tertentu. Yuk buruan jangan sampai kelewatan !!
            </p>

            <div className="parent-all-btn">
              <div className="group-btn-1">
                <button className="btn-react">React Developer</button>
                <button className="btn-android">Android Developer</button>
              </div>
              <div className="group-btn-2">
                <button className="btn-ios">Ios Developer</button>
                <button className="btn-go">Golang Develover</button>
              </div>
            </div>
            <hr className="garis" />

            <div className="lihat-kelas">
              <p>
                Lihat Semua Kelas <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </div>
          </div>
        </div>

        <div className="end-text">
          <h2 className="text-gabung">Gabung Sekarang</h2>
          <p className="desk-gabung">
            Belajar Jauh Lebih Keras Dari Siapapun !
          </p>
          <button className="btn-gabung">Daftar</button>
        </div>
        <hr className="garis-end" />
        <Footer />
      </div>

      {/* FLOAT CTA */}
      <div className="wa">
        <FontAwesomeIcon className="icon-wa" icon={faWhatsapp} />
      </div>
    </React.Fragment>
  );
};

export default Landing;
