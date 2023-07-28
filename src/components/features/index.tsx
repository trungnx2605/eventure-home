const Features = () => {
  return (
    <div className="py-16 md:py-10 overflow-hidden">
      <div className="flex flex-row md:justify-center tems-center text-grey-100 md:eventure-headline-3 eventure-headline-7 px-5">
        Features
      </div>
      <span className="flex eventure-body-2 text-grey-400 md:hidden px-5 justify-center mt-4">
        Lorem ipsum dolor sit amet consectetur. Nulla massa massa sit semper
        volutpat et gravida commodo. Nec tincidunt massa porttitor tortor magna
        eget
      </span>
      <div className="md:flex flex-col justify-center items-center hidden">
        <div className="relative w-full left-0 md:-top-4 lg:top-[-120px]">
          <img
            src="src/assets/images/MacBookAir-pc.png"
            alt=""
            className="w-full"
          />
          <div className="w-1/3 flex justify-center items-center absolute md:top-[28%] lg:top-[43%] md:right-4 lg:right-8">
            <div>
              <h3 className="text-gradient bg-gradient-third eventure-button-1-bold pb-2">
                Custom Event Pages
              </h3>
              <h1 className="text-grey-100 eventure-headline-4 pb-4 ">
                Immersive Experience
              </h1>
              <p className="text-grey-100 eventure-body-2 pb-8">
                Eventure allows you to create custom event pages that showcase
                your brand and event details. You can add images, videos, and
                other multimedia to create an attractive and engaging page that
                will attract attendees.
              </p>
              <div className="flex justify-center items-center bg-gradient-primary rounded-lg w-[164px] py-[2px] px-[2px]">
                <button className="flex justify-center w-full items-center bg-neutral-100 rounded-lg py-3 eventure-button-1-semibold text-grey-100 hover:opacity-80">
                  See how it to work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="md:hidden w-full m-auto mt-[-100px] sm:mt-[-200px] flex justify-center items-center">
          <img
            src="src/assets/images/MacBookAir-mobile.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-center mt-[-50px] px-5 pt-5 md:hidden">
          <h3 className="text-gradient bg-gradient-third eventure-button-1-bold pb-2">
            Custom Event Pages
          </h3>
          <h1 className="text-grey-100 eventure-headline-4 pb-4 ">
            Immersive Experience
          </h1>
          <p className="text-grey-100 eventure-body-2 pb-8">
            Eventure allows you to create custom event pages that showcase your
            brand and event details. You can add images, videos, and other
            multimedia to create an attractive and engaging page that will
            attract attendees.
          </p>
          <div className="flex justify-center items-center bg-gradient-primary rounded-lg w-[164px] py-[2px] px-[2px]">
            <button className="flex justify-center w-full items-center bg-neutral-100 rounded-lg py-3 eventure-button-1-semibold text-grey-100 hover:opacity-80">
              See how it to work
            </button>
          </div>
          <div className="w-full h-[1px] bg-neutral-300 px-5 my-16 md:hidden"></div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-y-10 md:gap-y-0 w-full items-center px-5 md:px-16 relative lg:-mt-[170px]">
        <img
          src="/src/assets/images/feature-ellipse.png"
          alt=""
          className="absolute left-0 top-0 hidden md:flex"
        />
        <img
          src="/src/assets/images/feature-ellipse-mb.png"
          alt=""
          className="absolute left-0 top-1/2 -translate-y-1/2 md:hidden"
        />
        <img
          src="/src/assets/images/feature-gradient.png"
          alt=""
          className="absolute left-0 top-0 z-0 max-h-[660px] hidden md:flex"
        />
        <img
          src="/src/assets/images/feature-gradient-mb.png"
          alt=""
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 md:hidden opacity-30"
        />
        <img
          src="/src/assets/images/feature-circle-color-left.png"
          alt=""
          className="absolute left-16 top-0 hidden md:flex"
        />
        <img
          src="/src/assets/images/feature-circle-color-left-mb.png"
          alt=""
          className="absolute md:hidden left-5 top-[43%] -translate-y-[43%]"
        />

        <div className="flex-1 max-w-[576px] max-h-[540px] flex bg-gradient-primary rounded-3xl py-[2px] px-[2px]">
          <div className="rounded-3xl pt-8 pl-6 pr-10 pb-6 md:py-6 md:px-8 lg:py-14 lg:pl-14 lg:pr-[42px] bg-neutral max-h-[540px] h-full w-full z-10">
            <h3 className="text-gradient bg-gradient-third eventure-button-1-bold pb-1 ">
              Virtual Engagements
            </h3>
            <h1 className="text-grey-100 lg:eventure-headline-4 md:eventure-headline-6 eventure-label-1 pb-4 md:pb-6">
              Interactive Sessions
            </h1>
            <span className="flex justify-center eventure-body-1 lg:eventure-body-2 text-grey-100 pb-6 lg:pb-14">
              You can host interactive sessions such as webinars, keynote
              speeches, and Q&A sessions. Attendees can participate in the
              sessions by asking questions, answering polls, and chatting with
              other attendees.
            </span>
            <img src="src/assets/images/Frame.png" alt="" />
          </div>
        </div>
        <div className="flex-1 z-10 lg:ml-[-100px]">
          <img
            src="src/assets/images/Group430.png"
            alt=""
            className="w-full max-h-[760px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default Features;
