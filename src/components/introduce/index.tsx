import { VoiceIcon } from "../../assets/icons";

const Introduce = () => {
  return (
    <div className="flex flex-col items-center pt-32 pb-16 bg-neutral md:px-16">
      <div className="flex justify-center flex-wrap items-center gap-x-6 eventure-headline-3 md:eventure-headline-1 text-[white] px-5 w-screen max-w-screen lg:max-w-[1030px]">
        <div className="relative">
          <span className="text-gradient bg-gradient-primary">Eventure</span>
          <VoiceIcon
            width={30}
            height={30}
            className="text-secondary-2 absolute -top-2 -right-7"
          />
        </div>
        <p className="md:ml-5 flex justify-center text-center">
          The Ultimate Virtual Event Platform
        </p>
      </div>
      <div className="mt-6 text-sm flex items-center justify-center max-w-[995px] px-5 flex-wrap">
        <p className="text-[white] md:eventure-caption-3 eventure-caption-1 text-center">
          Host engaging conferences, webinars and events with advanced features
          and seamless user interface that closely replicate in-person
          experiences.
        </p>
      </div>  
      <div className="mt-8 mb-10">
        <button className=" bg-secondary-2 w-48 h-12 text-sm rounded-md eventure-caption-1-semibold hover:cursor-pointer hover:opacity-90">
          GET STARTED
        </button>
      </div>
      <div className=" ">
        <img src="src/assets/images/introduce-img.png" alt="" />
      </div>
    </div>
  );
};
export default Introduce;
