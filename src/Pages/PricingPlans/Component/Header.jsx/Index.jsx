import React from 'react'
import './Header.css' ;
import { Link } from 'react-router-dom';
import Home from '../../../Home/Home'
import {motion} from 'framer-motion'


export default function Header() {
  return (
    <div>
      <div className="background-container"> 
      <div className='container'>
            <div className='row h-100'>
                <div className='col-12'>
                    <div className="contentt h-100 w-100 d-flex flex-">
                        <motion.div  initial={{ y: -250 }}
                    animate={{ y: -10 }}
                    transition={{ duration: 0.9999 , type:'spring' ,stiffness:120}}
                    ><h1 className='tittle'>pricing plans</h1></motion.div>
                        
                        <ul className='d-flex list m-0'>
                        <motion.div
                      initial={{ y: -250 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 0.5 }}
                    >
                            <li className='l-design'>
                            <Link to="/home">Home</Link>
                            </li>
                            </motion.div>
                            <motion.div
                      initial={{ y: -250 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 0.7 }}
                    >
                            <li>
                            <i class="fa-solid fa-arrow-right"></i>
                            </li></motion.div>
                            <motion.div
                      initial={{ y: -250 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 0.9 }}
                    >
                            <li>pricing plans</li></motion.div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        <div className='line'></div>
    </div>
  )
}