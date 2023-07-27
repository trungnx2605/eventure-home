const Feater = () => {
  return (
    <>
      <div className="py-10 z-0  ">
        <div className="flex flex-row md:justify-center tems-center text-grey-100 eventure-headline-3 px-4  ">
          Features
        </div>
        <span className=" flex eventure-body-2 text-grey-400 md:hidden px-4 justify-center ">
          Lorem ipsum dolor sit amet consectetur. Nulla massa massa sit semper
          volutpat et gravida commodo. Nec tincidunt massa porttitor tortor
          magna eget
        </span>
        <div className="md:flex flex-col justify-center items-center hidden h-1/2 ">
          <div className="relative w-full left-0 md:-top-4  lg:top-[-200px] ">
            <img
              src="src/assets/images/MacBookAir-pc.png"
              alt=""
              className="w-full"
            />
            <div className="w-1/3 flex justify-center items-center absolute md:top-[28%] lg:top-[43%] right-4  ">
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
                  other multimedia to create an attractive and engaging page
                  that will attract attendees.
                </p>
                <div className="flex justify-center items-center bg-gradient-primary rounded-lg w-[164px] ">
                  <button className="flex justify-center items-center border bg-neutral-100 rounded-lg px-4 py-3 eventure-button-1-semibold text-grey-100 hover:opacity-80">
                    See how it to work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col ">
          <div className="md:hidden w-full m-auto mt-[-150px] ">
            <img
              src="src/assets/images/MacBookAir-mobile.png"
              alt=""
              className="w-full "
            />
          </div>
          <div className=" flex flex-row justify-center items-center px-4 pt-5 md:hidden ">
            <div className="">
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
              <div className="">
                <div className="flex justify-center items-center bg-gradient-primary rounded-lg w-[164px] ">
                  <button className="flex justify-center items-center border bg-neutral rounded-lg px-4 py-3 eventure-button-1-semibold text-grey-100 hover:opacity-80">
                    See how it to work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-11/12 m-auto lg:mt-[-200px] ">
          <div className="w-1/2 hidden md:flex ">
            <div>
              <div className="border-2 bg-gradient-primary rounded-3xl py-[2px] px-[2px] ">
                <div className="bg-neutral-100 rounded-3xl m-auto ">
                  <h3 className="text-gradient bg-gradient-third eventure-button-1-bold px-14 py-3 ">
                    Virtual Engagements
                  </h3>
                  <h1 className="text-grey-100 eventure-headline-4 px-14 pb-11  ">
                    Interactive Sessions
                  </h1>
                  <span className="flex justify-center eventure-body-2 text-grey-100 px-14 pb-14">
                    You can host interactive sessions such as webinars, keynote
                    speeches, and Q&A sessions. Attendees can participate in the
                    sessions by asking questions, answering polls, and chatting
                    with other attendees.
                  </span>
                  <img
                    src="src/assets/images/Frame.png"
                    alt=""
                    className="px-14 pb-11"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 z-10 lg:ml-[-100px] md:mt-14 lg:mt-[-100px] w-full md:py-12 py-28 ">
            <img
              src="src/assets/images/Group430.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Feater;
