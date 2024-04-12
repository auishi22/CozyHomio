import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'
import "animate.css";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full rounded-3xl h-[600px]">
        <div id="item1" className="carousel-item w-full ">
          <img
            src={slide1}
            className="w-full relative inset-0 linear-gradient(180deg,rgba(0.5,0.5,0.5,0.5),rgba(0,0,0,0.0)) "
          />
          <div className="absolute p-24 space-y-20">
            <h1 className="text-6xl font-bold text-[#73ebdd] animate__animated animate__fadeInLeft">
              Welcome to CozyHomio
            </h1>
            <p className="text-lg font-bold w-[650px] text-[#76c8cf] animate__animated animate__fadeInLeft">
              Discover your dream home with us! Welcome to CozyHomio, your
              premier destination for finding the perfect residential
              properties. Whether you're searching for a cozy townhouse, a
              luxurious apartment, or a serene retreat, we're here to help you
              every step of the way. Our platform offers a curated selection of
              residential properties, each handpicked to meet your unique needs
              and preferences. With an intuitive interface and powerful search
              tools, finding your ideal home has never been easier. Explore our
              listings, envision your future, and let us guide you on the
              journey to homeownership. At CozyHomio, your dream home awaits.
            </p>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={slide2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={slide3} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Slider;
