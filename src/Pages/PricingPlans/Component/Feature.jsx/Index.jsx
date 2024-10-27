import React from "react";
import "./Feature.css";
import Data from "../Data.json";
import {motion} from 'framer-motion'
export default function Feature() {
  let Arr = Data;
  return (
    <div className="sectionn">
      <div className=" container">
        <h1 className="text-white  fs-1 fw-lighter">Our Features</h1>
        <p className=" descc  fs-6 ">
          Welcome to FlixGo movie site, the ultimate destination for all film
          enthusiasts. Immerse yourself in a world of captivating stories,
          stunning visuals, and unforgettable performances. Explore our
          extensive library of movies, spanning across genres, eras, and
          cultures.
        </p>
        <div className="row g-3">
          {Arr.map((cards, index) => (
            <div className="col-lg-4 col-md-6" key={cards.index}>
              <div className="content me-5">
                <motion.div
                whileHover={{rotate:180 }}
                transition={{ duration: 0.8 }}
                >
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="cz-color-2696481"
                    >
                      <path d={cards.icoone} class="cz-color-2696481"></path>
                    </svg>
                  </span>
                </motion.div>
                <div className="icontent">
                  <p className="minititle fw-normal">{cards.tittle}</p>
                  <p className=" newp ">{cards.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}