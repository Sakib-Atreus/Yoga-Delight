import Banner from "../../Shared/Navbar/Banner/Banner";
import Instructor from "../Instructor/Instructor";
import Classes from "./Classes/Classes";
import Section from "./Section/Section";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Classes></Classes>
            <Instructor></Instructor>
        <Section></Section>
        
      
            
        </div>
    );
};

export default Home;