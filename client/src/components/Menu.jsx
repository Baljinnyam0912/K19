import Navigation  from "./Navigation";
import {BsPencil} from 'react-icons/bs';
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {AiOutlineLogin} from 'react-icons/ai'
import {MdFavorite} from 'react-icons/md'


// <MdFavorite/>
{/* <MdOutlineLocalGroceryStore/> */}

// ,{
//     title: 'adaw',
//     path: '/AdminSign'
// }
// , {
//     title: <AiOutlineLogin/>,
//     path: '/login'
// }

const headerItems = [
    {
        title:  <MdFavorite/> ,
        path: "/saved"
    }, {
        title:  <MdOutlineLocalGroceryStore/>,
        path: "/store"
    }, 
    
    
    {
    title: "Хэрхэн худалдан авах вэ?",
    path: '/how do to buy'
      
} ,{
    title: "Хэрхэн зарах вэ?",
    path: "/how do to sell"
}

];

// {
//     title: "Бүртгүүлэх",
//     path: '/sign'
// },


const Header = (props) => {
    return <header className="w-full text-white h-[80px] bg-[#15181d] flex items-center justify-between">
        <div className="w-[250px] h-[50px] bg-[url('../../Picture/Headerlogo.png')]"></div>
        <Navigation items={headerItems} />
    </header>
}

export default Header;


// bg-[#1a202c] 
// {
//     title: 'Бидний тухай',
//     path: '/about?user=1'
// },
// title: 'Заавар',
// path: '/service'