import React from 'react'
import "./Banner.css"
import { RiTodoLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

export default function Banner() {
  return (
    <>
 
        <div id='Banner' className='w-100'>
           
          <div id='title' className=' text-white'>
            <h2> Eternityflx </h2>
            <h1> Unlimited <span>Anime </span> & More.</h1>
            
            <div className='d-sm-block d-md-flex' >
 
                      <div id='info' className='d-flex px-2'>
                      <p id='PG'> PG18</p>
                      <p id='HD'> HD</p>
                      <p>Romance, Drama </p>
                      </div>

                      <div id='date' className='d-flex'>
                      <p id='year'> <RiTodoLine/> 2024 </p>
                      <p id='duration'><IoMdTime/> 128 min</p> 
                      </div>
            </div>

           <button id='watch' className='rounded-pill'> <a className=' text-decoration-none' href='/'> <FaPlay /> WATCH NOW </a></button>
          
          
          </div>
         </div> 
    </>
  )
}
