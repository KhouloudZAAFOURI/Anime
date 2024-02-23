import React ,{useEffect,useState}from 'react'
import "./Section1.css"; 
import Title from './Title';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillLike } from "react-icons/ai";
import { TOP_Rated_Movies } from "./../API" ;
import Loading from "./Loading"; 

export default function Section1() {

//  the state that manage the data from the API 
  const [TopRated,setRated]=useState([]);

// the state that manage if the data from the API is loaded  
  const [loading,setloading]=useState(true);

//  the function that retreive data from the API and store it in the state TopRated
  async function getTopRatedAnime() {
    try{
      await fetch(TOP_Rated_Movies)
      .then(data=>data.json())
      .then(TopRated=>setRated(TopRated.data));
       setloading(false);
      
    }
    catch(err)
    {console.log("ERROR");}   
  }
    console.log(TopRated);
  
    

  useEffect(() => {
  
    getTopRatedAnime();
   }, [])
   

//  is from the react carousel 
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
  

const ShowData= TopRated.map((e,index)=>{
  return <div key={index} className="card mx-2 " style={{width: '18rem'}}>
  <a target='_blank' href={e.trailer.url}>
    <img id='imge' src={e.images.jpg.image_url} className="card-img-top" alt={e.title}/>
  </a>
  
      <div className="card-body">
        <h5 className="card-title">{e.title}<span>{e.year}</span></h5>
        <p> <AiFillLike/>{e.favorites}</p>
        {/* <p className="card-text">{e.synopsis.slice(0,150)}...</p> */}
        <a   href={e.url} className="btn btn-primary">Go somewhere</a>
      </div>
         </div>
  })

  return (
<>
{loading && <Loading/>}

  <Title subtitle= {"ONLINE STREAMING"} title={"Top Rated Movies"} />
  <div id='Section1'>
        <Carousel responsive={responsive}>
        {ShowData}  
        </Carousel>

  </div>
   
   </>
    
  )
}
