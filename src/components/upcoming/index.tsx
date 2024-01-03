import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";

import { Virtual } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "../../default/icons";
import UpComingItem from "./upComing-item";

const UpComingItems = [
  {
    img: "assets_home/images/upcoming.png",
    title: "InnovateX Summit",
    desc: "A transformative event uniting visionaries, innovators, and pioneers. Immerse in cutting-edge tech, insightful sessions, workshops, and networking. Ignite innovation, gain insights, and forge connections for success.",
  },
  {
    img: "assets_home/images/upcoming.png",
    title: "Connect Electronic Festival",
    desc: "Where technology converges with innovation. Experience the latest advancements, engage in interactive demos, and connect with industry leaders in this dynamic networking event powered by Eventure.",
  },
];

const UpComing = () => {
  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <button
        className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer border border-primary-3 bg-primary-3 hover:opacity-80"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRightIcon className="text-neutral-400" />
      </button>
    );
  };

  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
      <button
        className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer hover:opacity-80 border border-neutral-600 bg-neutral "
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeftIcon className="text-[white]" />
      </button>
    );
  };
  return (
    <div className="bg-neutral-100 w-full flex flex-col items-center py-[96px]">
      <p className="eventure-headline-6 md:eventure-headline-2 max-w-[731px] text-[white] text-center">
        Upcoming Event Powered By Eventure
      </p>
      <p className="eventure-body-2 text-neutral-500 max-w-[707px] text-center mt-4">
        Unforgettable event experience awaits! Join industry leaders, experts,
        and enthusiasts for an immersive gathering powered by Eventure.
      </p>
      <Swiper
        modules={[Virtual]}
        spaceBetween={40}
        virtual
        centeredSlidesBounds
        slidesPerView={1}
        loop
        loopPreventsSliding
        className="!flex !flex-1 !flex-col px-4 md:!px-[60px] md:!mx-0 !items-center !justify-center !max-w-full  md:pt-[88px] pt-[56px]"
      >
        {UpComingItems?.map((item, index: number) => (
          <SwiperSlide
            key={index}
            virtualIndex={index}
            className="!w-full lg:!w-fit !flex !justify-center"
          >
            <UpComingItem data={item} />
          </SwiperSlide>
        ))}
        <div className="flex items-center justify-center gap-x-6 mt-[70px]">
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </div>
      </Swiper>
    </div>
  );
};

export default UpComing;
