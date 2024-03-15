import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { nanoid } from "nanoid";

export default function ProjectsSlide() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        960: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      pagination={{ clickable: true }}
      className="h-[240px] sm:h-[370px]"
      modules={[FreeMode, Pagination]}
    >
      <ul>
        <li>
          <SwiperSlide key={nanoid(5)}>
            <div className="bg-[#c8c8c83c] h-full rounded-lg px-3 py-3 flex justify-between sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#b1b1b126] transition-all duration-300 relative">
              <div className="bgcontainer-constructionProjects w-full h-full rounded-lg"></div>
            </div>
          </SwiperSlide>
        </li>
        <li>
          <SwiperSlide key={nanoid(5)}>
            <div className="bg-[#c8c8c83c] h-full rounded-lg px-3 py-3 flex justify-between sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#b1b1b126] transition-all duration-300 relative">
              <div className="bgcontainer-constructionProjects w-full h-full rounded-lg"></div>
            </div>
          </SwiperSlide>
        </li>
      </ul>
    </Swiper>
  );
}
