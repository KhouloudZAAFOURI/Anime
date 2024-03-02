import React ,{useEffect,useState}from 'react'
import "./TopRated.css"; 
import Title from './Title';
import Loading from "./Loading"; 
import { AiFillLike } from "react-icons/ai";

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
  return <div key={index} style={{ backgroundColor:"black", color:"white", margin:"10px",padding:"10px", marginBottom:"20px", borderRadius:"20px", boxShadow: "0px 0px 10px #e3d704"}}>
  <img style={{borderRadius:"10px"}} src={e.images.jpg.image_url}  alt={e.title_english}/>
      <div className='bodycard'>
        <h5>{e.title_english} </h5>
        <p> <span> <AiFillLike/> </span> {e.favorites}  </p>
      </div>
      </div>
  })

  return (
<>
{loading && <Loading/>}

  <Title title={"Manga"} />
  <div className='col-sm-6 col-md-8 col-lg-12' style={{display:"flex", flexWrap:"wrap", alignItems:"center"}}>
        {ShowData}     
        </div>
   </>
    
  )
}
