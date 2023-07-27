const Feater = () => {
  return (
    <>
      <div className="py-10 ">
        <div className="flex flex-row md:justify-center tems-center text-grey-100 eventure-headline-3 px-4  ">
          Features
        </div>
        <span className=" flex eventure-body-2 text-grey-400 md:hidden px-4 justify-center ">
          Lorem ipsum dolor sit amet consectetur. Nulla massa massa sit semper
          volutpat et gravida commodo. Nec tincidunt massa porttitor tortor
          magna eget
        </span>
        <div className="md:flex flex-col justify-center items-center hidden h-auto ">
          <div className="relative w-full left-0 md:-top-4  lg:top-[-200px] ">
            <img
              src="src/assets/images/pcFeature.png"
              alt=""
              className="w-full"
            />
          </div>
          <div className="w-1/3 flex justify-center items-center absolute md:top-[70%] lg:top-[62%] right-4  ">
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
              <button className="flex justify-center items-center border bg-gradient-primary rounded-lg px-4 py-3 eventure-button-1-semibold text-grey-100 hover:opacity-80">
                See how it to work
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="md:hidden w-full m-auto mt-[-150px] ">
            <img
              src="src/assets/images/MacBookAir.png"
              alt=""
              className="w-full "
            />
          </div>
          <div className=" flex flex-row justify-center items-center px-4 pt-5 md:hidden">
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
              <button className="flex justify-center items-center border bg-gradient-primary rounded-lg px-4 py-3 eventure-button-1-semibold text-grey-100 hover:opacity-80">
                See how it to work
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feater;
