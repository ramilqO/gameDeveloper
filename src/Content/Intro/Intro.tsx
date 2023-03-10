import { Box } from "@chakra-ui/react";
import { useState } from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import project1 from "../../images/content/projects/project1/project1P768px@4x.webp";
import project2 from "../../images/content/projects/project2/project2P768px@4x.webp";
import project3 from "../../images/content/projects/project3/project3P768px@4x.webp";
import project4 from "../../images/content/projects/project4/project4P768px@4x.webp";
import project5 from "../../images/content/projects/project5/project5P768px@4x.webp";
import project6 from "../../images/content/projects/project6/project6P768px@4x.webp";
import project7 from "../../images/content/projects/project7/project7P768px@4x.webp";
import project9 from "../../images/content/projects/project9/project9P768px@4x.webp";
import project10 from "../../images/content/projects/project10/project10P768px@4x.webp";
import project11 from "../../images/content/projects/project11/project11P768px@4x.webp";
import project12 from "../../images/content/projects/project12/project12P768px@4x.webp";
import project13 from "../../images/content/projects/project13/project13P768px@4x.webp";
import project14 from "../../images/content/projects/project14/project14P768px@4x.webp";
import project15 from "../../images/content/projects/project15/project15P768px@4x.webp";
import project16 from "../../images/content/projects/project16/project16P768px@4x.webp";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface IOpactity {
  setOpacityHeader: (num: any) => void;
}

const Intro = ({ setOpacityHeader }: IOpactity) => {
  const [videoContent, setVideoContent] = useState("UVZobZBuEO0");
  const [heightVideo, setHeigthVideo] = useState("100vh");

  let heightTop = window.pageYOffset;

  window.addEventListener("scroll", () => {
    setHeigthVideo("80vh");
    setOpacityHeader("1");

    if (heightTop <= 10) {
      setHeigthVideo("100vh");
      setOpacityHeader("0.1");
    } else {
    }
  });

  return (
    <Box className="intro-section">
      <div
        className="video-block"
        style={{
          height: heightVideo,
          transition: "0.3s",
          width: "100%",
          cursor: "none",
          objectFit: "contain",
        }}
      >
        <iframe
          height="100%"
          width="100%"
          src={`https://www.youtube.com/embed/${videoContent}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoContent}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="container">
        <Swiper
          className="intro-slider"
          style={{
            maxWidth: "100vw",
            height: "25vh",
            display: "flex",
            marginTop: "20px",
            justifyContent: "space-around",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide
            style={{ height: "25vh" }}
            onClick={() => setVideoContent("lpTYyokjECk")}
          >
            <a data-fancybox="gallery" href={project1}>
              <img src={project1} alt="project " />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery" href={project2}>
              <img src={project2} alt="project " />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery" href={project3}>
              <img src={project3} alt="project " />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery" href={project4}>
              <img src={project4} alt="project " />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery" href={project5}>
              <img src={project5} alt="project " />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery" href={project6}>
              <img src={project6} alt="project " />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery" href={project7}>
              <img src={project7} alt="project " />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery" href={project9}>
              <img src={project9} alt="project " />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery" href={project10}>
              <img src={project10} alt="project " />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery" href={project11}>
              <img src={project11} alt="project " />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery" href={project12}>
              <img src={project12} alt="project " />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a data-fancybox="gallery" href={project13}>
              <img src={project13} alt="project " />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a data-fancybox="gallery" href={project14}>
              <img src={project14} alt="project " />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a data-fancybox="gallery" href={project15}>
              <img src={project15} alt="project " />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a data-fancybox="gallery" href={project16}>
              <img src={project16} alt="project " />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </Box>
  );
};

export default Intro;
