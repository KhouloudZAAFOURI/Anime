import React ,{useEffect,useState}from 'react'
import "./TopRated.css"; 
import Title from './Title';
import Loading from "./Loading"; 
import { AiFillLike } from "react-icons/ai";
import "./Manga.css"; 
import { FaRegStar } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

export default function Manga() {

//  the state that manage the data from the API 
  const [Manga,setManga]=useState([]);

// the state that manage if the data from the API is loaded  
  const [loading,setloading]=useState(true);

//  the function that retreive data from the API and store it in the state TopRated
  async function getManga() {
    try{
      await fetch("https://api.jikan.moe/v4/manga")
      .then(data=>data.json())
      .then(Manga=>setManga(Manga.data));
       setloading(false);
      
    }
    catch(err)
    {console.log("ERROR");}   
  }
    console.log(Manga);
  
    useEffect(() => {
  
      getManga();
     }, [])
   
const ShowData= Manga.map((e,index)=>{
  
  return <div key={index} style={{position:"relative", backgroundColor:"black", color:"white", margin:"10px",padding:"10px", marginBottom:"20px", borderRadius:"20px", boxShadow: "0px 0px 10px #e3d704"}}>
   {/* dislay only tow words from the title  */}
  <h5 style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px", color:"#e3d704"}}>{e.title_english.split(' ').slice(0, 2).join(' ')}</h5>
 <div className='manga'> 
 <img style={{borderRadius:"10px", cursor:"pointer"}} src={e.images.jpg.image_url}  alt={e.title_english}/> 
    <div className="overlayDiv" >
        <h5 style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px", color:"#e3d704"}}>{e.title_english.split(' ').slice(0, 2).join(' ')}</h5>
        <span >{e.background} </span>
        <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"10px"}}> 
        <p> <span> <AiFillLike/> </span> {e.favorites}  </p>
        <p> <FaRegStar /> {e.score} </p>
        <p> <IoMdPerson /> {e.scored_by} </p>
        <a target='_blank' rel='noreferrer' href={e.url} > <button id='more'> Discover More </button></a>        
        </div>
    </div>
 </div>
</div>
    
  })

  return (
<>
{loading && <Loading/>}

  <Title title={"Manga"} />
  <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", backgroundColor:"black", }}>
        {ShowData}     
        </div>
   </>
    
  )
}
