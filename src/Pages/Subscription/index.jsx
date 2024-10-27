import React from 'react';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';


export default function Subscription() {

    const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/paaymentform'); 
  };
   
  return ( <>
  {/* header */}
  <div className="background-container"> 
      <div className='container'>
            <div className='row h-100'>
                <div className='col-12'>
                    <div className="contentt h-100 w-100 d-flex flex-">
                        <h1 className='tittle'>Flixgo</h1>
                        <ul className='d-flex list m-0'>
                            <li className='l-design'>
                              <Link >Home</Link>
                            </li>
                            <li>
                            <i class="fa-solid fa-arrow-right"></i>
                            </li>
                            <li>Subscription</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        <div className='line'></div>
        {/* header end */}
    <div>
      <div className='text-center w-75 my-5 mx-auto'>
        <h1>Subscription</h1>
      </div>
    </div>
    
    <main>
        <div className="row">
            <div className="col-md-4">
                <div className="card text-center custom-card">
                    <div className="card-header">
                        <h4 className='fw-normal'>
                            Starter
                        </h4>
                    </div>
                    <div className="card-body">
                        <h1 className='card-title'>
                            $0 
                        </h1>
                        <ul className="list-unstyled py-3" >
                          <li>7 days</li>
                          <li>720p Resolution</li>
                          <li>Limited Availability</li>
                          <li>Desktop Only</li>
                          <li>Limited Support</li>
                        </ul>
                        <button className=" buttonn btn ">CURRENT PLAN</button>
                    </div>
                </div>
            </div>

            
            <div className="col-md-4">
                <div className="card text-center custom-card">
                    <div className="card-header">
                        <h4 className='fw-normal'>
                            Premium
                        </h4>
                    </div>
                    <div className="card-body">
                        <h1 className='card-title'>
                            $19.99
                        </h1>
                        <ul className="list-unstyled py-3" >
                          <li>1 Month</li>
                          <li>Full HD</li>
                          <li>Lifetime Availability</li>
                          <li>TV & Desktop</li>
                          <li>24/7 Support</li>
                        </ul>
                        <button onClick={handleNavigate} className=" buttonn btn ">CHOOSE PLAN</button>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card text-center custom-card">
                    <div className="card-header">
                        <h4 className='fw-normal'>
                            Cinematic
                        </h4>
                    </div>
                    <div className="card-body">
                        <h1 className='card-title'>
                            $39.99
                        </h1>
                        <ul className="list-unstyled py-3" >
                          <li>2 Months</li>
                          <li>Ultra HD</li>
                          <li>Lifetime Availability</li>
                          <li>Any Device</li>
                          <li>24/7 Support</li>
                        </ul>
                        <button onClick={handleNavigate} className=" buttonn btn ">CHOOSE PLAN</button>
                    </div>
                </div>
            </div>
            
        </div>
    </main>

    </>
  );
}
