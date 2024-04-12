import Estate from "../../components/estate/Estate";
import Slider from "../../components/slider/Slider";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const estates = useLoaderData();
  console.log(estates);
  return (
    <div className="my-10">
      <Slider></Slider>
      <div className="text-center my-8 space-y-3">
        <h2 className="text-4xl font-bold">Best Deals for Rent and Sale</h2>
        <p className="lg:px-36">
          Discover the perfect blend of cortifort, luxury, and affordability
          with our exclusive residential doals! Whether you're searching for a
          cozy apartment, a spacious family home, or a tranquill retreat we have
          the perfect property to suit your lifestyle and budget.
        </p>
      </div>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-cubic"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-center"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {estates.map((estate) => (
          <Estate key={estate.id} estate={estate}></Estate>
        ))}
      </div>
    </div>
  );
};

export default Home;
