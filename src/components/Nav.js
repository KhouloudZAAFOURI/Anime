import {React,useState} from 'react'
import "./Nav.css"; 
import { IoChevronUpOutline,IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import Section1 from './Section1';
import Banner from './Banner';
import Search from './Search';


export default function Nav() {
  //  about the top scroll button 
  const [scroll, setscroll] = useState(false);
  //  about the navBar in the mobile screen 
  const [open, setopen] = useState(false);
  //  about the transaction of the navBar
  const [trans, settrans] = useState(false);
  //  the default component is  the Banner
  const defaultComponent = (
    <>
      <Banner />
    </>
  );
  //  about the component that will render when we click on the navBar 
    const [selectedPage, setSelectedPage] = useState(defaultComponent);

  // the function that handles the render of the component when we click on it in the NavBar
  const handleItemClick = (event, index) => {
    event.preventDefault();
    const newComponent = nav_link[index].component;
  // Update the selectedPage state by combining the default and dynamic content
    setSelectedPage(
      <>
        {defaultComponent}
        {newComponent}
      </>
    );
    // to close the NavBar in the mobile screen after we open it
    setopen(false);
  };


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
  
  //  the function of the scroll top 
  const Scrolltop=()=>{
    window.scrollTo(0,0);
  }

 // NavBar on the normal screen
  const nav_link = [
    { title: "Home", path: "/"},
    { title: "TopRated", path: "/",component: <Section1/> },
    { title: "TvShow", path: "/" },
    { title: "Pricing", path: "/" },
    { title: "Blog", path: "/" },
    { title: "Contact", path: "/" },
  ];


// NavBar on the normal screen  
const nav_link_show = nav_link.map((e, index) => {
    return (
      <li key={index} className="me-4">
        <a href={e.path}onClick={(event) => handleItemClick(event, index)}>{e.title}</a>
      </li>
    );
  });

// NavBar on mobile screen
  const nav_in_mobile = nav_link.map((e, index) => {
    return (
      <li key={index} className="p-3 text-center">
        <a  href={e.path} onClick={(event) => handleItemClick(event, index)}>
          {e.title}
        </a>
      </li>
    );
  });

  return (
    <>


{/* header as a container which include the NavBar  */}
<header style={{ position:"fixed" ,transform: trans?"translateY(-150%)":"translateY(0)" }} className="w-100">
        
        {/* NavBar on the normal screen which include an ul and bars */}
        <nav
          style={{ backgroundColor: scroll ? `${bgColor}` : "transparent"}}
          className="nav"
        >
          <div className=" d-flex w-100 px-2 align-items-center container" >

            {/* Ul */}
            <div className="d-none d-lg-block">
              <ul className=" d-flex text-light ">{nav_link_show}</ul>
            </div>

            {/* Bars */}
            <div className="d-flex d-lg-none align-items-center " style={{margin:"auto 80%"}}>
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
           
</header>

 {/* Search */}
 <Search/>


{/* NavBar on mobile screen */}

<ul id="mobile" className="p-4"
        style={{ transform: open ? "translateX(0)" : "translateX(200%)" , zIndex:"9999991"}}>
       
       
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


{/* the component that will render when on click on it on the navBar */}
    {selectedPage}


{/* Scroll TOP */}
<span id="top"
          style={{transform: scroll ? "translateY(0)" : "translateY(-1500px)"}}
          onClick={Scrolltop}>
          <IoChevronUpOutline />
          <IoChevronUpOutline />
</span>


   </>  )
}
