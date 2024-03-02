import React from 'react'
import "./Banner.css"
import { RiTodoLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import share from "./../images/share.jpg"
import {EmailShareButton,FacebookShareButton,LinkedinShareButton,TelegramShareButton,TwitterShareButton, WhatsappShareButton} from "react-share";
import {EmailIcon,FacebookIcon,FacebookMessengerIcon,LinkedinIcon,TelegramIcon,TwitterIcon,WhatsappIcon} from "react-share";

export default function Banner() {
const currentPageUrl= window.location.href; 
  return (
    <>
 
        <div id='Banner' className='w-100'>
           
              <div id='title' className=' text-white'>
                
                    <h2> Eternityflx </h2>
                    <h1> Unlimited <span>Anime </span> & More.</h1>
                            
                              <div id='info' className='d-flex px-2'>
                              <p id='PG'> PG18</p>
                              <p id='HD'> HD</p>
                              <p id='year'> <RiTodoLine/> 2024 </p>
                              <p id='duration'><IoMdTime/> 128 min</p> 
                              </div>
     

                    <div style={{ color:"white", display:"flex", margin:"10px"}}>

                          <img src= {share} alt='share' style={{ width:"80px", height:"80px", borderRadius:"10px"}}/>
                          <p style={{ marginLeft:"10px"}}> Share <span style={{color:"#e3d704", fontWeight:"bolder"}}> Eternityflx</span> to your Friends</p>

                          <div style={{ position:"absolute", left:"130px", top:"355px"}}>
                              <EmailShareButton style={{marginRight:"3px"}} url= {currentPageUrl}> <EmailIcon size={30}/> </EmailShareButton>
                              <FacebookShareButton  url= {currentPageUrl} quote="Please Share the Link" hashtag='#EternityFlx' ><FacebookIcon style={{marginRight:"3px"}} size={30}/><FacebookMessengerIcon style={{marginRight:"3px"}} size={30}/></FacebookShareButton>
                              <LinkedinShareButton style={{marginRight:"3px"}} url= {currentPageUrl}><LinkedinIcon size={30}/></LinkedinShareButton>
                              <TelegramShareButton url= {currentPageUrl}> <TelegramIcon style={{marginRight:"3px"}}size={30} /></TelegramShareButton>
                              <TwitterShareButton url= {currentPageUrl}><TwitterIcon style={{marginRight:"3px"}} size={30} /></TwitterShareButton>
                              <WhatsappShareButton url= {currentPageUrl} ><WhatsappIcon style={{marginRight:"3px"}} size={30} /></WhatsappShareButton>
                      </div>
                     </div>

                 

                     <button id='watch' className='rounded-pill'> <a className=' text-decoration-none' href='/'> <FaPlay /> WATCH NOW </a></button>

              
              </div>

          
         </div> 
         

    </>
  )
}
