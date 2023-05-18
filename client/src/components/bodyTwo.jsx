import React from "react";
import Game from "./game";
import Fade from 'react-reveal/Fade'
import Account from "./account";



const bodyTwo = () => {



    return <div className="w-full h-[450px] bg-gray-800  flex justify-center  ">
        <Fade bottom>
        {/* <h1 className="text-white">АККОУНТУУД</h1> */}


        {/* w-full h-[100vh] bg-gray-800 flex justify-center flex-col   */}
        <div className="w-[800px] h-[400px] bg-[url('../Picture/csgo.jpg')] bg-cover ml-5 mt-5 rounded"></div>
        <div className="w-[500px] h-[400px] bg-[url('../Picture/pubg.jpg')] bg-cover ml-5 mt-5 rounded"></div>
        
        </Fade>


    </div>
}



export default bodyTwo;

