import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const CAROUSEL_ENDPOINT = process.env.CAROUSEL_API_ENDPOINT;
// http://localhost:8080/epiceats/carousel , set this in environment with the name 'CAROUSEL_ENDPOINT'

export const Carousel = () => {
  const [banners, setBanners] = useState([]);
  const [bannersIndex, setBannerIndex] = useState(0);

  const changeSlide = (direction) => {
    setBannerIndex(
      (bannersIndex + direction + banners.length) % banners.length
    );
  };

  const byteArrayToBase64 = (byteArray) => {
    let binary = "";
    for (let i = 0; i < byteArray.length; i++) {
      binary += String.fromCharCode(byteArray[i]);
    }
    return window.btoa(binary);
  };

  useEffect(() => {
    async function fetchData() {
      try {
     
        var response = await fetch(CAROUSEL_ENDPOINT);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        response = await response.json();
        
        for (let i = 0; i < response.length; i++) {
          response[i].patData = byteArrayToBase64(response[i].imageData);
        }
        setBanners(response);
      } catch (error) {
        console.log("Error : ", error);
      }
    }
    fetchData();
  }, []);

  if (banners.length) {
    return (
      <div className="m-2 p-1 max-w-[1440px] h-[200px] relative group">
        <div
          key={banners[bannersIndex].id}
          style={{
            backgroundImage: `url(data:image/jpeg;base64,${banners[bannersIndex]?.imageData})`,
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={() => changeSlide(-1)} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={() => changeSlide(1)} size={30} />
        </div>
      </div>
    );
  }
};
