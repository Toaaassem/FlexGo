import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useNavigate } from "react-router-dom"; // Note: `useNavigate` is not used in this component
import Movies from "./Movies/Movies";
import { motion } from "framer-motion";
import Feature from "../PricingPlans/Component/Feature.jsx/Index";
import Footer from "../PricingPlans/Component/Footer.jsx/Index";

export default function Home() {
  return (
    <div className="m-5 home">
      <div className="carousel-container border-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {/* Carousel items */}
            {[
              "Savage Beauty",
              "Voices from the Other Side",
              "Endless Horizon",
            ].map((slide, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`} // Corrected className syntax
                key={index}
              >
                <img
                  src={`https://flixgo.volkovdesign.com/main/img/bg/slide__bg-${
                    index + 1
                  }.jpg`}
                  className="d-block w-100 position-relative"
                  alt={slide}
                />
                <div className="imageCaption position-absolute bottom-0 start-50 translate-middle-x">
                  <div className="mt-5 p-3">
                    <motion.h1
                      initial={{ y: -250 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 0.9999 }}
                      className="your-classname d-flex align-items-center mb-3"
                    >
                      {slide}
                      <span className="ms-2 d-flex align-items-center">
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "yellow", fontSize: "20px" }}
                        ></i>
                        <span className="ms-2" style={{ fontSize: "20px", color: "yellow" }}>
                          8.6
                        </span>
                      </span>
                    </motion.h1>
                    <motion.div
                      initial={{ y: -250 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 0.9999 }}
                    >
                      <p className="d-flex flex-column mb-3 p-2 text-white">
                        <span className="d-flex align-items-center mb-2 text-white">
                          A brilliant scientist discovers a way to harness the
                          power of the ocean's current to create a new,
                          renewable energy source.
                        </span>
                        <span className="d-flex align-items-center text-white">
                          But when her groundbreaking technology falls into the
                          wrong hands, she must race against time to stop it
                          from being used for evil.
                        </span>
                      </p>
                      <div className="d-flex align-items-center mt-3">
                        <p
                          className="d-flex flex-column mb-3 p-2"
                          style={{ color: "white" }}
                        >
                          Action, Drama, Comedy
                        </p>
                      </div>
                    </motion.div>

                    <div className="d-flex align-items-center mb-3">
                      <motion.button
                        initial={{ x: "-100vw" }}
                        animate={{ scale: 1.1, x: 0 }}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.2, color: "black" }}
                        transition={{
                          duration: 0.99999,
                          type: "spring",
                          stiffness: 80,
                        }}
                        type="button"
                        className="btn btn-outline-primary btn-lg text-white"
                        style={{ color: "#ff568e" }}
                      >
                        Watch Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal line as a div */}
      <div
        style={{
          position: "relative", // Relative positioning for the parent
          width: "100%", // Full width of the viewport
          marginTop: "50px", // Space above the line
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            position: "absolute", // Absolute positioning for the line
            left: 0, // Start from the far left
            right: 0, // End at the far right
            borderTop: "1px solid #fe5870", // Color and thickness of the line
            top: 0, // Position at the top of the div
          }}
        />
      </div>
      <Movies />
      <Feature />
      <Footer/>
    </div>
  );
}
