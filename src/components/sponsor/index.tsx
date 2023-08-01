const Sponsor = () => {
  return (
    <div className="flex flex-col w-full relative md:mt-[-300px] pb-16 lg:pb-0">
      <div className="relative">
        <img
          src="src/assets/images/sponsor-bg.png"
          alt=""
          className="relative z-20 hidden md:flex"
        />
        <img
          src="src/assets/images/sponsor-rectangle.png"
          alt=""
          className="absolute top-[20%] lg:top-1/4 w-full px-16 z-0 hidden md:flex"
        />
        <img
          src="src/assets/images/sponsor-ellipse.png"
          alt=""
          className="absolute top-1/2 left-1/2 -translate-y-1/3 -translate-x-1/2 z-10 hidden md:flex"
        />
        <img
          src="src/assets/images/sponsor-bg-mb.png"
          alt=""
          className="md:hidden w-full relative z-20"
        />
        <img
          src="src/assets/images/sponsor-rectangle-mb.png"
          alt=""
          className="md:hidden w-full absolute top-[10%] sm:top-[16%] z-10 px-5"
        />
        <img
          src="src/assets/images/sponsor-ellipse-mb.png"
          alt=""
          className="md:hidden w-full absolute top-0 z-15"
        />
        <div className="flex px-5 md:px-16 mt-[-20px] sm:mt-[-50px] md:mt-[-100px] lg:px-0 lg:absolute lg:top-1/2 lg:-translate-y-[15%] lg:right-[8%] lg:translate-x-[8%] z-20 ">
          <div className="flex flex-col max-w-[417px]">
            <p className="eventure-label-4 md:eventure-label-3 text-gradient bg-gradient-third">
              Virtual Marketplace
            </p>
            <p className="md:eventure-headline-4 eventure-label-1 text-[white] mt-1">
              Sponsor Booths
            </p>
            <p className="eventure-body-1 md:eventure-body-2 text-[white] mt-4 md:mt-6">
              Sponsor Booths feature offers an interactive and immersive way for
              sponsors and exhibitors to showcase their products, services, and
              brand to event attendees. With Sponsor Booths, you can provide a
              virtual marketplace where sponsors can generate leads, and drive
              brand awareness.
            </p>
            <div className="flex justify-center items-center bg-gradient-primary rounded-lg w-[160px] py-[2px] px-[2px] mt-8 md:mt-12">
              <button className="flex justify-center w-full items-center bg-neutral-100 rounded-lg py-3 eventure-button-1-semibold text-grey-100 hover:opacity-80">
                TRY IT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
