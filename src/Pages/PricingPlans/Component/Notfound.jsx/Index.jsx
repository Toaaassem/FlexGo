import React from "react";
import "./Notfound.css";
import { useNavigate } from 'react-router-dom';
export default function Notfound() {
    const navigate = useNavigate();

  const handleeNavigate = () => {
    navigate('/'); 
  };
  return (
    <div className="notf">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12">
            <div className="cflex d-flex justify-content-center align-items-center h-100">
              <div className="cardd d-flex justify-content-center align-items-center">
                <div className="ccontent">
                  <h1 className=" text-center etittle">404</h1>
                  <p className="text-secondary mt-1">
                    The page you are looking for not available!
                  </p>
                  <button onClick={handleeNavigate} className="error  ">Go Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
