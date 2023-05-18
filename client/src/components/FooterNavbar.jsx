import { Link } from "react-router-dom";

const FooterItem = (props) => {
    return <Link to={props.path}>
        <li className="text-1xl flex flex-col text-white ml-[10px] mt-[40px] bg-crew  hover:text-red-400 ease-in-out duration-300  cursor-pointer rounded-full">
            {props.title}
        </li>
    </Link>
}
export default FooterItem;