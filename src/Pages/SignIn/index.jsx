import React, { useState } from "react";
import Joi from "joi";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import logo from "../../Images/logo.svg";
import { Await, useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";
export default function SignIn({ saveDataUser }) {
  let navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [backEndErrorMesage, setBackEndErrorMesage] = useState("");
  const [frontEndErrorMesage, setfrontEndErrorMesage] = useState([]);
  const [userData, setUserData] = useState("");
  function getUserData(e) {
    let data = { ...loginData };
    data[e.target.name] = e.target.value;
    setLoginData(data);
  }
  function validation() {
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });
    return schema.validate(loginData, { abortEarly: false });
  }
  function handleSubmit(e) {
    e.preventDefault();
    let validate = validation();
    if (validate.error) {
      setfrontEndErrorMesage(validate.error.details);
    } else {
      axios
        .post("http://hawas.runasp.net/api/v1/Login", loginData)  // Use relative URL
        .then((res) => { 
          const jwt = res.data.jwt;
          const user = res.data.user;
          setUserData(JSON.stringify(user));
          localStorage.setItem("token", jwt);
          saveDataUser();
          navigate("/home");
        })
        .catch((err) => {
            setBackEndErrorMesage(err.response.data);
        });
    }
  }
  return (
    <div className="bggg">
      <div className="card mb-3 signin-card" style={{ background: "#2b2b31" }}>
    <div className="container">
      <div className="text-center mt-3">
        <img src={logo} alt="Logo" />
      </div>
      <div className="card-body">
        {backEndErrorMesage.length ? (
          <h6 className="alert alert-danger">{backEndErrorMesage}</h6>
        ) : (
          <></>
        )}
        {""}
        {frontEndErrorMesage.length > 0 &&
          frontEndErrorMesage.map((error, index) => (
            <h6 key={index} className="alert alert-danger">
              {error.message}
            </h6>
          ))}
        <form className="row g-3 flex-column" onSubmit={handleSubmit}>
          <div className="col-auto">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={getUserData}
            />
          </div>
          <div className="col-auto">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={getUserData}
            />
          </div>
          <div className="col-auto">
            <div className="form-check">
              <div
                className="col-auto d-flex justify-content-center"
                style={{ color: "#ff568e !important" }}
              >
                <button
                  type="submit"
                  className="btn btn-outline btn-lg text-white"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div></div>
    
  );
}
