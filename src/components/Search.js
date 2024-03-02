import React, { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import './Search.css';
import Title from './Title';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiSolidCameraMovie } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import NoResults from "./../images/no result.png"; 

export default function Search() {

  const [SearchAnime, setSearchAnime] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isVisible, setIsVisible] = useState(true);  

  const handleClose = () => {
      setIsVisible(false);
      setSearchAnime(''); // Reset the search input
      setSearchResult([]); // Reset the search result
    
  };  


 async function handleSearch () {
    if (SearchAnime.length > 0) {
        try {
            await fetch(`https://api.jikan.moe/v4/anime?q=${SearchAnime}&sfw`)
            .then (data => data.json())
            .then (searchResult => setSearchResult(searchResult.data)); 
      
          } catch (error) {
            console.error('Error fetching Anime to Search', error);
          }
        
        }
        else {
            alert('Please enter the name of the anime to search.');
        }
        console.log (searchResult); 
    }

 useEffect(() => {
      if (SearchAnime !== '') {
        handleSearch();
      }  
      if (SearchAnime === '') {
        setIsVisible(false);
      } 
}, [SearchAnime]);   


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
  const searchResultData = searchResult && searchResult.length > 0
  ? searchResult.map((e, index) =>  (
    <div key={index} style={{ width: '18rem', backgroundColor: "black", color: "white", margin: "10px auto", padding: "10px", marginBottom: "80px", borderRadius: "20px", boxShadow: "0px 0px 10px #e3d704" }}>
      <a target='_blank' href={e.trailer.url} rel='noreferrer'>
        <img style={{ width: "266px", borderRadius: "10px" }} src={e.images.jpg.image_url} alt={e.title_english} />
      </a>

      <div className='bodycard'>
        <h5>{e.title_english} </h5>
        <p><span> <IoCalendarOutline /> </span> {e.year}</p>
        <p> <span> <BiSolidCameraMovie/> </span> {e.episodes} episode(s) <span> <CiTimer /> </span> {e.duration}  </p>
        <p> <span> <AiFillLike/> </span> {e.favorites}  </p>
        <a href={e.url} className="btn btn-primary" style={{backgroundColor:"#e3d704", color:"black", fontWeight:"bolder", border:"none", margin:"10px 70PX"}}> Show More </a>
      </div>
    </div>
  )) 
: [];

  return (
    <>
    <div id='search' style={{position: "fixed",top: "22px", width:"17%", display:"flex", justifyContent:"flex-end", zIndex:"999", margin:"auto 50%"}}>
       <span><CiSearch onClick={handleSearch} /> </span>
      <input
        type="search"
        placeholder=" Find Anime..."
        value={SearchAnime}
        onChange={(e) => setSearchAnime(e.target.value)}
      />
    </div>

    {searchResultData.length >= 1  && (

          <div style={{ position:"absolute", top:"428px", width:"100%", backgroundColor:"black"}}>
          <span style={{color:"#e3d704", fontSize:"50px", position:"absolute", top:"1%", right:"1%", lineHeight:"0", cursor:"pointer"}}>
             <IoIosCloseCircleOutline onClick= {handleClose} />
          </span>

          <Title subtitle title={SearchAnime} /> 
              <Carousel responsive={responsive}>
              {searchResultData}
              </Carousel>
            </div>  
    )}

      {searchResultData.length === 0 && SearchAnime !== '' && (
           
      //  to dislay a div in the center give it a  position:"fixed", left:"50%", top:"50%", transform: translate(-50%, -50%);
      <div id='noResult' className="col-lg-4 col-md-5 col-sm-8 col-10 mx-auto" style={{position:"fixed", left:"50%", top:"235px",zIndex:9999, borderRadius:"20px",backgroundColor:"white", boxShadow: "10px 10px 20PX #dc3545"}}>

            <div style={{width:"90%", margin:"-20px auto",backgroundColor:"#e3d704", display:'flex', alignItems:"center", justifyContent:"space-between", height:"50px", borderRadius:"20px"}}>
              <span style={{fontWeight:"bolder", fontSize:"25px", paddingLeft:"20px"}}> Eternityflx </span>
              <IoIosCloseCircleOutline onClick= {handleClose} style={{fontSize: "30px", marginRight:"20px", cursor:"pointer"}}/>
            </div>

            <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                 <img src={NoResults} alt='no results' style={{width:"40%", height:"40%",  marginTop:"40px"}}/>      
                  <p style={{color:"red", fontSize:"20px", fontWeight:"bolder", margin:"20px"}} > No results found for "{SearchAnime}".</p> 
            </div>
      </div>
      )}
    </>
  );
}
