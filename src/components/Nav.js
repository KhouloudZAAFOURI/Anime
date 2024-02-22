import {React,useState} from 'react'
import "./Nav.css"; 
import { CiSearch } from "react-icons/ci";
import { IoChevronUpOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
// import logo from "./../images/logo.jpg"

export default function Nav() {
  const [scroll, setscroll] = useState(false);
  const [open, setopen] = useState(false);
  const [trans, settrans] = useState(false);

  // get property from the root 
  const bgColor = document.styleSheets[0].cssRules[0].style.getPropertyValue("--bg-color");
   
  window.onscroll = () => {
    if(window.scrollY > 60 && window.scrollY < 300){
        settrans(true);        
    }
    else if (window.scrollY > 130) {
        settrans(false);
        setscroll(true);
    } else {
      setscroll(false);
      settrans(false);
    }
  };
  
  const Scrolltop=()=>{
    window.scrollTo(0,0);
  }
  
 // NavBar on the normal screen
  const nav_link = [
    { title: "Home", path: "/" },
    { title: "Movie", path: "/" },
    { title: "TvShow", path: "/" },
    { title: "Pricing", path: "/" },
    { title: "Blog", path: "/" },
    { title: "Contact", path: "/" },
  ];

const nav_link_show = nav_link.map((e, index) => {
    return (
      <li key={index} className="me-4">
        <a href={e.path}>{e.title}</a>
      </li>
    );
  });

// NavBar on mobile screen
  const nav_in_mobile = nav_link.map((e, index) => {
    return (
      <li key={index} className="p-3 text-center">
        <a onClick={() => setopen(!open)} href={e.path}>
          {e.title}
        </a>
      </li>
    );
  });

  return (
    <>

{/* header as a container which include the NavBar and Search */}
<header style={{ position:"fixed" ,transform: trans?"translateY(-150%)":"translateY(0)"}} className="w-100">
        
        {/* NavBar on the normal screen which include a logo ul and bars */}
        <nav
          style={{ backgroundColor: scroll ? `${bgColor}` : "transparent" }}
          className="nav "
        >
          <div className=" d-flex w-100 px-2 py-2 d-lg-justify-content-evenly  justify-content-between container">

            {/* Logo */}
            <div className="logo">
              {/* <img src={logo} alt="logo" /> */}
            </div>

            {/* Ul */}
            <div className="d-none d-lg-block">
              <ul className=" d-flex text-light ">{nav_link_show}</ul>
            </div>

            {/* Bars */}
            <div className="d-flex d-lg-none align-items-center ps-2 ">
              <span id='bars' style={{ transform: !open ? "scale(1)" : "scale(0)" }}>
                <FaBars
                  color={open ? "#e3d704" : "white"}
                  fontSize={"35px"}
                  cursor={"pointer"}
                  onClick={() => setopen(!open)}
                />
              </span>
            </div>
          </div>
        </nav>


        {/* Search */}
        <div className="search position-relative my-3">
          <CiSearch />
          <input
            type="search"
            className="h-100  w-100"
            placeholder=" Find Movie..."
          />
        </div>


</header>


{/* NavBar on mobile screen */}
<ul id="mobile" className="p-4"
        style={{ transform: open ? "translateX(0)" : "translateX(200%)"}}>
       
       
        <span>
          <p> Eternityflx </p>
          <IoClose
            style={{ transform: open && "rotate(-180deg)" }}
            color={"#e3d704"}
            fontSize={"35px"}
            cursor={"pointer"}
            onClick={() => setopen(!open)}
          />
        </span>

        {nav_in_mobile}

</ul>


{/* Scroll TOP */}
<span id="top"
          style={{transform: scroll ? "translateY(0)" : "translateY(-1500px)"}}
          onClick={Scrolltop}>
          <IoChevronUpOutline />
          <IoChevronUpOutline />
</span>

   </>  )
}
