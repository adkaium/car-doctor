import About from "../About/About";
import Banar from "../Banar/Banar";
import OtherInfo from "../OtherInfo/OtherInfo";
import Products from "../Products/Products";
import Services from "../Services/Services";


const Home = () => {
    return (
      <div>
        <Banar></Banar>
        <About></About>
        <Services></Services>
        <OtherInfo></OtherInfo>
        <Products></Products>
      </div>
    );
};

export default Home;