const Button = ({ title, color, light, click, circle }) => {
    return <button onClick={click} className={`bg-[${color ? color : light ? '#fff' : '#333'}] w-[150px] h-[50px]  ${light ? 'text-[#333]' : circle ? 'text-' + color + '-400' : 'text-white'} font-bold border-2 border-[${color ? color : '#333'}] ${circle ? " flex items-center justify-center rounded-full bg-opacity-40 hover:bg-opacity-100 hover:text-red-400 " : " px-6 py-2"} transition duration-300 ml-[200px] hover:text-red-400 `}>{title}</button>
}

export default Button;