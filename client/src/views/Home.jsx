import Header from "../components/Menu";
import Body from "../components/body";
// import Button from "../components/button";
import BodyTwo from "../components/bodyTwo";
import BodyThree from "../components/bodyThree";
import BodyFor from "../components/bodyFor";
import Footer from "../components/footer";

// import  {homePoster} from '../data/dummy';



const App = () => {
    return <div className="w-full">
        <Header title="K19.MN"></Header>
        <Body></Body>
        <BodyTwo></BodyTwo>
        <BodyThree></BodyThree>
        <BodyFor></BodyFor>
        <Footer></Footer>
    
    </div> 

}

export default App;