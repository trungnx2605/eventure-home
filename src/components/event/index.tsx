const Event = () => {
  return (
    <div className="flex flex-col w-full items-center relative mt-[-100px]">
      <img
        src="assets_home/images/event-ellipse.png"
        alt=""
        className="absolute top-1/2 translate-y-[-50%]"
      />
      <img
        src="assets_home/images/event-gradient.png"
        alt=""
        className="hidden sm:flex"
      />
      <img
        src="assets_home/images/event-gradient-mb.png"
        alt=""
        className="sm:hidden w-full max-h-[706px]"
      />
      <img
        src="assets_home/images/event-circle-color-left.png"
        alt=""
        className="absolute left-[8%] top-1/4 -translate-y-1/4"
      />
      <img
        src="assets_home/images/event-circle-color-right.png"
        alt=""
        className="absolute right-[8%] top-1/2 -translate-y-1/2"
      />

      <div className="flex flex-col w-full items-center absolute top-1/2 translate-y-[-50%] px-5 md:px-0">
        <p className="text-center md:eventure-headline-2 sm:eventure-headline-3 eventure-headline-5 text-[white] sm:max-w-[600px] md:max-w-[850px]">
          Ignite Your Events and Unleash Revenue Growth with{" "}
          <span className="text-gradient bg-gradient-primary">Eventure</span>
        </p>
        <p className="text-[white] lg:eventure-body-3 sm:max-w-[550px] md:max-w-[690px] eventure-body-2 text-center mt-6">
          The ultimate virtual event platform that provides a seamless and
          engaging virtual event experience
        </p>
        <button className="bg-neutral-700 border border-neutral-500 rounded-lg uppercase text-neutral eventure-button-1-bold hover:opacity-80 cursor-pointer py-[14px] px-[46px] mt-10">
          Book a demo
        </button>
      </div>
    </div>
  );
};

export default Event;
