import  React from "react";
import './style.css'
import Poster from "./poster";
import Button from "./buttonTwo";
import Login from "../views/Login";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";


const body = () => {
    return  <div className="w-full h-[50vh] flex flex-col opacity-100 bg-cover bg-[url('../Picture/homeback.jpeg')] ">
      {/* <div className="w-full h-[100vh] bg-red-500">
      <
    
      </div> */}
      <Fade bottom>
      <div className="w-full h-[40vh] bg-none flex items-center">
        <h1 className="text-5xl text-white ml-[200px] opacity-100 absolute ">АККОУНТНЫ АЮУЛГҮЙ ХУДАЛДАА... </h1>
      </div>
      <div className="w-full h-[20vh] bg-red-none flex flex-col space-y-1.5 ">
      <Link to={"/login"}>
     
      <Button title="НЭВТРЭХ" color="black" ></Button>
       </Link>
       <Link to={"/sign"}>
       <Button title="БҮРТГҮҮЛЭХ" color="black" ></Button>
       </Link>
      
     
        
      </div>
      {/* <h1 className="text-white absolute font-5xl">АККОУНТНЫ АЮУЛГҮЙ ХУДАЛДАА</h1> */}
      {/* <Poster></Poster> */}
      {/* <div className="w-[50%] h-[80px] bg-red-500 mt-48 flex rounded-2xl overflow-hidden flex-row">
        <input className="h-[80px] w-[80%] focus-none"  type="text" placeholder=" Search / Хайх" />
        <button className="h-[80px] w-[20%] bg-red-400 text-white text-2xl">Хайх</button>
      </div> */}
      </Fade>
    
      
    </div>
    
}
export default body;

// bg-gray-800


// bg-[url('../Picture/esport.jpg')]
// bg-[#15181d]


