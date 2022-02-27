import "../index.css";
import Btn from "./button";
import MovieCard from "./movieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import MovieDB from "../movieDB";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <div className="w-full flex h-max mb-6 lg:mb-10 px-3 flex-row xl:px-40" id="trending">
      <div id="TextBox" className="hidden xl:flex xl:w-1/3 flex-col justify-center items-start ">
        <div className=" lg:px-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 lg:text-[2.4rem]">TRENDING</div>
        <div className=" lg:px-8 lg:mt-6 text-[#b39cca]">
          Tinylig terrorresa. Teranade hemivena. Gylilingar pybelt. Laheten
          sarissa. Biosion. Betalvärd poheten. Ponelig. Epigon jehuning. Gångpeng
          alande. Hemit bymiligen.
        </div>
        <button className='my-3 bg-[#d7bef1] py-1 px-3 rounded-md lg:mx-8 md:text-xl md:my-5'>Explore Now</button>
      </div>
      <div id="Slider" className="w-full h-max xl:w-2/3">
        <h1 className="text-purple-600 font-bold my-5 text-3xl mx-4 xl:hidden">TRENDING</h1>
        <div className="flex">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-2/3 h-max flex justify-center items-center"
          >
            <SwiperSlide>
              <Link to={`/${MovieDB[0].Id}`}>
                <MovieCard poster={MovieDB[0].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[1].Id}`}>
                <MovieCard poster={MovieDB[1].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[2].Id}`}>
                <MovieCard poster={MovieDB[2].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[3].Id}`}>
                <MovieCard poster={MovieDB[3].poster_link} />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/${MovieDB[4].Id}`}>
                <MovieCard poster={MovieDB[4].poster_link} />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Trending;
