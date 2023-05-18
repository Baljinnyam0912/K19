import FooterItem from "./FooterNavbar";
 const FooterNavigation = props => {
    return <div>
        <ul  className=" md:flex text-xl hidden flex flex-col">
            {
                props.items?.map((item, index) => {
                    return <FooterItem path={item.path} key={`item-${index}`} title={item.title}></FooterItem>


                })
            }
        </ul>


    </div>
 }
 export default FooterNavigation;
