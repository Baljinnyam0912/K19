const Button = ({title , click ,}) => {
    return <button onClick={click} className="w-[200px] h-[50px] bg-red-600 mt-5 text-white rounded-2xl cursor-pointer ">{title}</button>
}

export default Button;  