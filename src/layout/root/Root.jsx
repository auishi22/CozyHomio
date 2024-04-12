import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Slider from "../../components/slider/Slider";

const Root = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      
      <div className="max-w-7xl mx-auto font-poppins min-h-[calc(100vh-116px)">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
