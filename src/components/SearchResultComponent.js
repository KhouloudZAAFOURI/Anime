import React from 'react';
import Title from './Title';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillLike } from "react-icons/ai";
import { BiSolidCameraMovie } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";

export default function SearchResultComponent({SearchAnime, searchResult }) {
  // is from the react carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const ShowData = searchResult.map((e, index) => (
    <div key={index} style={{ width: '18rem', backgroundColor: "black", color: "white", margin: "10px auto", padding: "10px", marginBottom: "80px", borderRadius: "20px", boxShadow: "0px 0px 10px #e3d704" }}>
      <a target='_blank' href={e.trailer.url}>
        <img style={{ width: "266px", borderRadius: "10px" }} src={e.images.jpg.image_url} alt={e.title_english} />
      </a>

      <div className='bodycard'>
        <h5>{e.title_english} </h5>
        <p><span> <IoCalendarOutline /> </span> {e.year}</p>
        <p> <span> <BiSolidCameraMovie/> </span> {e.episodes} episode(s) <span> <CiTimer /> </span> {e.duration}  </p>
        <p> <span> <AiFillLike/> </span> {e.favorites}  </p>
        {/* <p className="card-text">{e.synopsis.slice(0,150)}...</p> */}
        <a href={e.url} className="btn btn-primary" style={{backgroundColor:"#e3d704", color:"black", fontWeight:"bolder", border:"none", margin:"10px 70PX"}}> Show More </a>
      </div>
    </div>
  ));

  return (
    <>
      <Title subtitle={"ONLINE STREAMING"} title={SearchAnime} />
      <div id='result' style={{border:" 2px solid red"}}>
        <Carousel responsive={responsive}>
          {ShowData}  
          <p> helli </p>
        </Carousel>
      </div>
    </>
  );
}
