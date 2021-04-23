import React from "react";
import "./Front.css";
import { Link } from "react-router-dom";

function Front() {
  return (
    <div>
      <header id="header-front" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            <a>Student</a>
          </h1>
          <a href="/adminlanding" className="get-started-btn scrollto">
            Admin
          </a>
        </div>
      </header>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 row-student"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h1>STUDENT MANAGEMENT</h1>
              <Link to="/login">
                <div className="d-lg-flex login-button">
                  <a className="btn-get-started scrollto">Login As Student</a>
                </div>
              </Link>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <img
                src="../img/hero-img.png"
                className="img-fluid animate"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Front;
