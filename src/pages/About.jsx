import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import about from "../assets/frontend_assets/about_img.png";
import NewsBox from "../components/NewsBox";
import CartItem from "../components/CartItem";
import { setIsSearchOpen } from "../utils/homeSlice";
import { useDispatch } from "react-redux";
import Cart from "./Cart";

const About = () => {
  const dispatch=useDispatch();
  const toggleSearch = () => {
      dispatch(setIsSearchOpen());
    };
  return (
    <div className="px-[5vw] sm:px-[7vw] lg:px-[9vw] text-center ">
      <Navbar toggleSearch={toggleSearch} /> 
      <hr className="border-none h-[1px] bg-gray-200 mb-10"/>
      <div className="mb-10 ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-16  mb-20">
        <div>
          <img src={about} className=" w-full  mb-10 sm:mb-0 sm:min-w-[450px]" />
        </div>
        <div className="  flex items-center mb-0 pt-0 ">
          <div className="flex flex-col  justify-center  sm:pr-8 text-left font-medium w-full">
            <p className="mb-5 text-gray-500 w-full">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p className="mb-5 text-gray-500">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <p className="text-black font-bold my-6">Our Mission</p>
            <p className="text-gray-500 mb-0 pt-0">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>
      <div className="my-10  ">
        <div
          className={`flex  text-xl justify-start items-center space-x-1 font-semibold mt-8 flex-wrap p-1 xs:p-0`}
        >
          <p className=" text-gray-500">{"WHY"}</p>
          <p className=" text-gray-800">{"CHOOSE US"}</p>
          <hr className="w-[50px] border-none bg-gray-800 h-[2px]" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mb-20">
        <div className=" p-10 sm:py-20 sm:px-16 flex flex-col justify-center items-start border-[1.5px] flex-1">
          <p className="font-bold text-sm my-4">Quality Assurance:</p>
          <p className="text-sm text-gray-500 text-left">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="p-10 sm:py-20 sm:px-16 flex flex-col justify-center items-start border-[1.5px] flex-1">
          <p className="font-bold text-sm my-4">Convenience:</p>
          <p className="text-sm text-gray-500 text-left">
          
          With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>
        <div className="p-10 sm:py-20 sm:px-16 flex flex-col  text-left border-[1.5px] items-start flex-1">
          <p className=" text-sm my-4 font-bold"> Exceptional Customer Service:</p>
          <p className="text-sm text-gray-500 text-left">
         
          Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsBox />
      
      <Footer />
    </div>
  );
};

export default About;
