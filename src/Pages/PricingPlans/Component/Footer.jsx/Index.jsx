import React from "react";
import "./Footer.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="fsection">
      <div className="container">
        <div className=" fo-row row frow mt-5 mb-5 ">
          <div class="col-12 col-md-8 order-md-1 col-lg-12 col-xl-4">
            <div class="footer__logo">
              <img id="logo" src={logo} alt=""></img>

              <p className="fdec">
                Movies & TV Shows, Online cinema,
                <br />
                Movie database HTML Template
                <br />
                The perfect choice for your project.
              </p>
            </div>

            <ul class="footer__social d-flex list-unstyled">
              <li className=" ps-1">
                <i class="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i class="fa-regular fa-paper-plane"></i>
              </li>
              <li>
                <i class="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i class="fa-brands fa-google-play"></i>
              </li>
              <li>
                <i class="fa-brands fa-apple"></i>
              </li>
            </ul>
          </div>
          <div class="col-12 order-md-3 col-md-8 col-lg-6 col-xl-4">
            <div class="row ">
              <div class="col-12">
                <h6 class="footer__title fw-bold text-white">Browse</h6>
              </div>

              <div class="col-6 ">
                <ul class="footer__list list-unstyled text-decoration-none ">
                  <li className="p-0">
                    <Link to="/catalog1.html" className="footer__link">
                      Movies
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link to="/catalog1.html" className="footer__link">
                      Tv Show
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link to="/catalog1.html" className="footer__link">
                      Anime
                    </Link>
                  </li>
                  <li className="p-0 m-0">
                    <Link to="/catalog1.html" className="footer__link">
                      Cartoons
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="col-6">
                <ul class="footer__list list-unstyled text-decoration-none">
                  <li className="p-0">
                    <Link to="/catalog1.html" className="footer__link">
                      Netflix
                    </Link>
                  </li>
                  <li className="p-0">
                    <Link to="/catalog1.html" className="footer__link">
                      Marvel
                    </Link>
                  </li>
                  <li className="p-0">
                    <Link to="/catalog1.html" className="footer__link">
                      DC Comics
                    </Link>
                  </li>
                  <li className="p-0">
                    <Link to="/catalog1.html" className="footer__link">
                      Book adaptations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-6 order-md-2 col-md-4 col-lg-3 col-xl-2 ">
            <h6 class="footer__title fw-bold text-white">Resources</h6>
            <ul class="footer__list list-unstyled text-decoration-none">
              <li className="p-0">
                <Link to="/catalog1.html" className="footer__link">
                  About Us
                </Link>
              </li>
              <li className="p-0">
                <Link to="/catalog1.html" className="footer__link">
                  Pricing plans
                </Link>
              </li>
              <li className="p-0">
                <Link to="/catalog1.html" className="footer__link">
                  Help center
                </Link>
              </li>
              <li className="p-0">
                <Link to="/catalog1.html" className="footer__link">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-6 order-md-4 col-md-4 col-lg-3 col-xl-2">
            <h6 class="footer__title fw-bold text-white">Help</h6>
            <ul class="footer__list list-unstyled text-decoration-none">
              <li className="p-0 ">
                <Link to="/catalog1.html" className="footer__link">
                  Account &amp; Billing
                </Link>
              </li>
              <li className="p-0 ">
                <Link to="/catalog1.html" className="footer__link">
                  Plans &amp; Pricing
                </Link>
              </li>
              <li className="p-0">
                <Link to="/catalog1.html" className="footer__link">
                  Supported devices
                </Link>
              </li>
              <li className="p-0">
                <Link to="/catalog1.html" className="footer__link">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="line3"></div>
        <div class="row mt-3">
          <div class="col-12">
            <div class="footer__copyright d-flex justify-content-between align-items-center">
              <small className="copytext">
                © FlixGo, 2018—2023. Create by{" "}
                <Link to="/catalog1.html" className="footer__link f-link">
                  Dmitry Volkov
                </Link>
                .
              </small>

              <ul className="footer__list list-unstyled text-decoration-none d-flex">
                <li>
                  <Link to="/catalog1.html" className="footer__link f-link">
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/catalog1.html" className="footer__link ps-3 f-link">
                    Terms and conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}