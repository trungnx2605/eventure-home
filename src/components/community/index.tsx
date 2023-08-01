import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { CommunityItemType } from "../../types";
import "swiper/css";
import "swiper/css/virtual";

import { Virtual } from "swiper/modules";
import CommunityItem from "./community-item";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets_home/icons";

const CommunityItems: CommunityItemType[] = [
  {
    img: "src/assets_home/images/community-img1.png",
    name: "Jane Smith",
    position: "UX Designer",
    descriptions: [
      "“Eventure has truly exceeded my expectations. The platform is user-friendly and provided a seamless event experience. The interactive features, such as Q&A sessions and networking opportunities, enhanced engagement and fostered valuable connections.",
      " I highly recommend Eventure for any event organizer looking to deliver an exceptional and impactful event.”",
    ],
  },
  {
    img: "src/assets_home/images/community-img3.png",
    name: "Olivia Amelia",
    position: "Product Owner",
    descriptions: [
      "“Eventure has completely transformed the way we host events. The customization options for event pages allowed us to create a visually stunning and informative platform.",
      " Attendees were impressed by the immersive sessions and the ability to interact with speakers and fellow participants. Eventure has become our go-to solution for delivering top-notch events”",
    ],
  },
  {
    img: "src/assets_home/images/community-img2.png",
    name: "Matthew Olaoluwa",
    position: "UX Designer",
    descriptions: [
      "I can't thank Eventure enough for the exceptional support they provided throughout our event. From registration to live sessions, everything ran seamlessly. The interactive features like polls and chat functionality added a new level of engagement. Our attendees praised the platform, and we received positive feedback about the overall event experience. Eventure truly helped us create an unforgettable event.",
    ],
  },
];

const Community = () => {
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
    <div className="flex flex-col w-full md:items-center relative pt-[70px] pb-[50px]">
      <img
        src="src/assets_home/images/bg-ellipse.png"
        alt=""
        className="absolute top-0 left-[50%] translate-x-[-50%] hidden md:flex"
      />
      <img
        src="src/assets_home/images/cmnt-circle-color-left.png"
        alt=""
        className="absolute top-[6%] left-[20%] translate-x-[-20%] hidden md:flex"
      />
      <img
        src="src/assets_home/images/cmnt-circle-color-right.png"
        alt=""
        className="absolute top-0 right-[12%] translate-x-[12%] hidden md:flex"
      />
      <p className="md:eventure-label-6 eventure-label-7 text-gradient bg-gradient-third uppercase pt-[30px] px-5 md:px-0">
        ready to get started
      </p>
      <p className="eventure-headline-3 text-[white] mt-2 hidden md:flex">
        What the community is saying
      </p>
      <p className="eventure-headline-6 text-[white] mt-2 md:hidden px-5">
        What the
      </p>
      <p className="eventure-headline-6 text-[white] md:hidden px-5">
        community is saying
      </p>
      <Swiper
        modules={[Virtual]}
        spaceBetween={32}
        virtual
        centeredSlidesBounds
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          740: {
            slidesPerView: 3,
          },
        }}
        loop
        loopPreventsSliding
        className="!flex !flex-1 !flex-col px-4 md:!px-[60px] md:!mx-0 !items-center !justify-center !max-w-full pt-[54px] md:pt-[88px] pb-[56px]"
      >
        {CommunityItems?.map((item, index: number) => (
          <SwiperSlide
            key={index}
            virtualIndex={index}
            className="xs:!w-fit !w-full !flex !justify-center !ml-4"
          >
            <CommunityItem data={item} />
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

export default Community;
