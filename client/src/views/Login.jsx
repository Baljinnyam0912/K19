import React from "react";
import Button from "../components/button";




const Login = () => {
    return <div className="h-screen w-full bg-red-500 flex justify-between"> 
        <div className="h-screen w-[30%] bg-no-repeat bg-cover bg-[url('../../Picture/vola.jpg')]"></div>
        <div className="h-screen w-[70%] bg-[#141416] flex justify-center items-center flex-col">
            <p className="text-white text-5xl  ">Нэвтрэх</p>
            <input className="w-[300px] h-[40px] border-solid border border-inherit rounded-xl bg-transparent outline-none text-white mt-5 text-xs  hover:border-yellow-500 duration-300" type="text" placeholder="  @mail.com" />
            <input className="w-[300px] h-[40px] border-solid border border-inherit rounded-xl bg-transparent outline-none text-white mt-5 text-xs  hover:border-yellow-500 duration-300" type="password" placeholder="  ####" />
            <h1 className="text-white cursor-pointer ml-40 mt-5">Нууц үг мартсан?</h1>
            <Button  title={"Нэвтрэх"}></Button> 
            <div className="w-[250px] h-[40px]  mt-3 flex justify-center items-center">
            <p className="text-white text-base ">Бүртгүүлэх бол</p>
            <a  className="text-[#f93336] text-lg cursor-pointer ml-2" href="http://localhost:3000/sign">Энд дарна уу</a>
        

            </div>
        </div>
    </div>

}
// function Login () {
//     return <div className="h-[100%] w-[100vh] bg-red-500">

//     </div>
    
// }

export default Login;