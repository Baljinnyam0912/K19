import FooterNavigation from "./FooterNavigation";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'


const footerItems = [{
    title:  'Тусламж',
    path: '/HelpCenter',
}, {
    title: 'Бидний тухай',
    path: '/About'

}, {
    title: 'Заавар',
    path: '/Help'
}, {
    title: 'Төлбөр ба Буцаан олголт',
    path: 'Payments'
}];


const Footer = (props) => {
    return  <footer className="">
    <FooterNavigation items={footerItems}></FooterNavigation>
</footer>
}

export default Footer;