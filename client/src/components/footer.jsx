import React from "react";
import FooterMenu from "./FooterMenu";
import Container from "./Container";




const Footer = () => {
    return <div className="w-full h-[50vh] bg-[#121212] flex    justify-evenly">
        
        <div className="h-[100%] w-[350px] bg-none flex ">
            <div className="w-[700px] h-[200px] bg-[#272727] flex rounded-md mt-[40px] ">
                <img  src="../../Picture/footerIcon.png" alt="" />
            </div>
        </div>
        <div className="h-[100%] w-[300px] bg-none flex items-start flex-col">
        <h1 className="text-2xl text-white mt-[40px]">Тухай</h1>
            <FooterMenu></FooterMenu>
            
            
        </div>
        <div className="h-[100%] w-[300px] bg-none flex flex-col">
            <h1 className="text-2xl text-white mt-[40px]">Холбоо барих</h1>
            <li  className="ml-[10px] mt-[40px] text-white text-ls hover:text-red-400 list-none ease-in-out duration-300 ">heyK19@mail.com</li>
            <li  className="ml-[10px] mt-[40px] text-white text-1xl hover:text-red-400 list-none ease-in-out duration-300 ">+976-90777727</li>
            <li  className="ml-[10px] mt-[40px] text-white text-1xl hover:text-red-400 list-none ease-in-out duration-300 ">MnTower 14 , 1007 Ulaanbaatar, Mongolia</li>
            {/* <h3 className="ml-[10px] mt-[20px] text-white">Hey19@mail.com</h3>
            <h3>hey19@mail.com</h3>
            <h3>hey19@mail.com</h3>
            <h3>hey19@mail.com</h3> */}

           
            
        
        </div>


    </div>
}


export default Footer;