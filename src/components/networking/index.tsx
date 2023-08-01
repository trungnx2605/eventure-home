const Networking = () => {
  return (
    <div className=" ">
      <div className="flex flex-col md:relative">
        <img
          src="src/assets/images/networking-bg.png"
          alt=""
          className="hidden md:flex max-h-[1014px] object-cover"
        />
        <img
          src="src/assets/images/networking-bg-mb.png"
          alt=""
          className="md:hidden xxs:my-[-150px] xs:my-[-200px] sm:my-[-300px]"
        />

        <div className="md:absolute md:top-0 lg:top-[15%] flex flex-col px-5 md:px-14 pb-10 md:max-w-full lg:max-w-[39%]">
          <div className="flex flex-col py-5">
            <span className="text-gradient bg-gradient-third uppercase">
              custom event pages
            </span>
            <div className=" text-[white] eventure-headline-4 mt-1 max-[440px]:eventure-label-1">
              Networking Opportunities
            </div>
          </div>
          <p className=" text-[white] ">
            Eventure provides a range of networking opportunities that allow
            attendees to connect and interact with each other. You can create
            virtual networking lounges, host speed networking sessions, and
            facilitate one-on-one meetings between attendees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Networking;
