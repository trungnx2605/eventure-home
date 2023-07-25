import { VoiceIcon } from "../../assets/icons";

const Introduce = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-neutral">
      <div className="flex flex-col ">
        <div className="flex items-center gap-x-6 eventure-headline-1 text-[white]">
          <div className="relative">
            <span className="text-gradient bg-gradient-primary ">Eventure</span>
            <VoiceIcon
              width={30}
              height={30}
              className="text-secondary-2 absolute -top-2 -right-4"
            />
          </div>
          <p>The Ultimate Virtual </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="eventure-headline-1 text-[white]">Event Platform</p>
        </div>
      </div>
      <div className="mt-6 text-sm flex flex-col items-center">
        <p className="text-[white] eventure-caption-3">
          Host engaging conferences, webinars and events with advanced features
          and seamless user
        </p>
        <p className="text-[white] eventure-caption-3">
          interface that closely replicate in-person experiences.
        </p>
      </div>
      <div className=" mt-8 mb-4">
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
