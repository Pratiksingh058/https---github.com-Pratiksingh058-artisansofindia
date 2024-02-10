import "../Home/home.css";

import ImgSlider from "../Home/imgslider";

import image1 from "../Assets/Images/banner1.svg";

const Home = () => {
  return (
    <>
      <div className="body">
        <div className="banner">
          <ImgSlider />
        </div>
      </div>
    </>
  );
};

export default Home;
