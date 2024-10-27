import React from 'react'
import './Partners.css'
import { Link } from 'react-router-dom'
// import img from '../Img.json'
import img1 from '../img1.png' 
import img2 from '../img2.png' 
import img3 from '../img3.png' 
import img4 from '../img4.png' 
import img5 from '../img5.png' 
import img6 from '../img6.png' 

let photo =[
    {
        "index":1,
        "src":img1
    },
    {
        "index":2,
        "src":img2
    },
    {
        "index":3,
        "src":img3
    }
    , {
        "index":4,
        "src":img4
    }
    , {
        "index":5,
        "src":img5
    }
    , {
        "index":6,
        "src":img6
    }
]


export default function Partners() {
  return (
    <>
    <div className='Section'>
      <div className="container ">
        <h1 className="text-white  fs-1 fw-lighter">Our Partners</h1>
        <p className=" descc  fs-6 ">
        We strive for long-term cooperation with our partners, and our team is always ready to meet and consider new opportunities for mutual benefits. If you would like to become our partner, we are always open to new offers and look forward to hearing from you.<span> Become a partner
        </span></p>
        <div className="row  bgg ">

        {photo.map((photos,index)=>
        <div className="col-lg-2 ">
                <div className="data h-100 d-flex justify-content-center align-items-center "key ={photos.index}>
                    <Link >
                    <img  className='part' src={photos.src} ></img>
                    </Link>
                </div>
            </div>)}


            
        </div>
        </div>
    </div>
    <div className="line2"></div>
    </>
  )
}
