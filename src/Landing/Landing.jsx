import React from "react";
import Navbar from "../Navbar/Navbar";
import hero from "../asset/hero2.png";
import part from "../asset/partnet2.png";
import talent2 from "../asset/feature.png";
import "./Landing.css";
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar2/Navbar2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBook,
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

const Landing = () => {
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
              <button className="btn-belajar-sekarang">
                Belajar Sekarang
              </button>
              <button className="btn-konsul-gratis">
                Konsultasi Gratis
              </button>
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

        <h2 className="text-benefit">Benefit yang Kami Berikan</h2>
        <div className="benefit">
          <div className="text">
            <h2 className="bg">Belajar Bersama Mentor Sesuai Pilihan</h2>
            <h2 className="no-bg">Group Sharing dan Diskusi</h2>
            <h2 className="bg">Sertifikasi Kompetensi Sesuai Dunia Kerja</h2>
            <h2 className="no-bg">Akases Video Pembelajaran</h2>
            <h2 className="bg">Curiculum Vitae dan Portofolio</h2>
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
                src="https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?w=1060&t=st=1699448531~exp=1699449131~hmac=251125086c558f5c14d822dfa87b75f99f125a83687b42c5113f3d3997be81a0"
                alt=""
              />
              <div className="desk-dev">
                <h3>
                  <FontAwesomeIcon icon={faUser} /> Fellicia Angelia
                </h3>
                <h4 className="posision">
                  FullStack Developer at DataKita Indonesia
                </h4>
              </div>
            </div>
            {/* ---------------------------------------- */}
            <div className="card">
              <img
                className="mentor-1"
                src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                alt=""
              />
              <div className="desk-dev">
                <h3>
                  <FontAwesomeIcon icon={faUser} /> David Alexa
                </h3>
                <h4 className="posision">
                  Android Developer at IntiTech Indonesia
                </h4>
              </div>
            </div>
            {/* -------------------------------------- */}
            <div className="card">
              <img
                className="mentor-1"
                src="https://img.freepik.com/premium-photo/irresistible-man-charming-young-man-looking-camera-smiling-while-standing-against-grey-background_425904-6477.jpg?size=626&ext=jpg"
                alt=""
              />
              <div className="desk-dev">
                <h3>
                  <FontAwesomeIcon icon={faUser} /> Willie Daniel
                </h3>
                <h4 className="posision">
                  Backend Developer at HosterMix Corp
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
              <p>Lihat Semua Kelas <FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
          </div>
        </div>

        <div className="end-text">
          <h2 className="text-gabung">Gabung Sekarang</h2>
          <p className="desk-gabung">Belajar Jauh Lebih Keras Dari Siapapun !</p>
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
