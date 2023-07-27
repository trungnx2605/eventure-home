const Network = () => {
  return (
    <div className=" ">
      <div className="flex flex-col md:relative">
        <img
          src="src/assets/images/Group 437.png"
          alt=""
          className=" hidden md:flex "
        />
        <img
          src="src/assets/images/Group 438.png"
          alt=""
          className="md:hidden"
        />

        <div className=" md:absolute md:top-1/3 flex flex-col px-14 pb-10 max-[440px]:px-5 md:mt-[-280px] -mt-40">
          <div className=" flex flex-col py-5  ">
            <span className=" text-gradient bg-gradient-third uppercase">
              custom event pages
            </span>
            <div className=" text-[white] eventure-headline-4 mt-1 max-[440px]:eventure-label-1">
              Networking Opportunities
            </div>
          </div>
          <div className="">
            <p className=" text-[white] max-w-lg ">
              Eventure provides a range of networking opportunities that allow
              attendees to connect and interact with each other. You can create
              virtual networking lounges, host speed networking sessions, and
              facilitate one-on-one meetings between attendees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
