import {Link} from "react-router-dom";

const NavItem  =(props) => {
    return <Link to={props.path}>
            <li className="text-base py-2  px-6 duration-300 bg-none ml-[10px] hover:text-red-400 cursor-pointer rounded">
                {props.title}

            </li>
                
           </Link>
}
export default NavItem


// hover:bg-white

// [#272727] 