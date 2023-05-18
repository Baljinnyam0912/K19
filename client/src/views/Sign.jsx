import React from "react";
import Button from "../components/button";





function Sign () {
    return <div className=" w-full h-screen bg-sky-400 flex flex-row">
        <div className="w-3/6 h-screen bg-[#141416] flex items-center justify-center flex-col ">
            <div className="w-[350px] h-[350px] bg-[url('../../Picture/logo.png')]"></div>
            <p className="text-white text-2xl mt-3">Welcome to K19.MN</p>
        </div>
        <div className="w-3/6  bg-[#141416] flex items-center justify-center flex-col shadow-2xl shadow-black">
            <p className="text-white text-4xl  mb-5">Бүртгүүлэх</p>
            {/* <div className="w-[50px] h-[50px] bg-sky-500"></div> */}
            <input className="w-[300px] h-[40px]  bg-transparent outline-none border-solid border border-inherit rounded-xl text-white text-sm mt-2 hover:border-yellow-500 duration-300" type="text" placeholder=" Username / Нэр" />
            <input className="w-[300px] h-[40px]  bg-transparent outline-none border-solid border border-inherit rounded-xl text-white text-sm mt-2 hover:border-yellow-500 duration-300" type="text"  placeholder=" E-mail / Е-майл"/>
            <input className="w-[300px] h-[40px]  bg-transparent outline-none border-solid border border-inherit rounded-xl text-white text-sm mt-2 hover:border-yellow-500 duration-300" type="number"  placeholder=" Phone number / Утасны дугаар"/>
            <input className="w-[300px] h-[40px]  bg-transparent outline-none border-solid border border-inherit rounded-xl text-white text-sm mt-2 hover:border-yellow-500 duration-300" type="password" placeholder=" Password / Нууц үг" />
            <Button title={"Бүртгүүлэх"}></Button>
            <div className="w-[250px] h-[40px]  mt-3 flex justify-center items-center">
            <p className="text-white text-base ">Бүртгэлтэй юу?</p>
            <a className="text-[#f93336] text-lg cursor-pointer ml-2" href="http://localhost:3000/login">Нэвтрэх</a>
            </div>
        </div>
    </div>
    
}


export default Sign;